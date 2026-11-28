/* 背景音乐：Erik Satie — Gymnopédie No.1。默认不响，点右上角的 ♪ 才播。
   播放器不挂在 DOM 上，所以站内换页（router.js 的软导航）不会打断。 */
(function () {
  const KEY = "nahyuu-bgm";
  const POS = "nahyuu-bgm-pos";   // 整页跳转（比如从外部链接进来、或软导航兜底）时接上次的进度
  let audio = null;
  let resumeAt = 0;

  function btn() { return document.getElementById("bgmToggle"); }

  function paint(on) {
    const b = btn();
    if (!b) return;
    b.classList.toggle("is-on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
    b.title = on ? "背景音乐：开" : "背景音乐：关";
  }

  function get() {
    if (!audio) {
      audio = new Audio("assets/audio/gymnopedie-no1.mp3");
      audio.loop = true;
      audio.volume = 0.34;
      audio.preload = "none";
      audio.addEventListener("play", () => paint(true));
      audio.addEventListener("pause", () => paint(false));
      audio.addEventListener("seeked", () => { if (audio.currentTime > 1) resumeAt = 0; });
      if (resumeAt > 0) {
        audio.addEventListener("loadedmetadata", () => {
          try { audio.currentTime = Math.min(resumeAt, (audio.duration || resumeAt) - 1); } catch (e) {}
        }, { once: true });
      }
    }
    return audio;
  }

  function start() {
    const a = get();
    if (resumeAt > 0 && a.currentTime < 1) {
      try { a.currentTime = resumeAt; } catch (e) {}
    }
    a.play().then(() => {
      localStorage.setItem(KEY, "1");
    }).catch(() => {
      // 浏览器还没允许播放，等下一次点击/触摸再试
      const retry = () => {
        document.removeEventListener("pointerdown", retry);
        document.removeEventListener("keydown", retry);
        if (!audio || audio.paused) start();
      };
      document.addEventListener("pointerdown", retry, { once: true });
      document.addEventListener("keydown", retry, { once: true });
    });
  }

  function bind() {
    const b = btn();
    if (!b || b.dataset.bgmBound) return;
    b.dataset.bgmBound = "1";
    b.addEventListener("click", () => {
      const a = get();
      if (a.paused) start();
      else { a.pause(); localStorage.setItem(KEY, "0"); }
    });
  }

  bind();
  paint(audio ? !audio.paused : false);

  // 软导航换页后重新接管新按钮
  window.__bgmSync = function () { bind(); paint(audio ? !audio.paused : false); };
  window.__bgmSavePos = function () {
    if (!audio) return;
    try { sessionStorage.setItem(POS, JSON.stringify({ t: audio.currentTime })); } catch (e) {}
  };
  window.__bgmState = function () {
    return { playing: !!audio && !audio.paused, t: audio ? audio.currentTime : 0 };
  };

  try {
    const saved = JSON.parse(sessionStorage.getItem(POS) || "null");
    if (saved && typeof saved.t === "number" && saved.t > 1) resumeAt = saved.t;
  } catch (e) {}

  addEventListener("pagehide", () => {
    if (!audio) return;
    try { sessionStorage.setItem(POS, JSON.stringify({ t: audio.currentTime })); } catch (e) {}
  });

  if (localStorage.getItem(KEY) === "1") start();
})();
