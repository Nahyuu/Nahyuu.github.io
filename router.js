/* 站内软导航：换页不重建文档，背景音乐不中断。
   思路：拦截站内链接 → fetch 目标页 → 换掉 body 内容和样式表 → 在同一文档里
   重新执行该页脚本（包进一个函数作用域，避免 const 重复声明的语法错误）。

   每次换页前会先 resetPage()：abort 上一页挂在 window / document 上的监听，
   并跑掉上一页登记的清理函数（IntersectionObserver、定时器等）。
   没有这一步的话，每翻一页就多留一份 scroll / hashchange / keydown 监听，
   翻十几页之后滚动和输入都会明显变卡，内存也一直往上走。 */
(function () {
  if (window.__nahyuuRouter) return;
  window.__nahyuuRouter = 1;

  var SKIP = /(?:^|\/)(bgm|router)\.js/;
  var codeCache = Object.create(null);   // 页面脚本源码缓存：来回翻页不再重复请求

  /* ---------- 页面生命周期 ---------- */
  function resetPage() {
    if (window.__pageAC) {
      try { window.__pageAC.abort(); } catch (e) {}
    }
    var fns = window.__pageCleanup || [];
    for (var i = 0; i < fns.length; i++) {
      try { fns[i](); } catch (e) {}
    }
    window.__pageCleanup = [];
    window.__pageAC = new AbortController();
    window.__pageSignal = window.__pageAC.signal;
  }
  window.__resetPage = resetPage;
  resetPage();

  function target(a) {
    if (!a || a.target === "_blank" || a.hasAttribute("download")) return null;
    if (a.hasAttribute("data-placeholder")) return null; // 占位链接仍走原来的提示
    var url;
    try { url = new URL(a.getAttribute("href"), location.href); } catch (e) { return null; }
    if (url.origin !== location.origin) return null;
    if (!/\.html?$/.test(url.pathname)) return null;
    if (url.pathname === location.pathname) return null; // 同页（含锚点）交回浏览器
    return url;
  }

  function syncStyles(doc) {
    var want = Array.prototype.map.call(doc.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return l.getAttribute("href");
    });
    Array.prototype.forEach.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      if (want.indexOf(l.getAttribute("href")) < 0) l.remove();
    });
    var have = Array.prototype.map.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return l.getAttribute("href");
    });
    want.forEach(function (href) {
      if (!href || have.indexOf(href) >= 0) return;
      var l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      document.head.appendChild(l);
    });
  }

  function applyTheme(doc) {
    var isHome = Array.prototype.some.call(doc.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return /home\.css/.test(l.getAttribute("href") || "");
    });
    var theme = localStorage.getItem("theme");
    // 首页默认浅色（深色加 body.dark）；子页默认深色（浅色加 body.white_ver）
    // 没选过主题就各页走自己的默认，和整页跳转时的表现一致
    document.body.className = "";
    if (isHome && theme === "dark") document.body.classList.add("dark");
    if (!isHome && theme === "light") document.body.classList.add("white_ver");
  }

  // Pages 偶尔 503，取不到就退避重试，别让页面停在空状态
  function once(url) {
    var ctl = "AbortController" in window ? new AbortController() : null;
    var timer = ctl ? setTimeout(function () { ctl.abort(); }, 7000) : 0;
    return fetch(url, { credentials: "same-origin", signal: ctl ? ctl.signal : undefined })
      .then(function (r) {
        clearTimeout(timer);
        if (r.ok) return r.text();
        throw new Error("HTTP " + r.status + " " + url);
      })
      .catch(function (e) { clearTimeout(timer); throw e; });
  }

  function grab(url, tries) {
    tries = tries || 2;
    return once(url).catch(function (err) {
      if (tries <= 1) throw err;
      return new Promise(function (res) { setTimeout(res, 400 * (4 - tries)); })
        .then(function () { return grab(url, tries - 1); });
    });
  }

  function grabCode(src) {
    if (codeCache[src]) return Promise.resolve(codeCache[src]);
    return grab(src).then(function (code) {
      codeCache[src] = code || "";
      return codeCache[src];
    });
  }

  function collect(doc) {
    var srcs = Array.prototype.map.call(doc.querySelectorAll("script[src]"), function (s) {
      return s.getAttribute("src");
    }).filter(function (s) { return s && !SKIP.test(s); });

    var parts = [];
    return srcs.reduce(function (chain, src) {
      return chain.then(function () {
        return grabCode(src).then(function (code) { if (code) parts.push(code); });
      });
    }, Promise.resolve()).then(function () { return parts; });
  }

  function run(parts) {
    if (!parts.length) return;
    resetPage();
    try {
      new Function(parts.join("\n;\n"))();
    } catch (e) {
      console.error("[nav] 页面脚本出错", e);
    }
  }

  function scrollTop() {
    try { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
    catch (e) { window.scrollTo(0, 0); }
  }

  var busy = false;

  function go(href, push) {
    if (busy) return;
    busy = true;
    document.documentElement.classList.add("nav-busy");
    grab(href)
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, "text/html");
        // 先把目标页脚本取齐，取不到就整页跳，别停在半渲染的页面上
        return collect(doc).then(function (parts) {
          document.title = doc.title;
          syncStyles(doc);
          applyTheme(doc);
          document.body.innerHTML = doc.body.innerHTML;
          scrollTop();
          if (push) history.pushState({ nahyuu: 1 }, "", href);
          run(parts);
          if (window.__bgmSync) window.__bgmSync();
        });
      })
      .catch(function (e) {
        console.warn("[nav] 退回整页跳转", e);
        if (window.__bgmSavePos) window.__bgmSavePos();
        location.href = href;
      })
      .then(function () {
        busy = false;
        document.documentElement.classList.remove("nav-busy");
      });
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    var url = target(a);
    if (!url) return;
    e.preventDefault();
    go(url.pathname + url.search, true);
  }, true);

  window.addEventListener("popstate", function () {
    go(location.pathname + location.search, false);
  });
})();
