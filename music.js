/* =========================================================
   音乐页
   ---------------------------------------------------------
   数据在 music-data.js（由红心歌单自动生成，别手改）
   全碟曲目在 tracks/0.json … tracks/31.json（按专辑 id 取模分片，
   点开某一张只取那一片，不再一次性下载 900KB）

   这里只有人工部分：
     NOTES   给某张专辑写一句话，键 = 网易云专辑 id
             （点开一张专辑，地址栏 #a/ 后面那串数字就是）
     PINNED  置顶专辑 id，按顺序排在最前
   ========================================================= */
const NOTES = {
  // 35297662: "写给 async 的一句话。",
};

const PINNED = [
  // 35297662,
];

const PAGE = 96;
const NE = "https://music.163.com";
const CHUNKS = 32;

const MUSIC_SIG = window.__pageSignal;
const MUSIC_CLEANUP = window.__pageCleanup || [];

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const pad = (n) => String(n).padStart(2, "0");
const fmt = (s) => { if (!s) return ""; return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
const thumb = (url, w) => url ? `${url}?param=${w}y${w}` : "";
/* 网易云的封面就算只要 320 也常有一百多 KB，交给 srcset 让浏览器按屏幕密度挑：
   手机 / 普通屏只下 160–224 那一档 */
const thumbSet = (url, ws) => url ? ws.map((w) => `${url}?param=${w}y${w} ${w}w`).join(", ") : "";
const collator = new Intl.Collator(["zh", "ja", "en"], { sensitivity: "base", numeric: true });
const byArtist = (x, y) => collator.compare(x.a, y.a) || collator.compare(x.t, y.t);

/* 排序 / 搜索键只算一次：2166 张专辑，每次输入都跑 collator 会很卡 */
ALBUMS.forEach((a) => {
  a.q = `${a.t} ${a.a || ""}`.toLowerCase();
  a.n = (a.k || []).length;
});
ALBUMS.slice().sort(byArtist).forEach((a, i) => { a.r = i; });

const byRank = (x, y) => x.r - y.r;
const byYear = (x, y) => (y.y || 0) - (x.y || 0) || x.r - y.r;
const byCount = (x, y) => y.n - x.n || x.r - y.r;

const state = { q: "", sort: "artist", shown: PAGE };
const byId = new Map(ALBUMS.map((a) => [a.id, a]));
let current = [];

function computeList() {
  const q = state.q.trim().toLowerCase();
  const list = q ? ALBUMS.filter((a) => a.q.includes(q)) : ALBUMS.slice();
  if (state.sort === "year") list.sort(byYear);
  else if (state.sort === "count") list.sort(byCount);
  else list.sort(byRank);
  const pinned = PINNED.map((id) => byId.get(id)).filter((a) => a && list.includes(a));
  current = pinned.length ? [...pinned, ...list.filter((a) => !pinned.includes(a))] : list;
}

function renderShelf() {
  computeList();
  const shelf = document.getElementById("shelf");
  document.getElementById("shelf-count").textContent = `${current.length} 张`;
  document.getElementById("stat-albums").textContent = `${ALBUMS.length} 张`;

  if (!current.length) {
    shelf.innerHTML = '<div class="empty">没有匹配的专辑。</div>';
    document.getElementById("more-wrap").hidden = true;
    return;
  }
  shelf.innerHTML = current.slice(0, state.shown).map((a) => `
    <a class="card" href="#a/${a.id}">
      <span class="cover" data-title="${esc(a.t)}">
        <img src="${esc(thumb(a.p, 256))}" srcset="${esc(thumbSet(a.p, [160, 224, 320, 480]))}"
             sizes="(max-width: 640px) 46vw, (max-width: 1000px) 30vw, 265px"
             alt="${esc(a.t)}" width="320" height="320" loading="lazy" decoding="async">
      </span>
      <h4>${esc(a.t)}</h4>
      <h6>${esc(a.a)}${a.y ? ` · ${a.y}` : ""}</h6>
      <span class="hair"></span>
    </a>`).join("");
  bindCovers(shelf);
  document.getElementById("more-wrap").hidden = state.shown >= current.length;
}

/* ---------- 全碟曲目：按 32 片按需取，只留下看过的几片 ---------- */
const trackCache = new Map();
const trackLoading = new Map();
const chunkKey = (id) => String(Number(id) % CHUNKS);

function albumTracks(id) {
  const chunk = trackCache.get(chunkKey(id));
  const t = chunk ? chunk[String(id)] : null;
  return Array.isArray(t) && t.length ? t : null;
}

function loadTracks(id) {
  const c = chunkKey(id);
  if (trackCache.has(c)) return Promise.resolve(trackCache.get(c));
  let p = trackLoading.get(c);
  if (!p) {
    p = fetch(`tracks/${c}.json`, { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : {}))
      .then((d) => { trackCache.set(c, d || {}); return trackCache.get(c); })
      .catch(() => { trackLoading.delete(c); return {}; });
    trackLoading.set(c, p);
  }
  return p;
}

function tracksHTML(a, full) {
  const liked = new Set((a.k || []).map((t) => t.i));
  const rows = full
    ? full.map(([no, n, d, id]) => ({ no, n, d, id, liked: liked.has(id) }))
    : (a.k || []).map((t, i) => ({ no: i + 1, n: t.n, d: t.d, id: t.i, a: t.a, liked: true }));
  return `
    <div class="tracks">
      <div class="tracks-head"><span>Tracks</span><span>${rows.length}</span></div>
      ${rows.map((t) => `
        <div class="track${t.liked ? " is-liked" : ""}">
          <span class="no">${pad(t.no)}</span>
          <span class="name">${esc(t.n)}${t.a ? `<small>${esc(t.a)}</small>` : ""}</span>
          <span class="dur">${fmt(t.d)}</span>
        </div>`).join("")}
    </div>`;
}

function renderDetail(id) {
  const a = byId.get(Number(id));
  const view = document.getElementById("view-detail");
  if (!a) { location.hash = ""; return; }
  const idx = current.findIndex((x) => x.id === a.id);
  const prev = idx > 0 ? current[idx - 1] : null;
  const next = idx >= 0 && idx < current.length - 1 ? current[idx + 1] : null;
  const note = NOTES[a.id] || "";

  view.innerHTML = `
    <section class="section detail">
      <div class="wrap">
        <div class="detail-top">
          <a class="back" href="#shelf"><i>←</i>回到书架</a>
          <span>${idx >= 0 ? `${pad(idx + 1)} / ${pad(current.length)}` : ""}</span>
        </div>
        <div class="detail-body">
          <div class="detail-no">α / 01 — MUSIC</div>
          <div class="detail-cover" data-title="${esc(a.t)}">
            <img src="${esc(thumb(a.p, 500))}" srcset="${esc(thumbSet(a.p, [320, 500, 640]))}"
                 sizes="(max-width: 760px) 74vw, 360px" alt="${esc(a.t)}" width="640" height="640" decoding="async">
          </div>
          <h2 class="detail-title">${esc(a.t)}</h2>
          <div class="detail-meta">
            <span>${esc(a.a)}</span>
            ${a.y ? `<span class="dot">·</span><span>${a.y}</span>` : ""}
          </div>
          ${note ? `<p class="detail-note">${esc(note)}</p>` : ""}

          ${tracksHTML(a, albumTracks(a.id))}
        </div>
      </div>
    </section>
    ${prev ? `<a class="side-nav prev" href="#a/${prev.id}" title="${esc(prev.t)}">‹</a>` : ""}
    ${next ? `<a class="side-nav next" href="#a/${next.id}" title="${esc(next.t)}">›</a>` : ""}`;
  bindCovers(view);

  if (!albumTracks(a.id)) {
    loadTracks(a.id).then(() => {
      const full = albumTracks(a.id);
      if (!full || location.hash !== `#a/${a.id}`) return;
      const old = document.querySelector("#view-detail .tracks");
      if (old) old.outerHTML = tracksHTML(a, full);
    });
  }
  window.scrollTo(0, 0);
}

function bindCovers(root) {
  root.querySelectorAll(".cover img, .detail-cover img").forEach((img) => {
    const mark = () => img.parentElement.classList.add("fallback");
    img.addEventListener("error", mark, { once: true });
    if (img.complete && img.naturalWidth === 0) mark();
  });
}

function route() {
  const m = location.hash.match(/^#a\/(\d+)/);
  const shelfView = document.getElementById("view-shelf");
  const detailView = document.getElementById("view-detail");
  if (m) {
    shelfView.hidden = true;
    detailView.hidden = false;
    detailView.innerHTML = "";
    renderDetail(m[1]);
    document.title = `${byId.get(Number(m[1]))?.t || ""} — Music — 逆光天使`;
  } else {
    detailView.hidden = true;
    shelfView.hidden = false;
    document.title = "Music — 逆光天使";
    if (!document.getElementById("shelf").children.length) renderShelf();
  }
}

(function init() {
  renderShelf();
  route();

  let timer;
  document.getElementById("q").addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.q = e.target.value; state.shown = PAGE; renderShelf(); }, 160);
  });
  document.getElementById("sort").addEventListener("change", (e) => { state.sort = e.target.value; renderShelf(); });
  document.getElementById("more").addEventListener("click", () => { state.shown += PAGE; renderShelf(); });
  window.addEventListener("hashchange", route, { signal: MUSIC_SIG });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && location.hash) location.hash = ""; }, { signal: MUSIC_SIG });

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
    MUSIC_CLEANUP.push(() => io.disconnect());
  } else items.forEach((el) => el.classList.add("in"));
})();
