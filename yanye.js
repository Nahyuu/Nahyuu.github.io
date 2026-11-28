/* =========================================================
   言叶：四种语言共用一套界面
   ---------------------------------------------------------
   数据来源：
     法语  french-data.js / french-notes.js / french-words.js（原有）
     英德日 yanye-en.js / yanye-de.js / yanye-ja.js
   勾选各存各的：nahyuu.fr.gram、nahyuu.en.gram …
   发音走 speechSynthesis，语言标签见每个包的 tag。
   ========================================================= */
const YS = window.__pageSignal;

/* ---------- 把法语老数据整成统一形状 ---------- */
function yyPackFrench() {
  if (typeof FR_GRAM === "undefined" || typeof FR_WORDS === "undefined" || typeof FR_VERBS === "undefined") return null;
  const rows = [];
  FR_GRAM.forEach(([lv, list]) => {
    list.forEach((r, i) => rows.push({ id: lv + "#" + i, lv, fr: r[0], zh: r[1], ex: r[2] || "" }));
  });

  const auxOf = (k) => {
    const a = FR_VERBS.find((x) => x.v === (k === "e" ? "être" : "avoir"));
    return a ? a.pr : [];
  };
  const verbForms = {};
  FR_VERBS.forEach((v) => {
    const aux = auxOf(v.aux);
    verbForms[v.v] = [
      v.pr,
      aux.map((a) => a + " " + v.pp + (v.aux === "e" ? "(e)" : "")),
      v.im, v.fu, v.co, v.su
    ];
  });

  return {
    key: "fr", name: "法语", tag: "fr-FR", gramLabel: "语法 A1→C1",
    rows, notes: FR_NOTES, noteById: true,
    links: [
      ["Larousse", "https://www.larousse.fr/dictionnaires/francais-anglais"],
      ["CNRTL", "https://www.cnrtl.fr/definition/"],
      ["WordReference", "https://www.wordreference.com/frzh/"]
    ],
    verbs: FR_VERBS.map((v) => ({ v: v.v, zh: v.zh })),
    verbForms,
    verbCols: ["现在时", "复合过去时", "未完成过去时", "简单将来时", "条件式现在时", "虚拟式现在时"],
    persons: ["1s", "2s", "3s", "1p", "2p", "3p"],
    phon: FR_PHON, rules: FR_PHON_RULES,
    warn: "这台设备没找到法语语音：点下去不会有声，装一个法语语音包再回来。"
  };
}

function yyPackNew(src) {
  const rows = [];
  src.gram.forEach(([lv, list]) => {
    list.forEach((r, i) => rows.push({ id: lv + "#" + i, lv, fr: r[0], zh: r[1], ex: r[2] || "" }));
  });
  return {
    key: src.key, name: src.name, tag: src.tag, gramLabel: src.gramLabel || "语法 A1→C1",
    rows, notes: src.notes, noteById: false,
    links: src.links || [],
    verbs: src.verbs, verbForms: src.verbForms, verbCols: src.verbCols, persons: src.persons || null,
    phon: src.phon, rules: src.rules,
    warn: "这台设备没找到" + src.name + "语音：点下去不会有声，装一个语音包再回来。"
  };
}

const YY = [yyPackFrench(),
  (typeof YAN_EN !== "undefined") ? yyPackNew(YAN_EN) : null,
  (typeof YAN_DE !== "undefined") ? yyPackNew(YAN_DE) : null,
  (typeof YAN_JA !== "undefined") ? yyPackNew(YAN_JA) : null
].filter(Boolean);

let cur = YY[0] || null;
try {
  const saved = localStorage.getItem("nahyuu.yan.lang");
  const f = YY.find((x) => x.key === saved);
  if (f) cur = f;
} catch (e) {}

/* ---------- 状态 ---------- */
const ui = { lv: "all", onlyTodo: false, open: null, verb: 0 };
let done = new Set();

const keyOf = (k, what) => "nahyuu." + k + "." + what;
const readSet = (k) => {
  try {
    const raw = JSON.parse(localStorage.getItem(k) || "[]");
    return Array.isArray(raw) ? new Set(raw.filter((x) => typeof x === "string")) : new Set();
  } catch (e) { return new Set(); }
};
const saveGram = () => { try { localStorage.setItem(keyOf(cur.key, "gram"), JSON.stringify([...done])); } catch (e) {} };

function loadSets() {
  done = readSet(keyOf(cur.key, "gram"));
}

/* ---------- 元素 ---------- */
const el = (id) => document.getElementById(id);
const $tab = document.querySelector(".yan-tabs");
const $tabs = document.querySelectorAll(".yan-tab");
const $panes = document.querySelectorAll(".yan-pane");
const $langs = document.querySelectorAll(".lang-tab");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- 语法 ---------- */
function tally(rows) {
  let d = 0;
  rows.forEach((r) => { if (done.has(r.id)) d++; });
  return [d, rows.length];
}

function renderLevels() {
  const box = el("fr-levels");
  if (!box) return;
  const rows = cur.rows;
  const levels = [];
  rows.forEach((r) => { if (levels.indexOf(r.lv) < 0) levels.push(r.lv); });
  const items = [["all", "全部", rows]].concat(levels.map((lv) => [lv, lv, rows.filter((r) => r.lv === lv)]));
  box.innerHTML = items.map(([k, label, rs]) => {
    const [d, n] = tally(rs);
    return '<button class="fr-chip' + (ui.lv === k ? " on" : "") + '" type="button" role="tab" aria-selected="' +
      (ui.lv === k) + '" data-lv="' + k + '">' + label + "<em>" + d + "/" + n + "</em></button>";
  }).join("");
}

function renderTable() {
  const table = el("fr-table");
  if (!table) return;
  const all = cur.rows;
  const base = ui.lv === "all" ? all : all.filter((r) => r.lv === ui.lv);
  const rows = ui.onlyTodo ? base.filter((r) => !done.has(r.id)) : base;

  if (!rows.length) {
    table.innerHTML = '<p class="fr-empty">这一级已经全部勾完了。</p>';
    return;
  }

  let html = '<div class="fr-head" aria-hidden="true"><span></span><span>语法点 / 要点</span><span>例句</span></div>';
  let band = null;
  rows.forEach((r) => {
    if (r.lv !== band) {
      band = r.lv;
      const [d, n] = tally(all.filter((x) => x.lv === band));
      html += '<div class="fr-band"><span>' + band + "</span><em>" + d + " / " + n + "</em></div>";
    }
    const on = done.has(r.id);
    html += '<button class="fr-row' + (on ? " on" : "") + '" type="button" data-id="' + r.id +
      '" aria-pressed="' + on + '"><span class="fr-mark" aria-hidden="true">' + (on ? "✓" : "") +
      '</span><span class="fr-main"><span class="fr-name">' + esc(r.fr) + '</span><span class="fr-zh">' +
      esc(r.zh) + '</span></span><span class="fr-ex">' + esc(r.ex) + "</span></button>";
  });
  table.innerHTML = html;
  if (ui.open) {
    const row = table.querySelector('.fr-row[data-id="' + ui.open + '"]');
    if (row) openDetail(row); else ui.open = null;
  }
}

function renderStats() {
  const [d, n] = tally(cur.rows);
  if (el("fr-count")) el("fr-count").textContent = d + " / " + n;
  if (el("fr-bar")) el("fr-bar").style.width = (n ? (d / n) * 100 : 0).toFixed(2) + "%";
  if (el("yy-total")) el("yy-total").textContent = cur.name + " · " + d + " / " + n;
}

function noteOf(id) {
  const r = cur.rows.find((x) => x.id === id);
  if (!r) return null;
  return cur.noteById ? cur.notes[id] : cur.notes[r.fr];
}

function detailHTML(id) {
  const n = noteOf(id);
  if (!n) return '<div class="fr-detail"><p class="fr-d-txt">这一条还没有讲解。</p></div>';
  let h = '<div class="fr-detail"><p class="fr-d-txt">' + esc(n.d) + "</p>";
  if (n.f) h += '<p class="fr-d-line"><b>形式</b>' + esc(n.f) + "</p>";
  if (n.e && n.e.length) {
    h += '<ul class="fr-d-ex">' + n.e.map((p) =>
      '<li><span class="fr-d-fr">' + esc(p[0]) + '</span><span class="fr-d-zh">' + esc(p[1]) + "</span></li>").join("") + "</ul>";
  }
  if (n.t) h += '<p class="fr-d-line tip"><b>注意</b>' + esc(n.t) + "</p>";
  return h + "</div>";
}

function closeDetail() {
  document.querySelectorAll(".fr-detail").forEach((d) => d.remove());
  document.querySelectorAll(".fr-row.open").forEach((r) => r.classList.remove("open"));
  ui.open = null;
}

function openDetail(row) {
  const id = row.dataset.id;
  document.querySelectorAll(".fr-detail").forEach((d) => d.remove());
  document.querySelectorAll(".fr-row.open").forEach((r) => r.classList.remove("open"));
  row.insertAdjacentHTML("afterend", detailHTML(id));
  row.classList.add("open");
  ui.open = id;
}

/* ---------- 动词 ---------- */
function renderVerbs() {
  const pick = el("verb-pick");
  const box = el("verb-table");
  if (!pick || !box) return;
  const list = cur.verbs || [];
  const v = list[ui.verb] || list[0];
  if (!v) { box.innerHTML = ""; pick.innerHTML = ""; return; }

  pick.innerHTML = list.map((x, i) =>
    '<button class="fr-chip' + (i === ui.verb ? " on" : "") + '" type="button" data-v="' + i + '">' + esc(x.v) + "</button>").join("");

  const forms = (cur.verbForms || {})[v.v] || [];
  const cols = cur.verbCols || [];
  let html = "";

  if (cur.persons) {
    html = '<table class="verb"><thead><tr><th scope="col"></th>' +
      cols.map((c) => '<th scope="col">' + esc(c) + "</th>").join("") + "</tr></thead><tbody>";
    cur.persons.forEach((p, i) => {
      html += '<tr><th scope="row">' + esc(p) + "</th>" +
        cols.map((c, j) => '<td>' + esc((forms[j] || [])[i] || "") + "</td>").join("") + "</tr>";
    });
    html += "</tbody></table>";
  } else {
    html = '<table class="verb"><thead><tr><th scope="col">形式</th><th scope="col">形</th></tr></thead><tbody>' +
      cols.map((c, j) => '<tr><th scope="row">' + esc(c) + "</th><td>" + esc((forms[j] || [])[0] || "") + "</td></tr>").join("") +
      "</tbody></table>";
  }
  box.innerHTML = '<p class="verb-zh">' + esc(v.zh) + "</p>" + html;
}

/* ---------- 语音 ---------- */
let YY_VOICE = null;
const hasSpeech = "speechSynthesis" in window;
const voicePrefix = () => cur.tag.slice(0, 2).toLowerCase();

function pickVoice() {
  if (!hasSpeech) return;
  const vs = window.speechSynthesis.getVoices() || [];
  const p = voicePrefix();
  YY_VOICE = vs.find((v) => String(v.lang).toLowerCase().indexOf(p) === 0) || null;
}
if (hasSpeech) {
  pickVoice();
  try { window.speechSynthesis.addEventListener("voiceschanged", pickVoice, { signal: YS }); } catch (e) {}
}

function speak(text, node) {
  if (!hasSpeech) return;
  if (!YY_VOICE) {
    const vs = window.speechSynthesis.getVoices() || [];
    if (vs.length && el("phon-warn")) el("phon-warn").hidden = false;
  }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = cur.tag;
    u.rate = 0.85;
    if (YY_VOICE) u.voice = YY_VOICE;
    if (node) {
      node.classList.add("speaking");
      const off = () => node.classList.remove("speaking");
      u.onend = off;
      u.onerror = off;
      setTimeout(off, 2000);
    }
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

function renderPhon() {
  const box = el("phon-list");
  const rules = el("phon-rules");
  if (!box) return;
  let band = null;
  let html = "";
  cur.phon.forEach((p) => {
    if (p.g !== band) {
      band = p.g;
      html += '<div class="fr-band"><span>' + esc(band) + "</span><em>" +
        cur.phon.filter((x) => x.g === band).length + " 个</em></div>";
    }
    html += '<button class="phon-row" type="button" data-w="' + esc(p.w) + '">' +
      '<span class="phon-ipa">' + esc(p.ipa) + '</span><span class="phon-main"><span class="phon-word">' + esc(p.w) +
      '</span><span class="phon-zh">' + esc(p.zh) + '</span></span><span class="phon-play" aria-hidden="true">▶</span></button>';
  });
  box.innerHTML = html;
  if (rules) {
    rules.innerHTML = '<div class="fr-band"><span>拼读规则</span><em>' + cur.rules.length + " 条</em></div>" +
      cur.rules.map(([t, d]) =>
        '<div class="rule-row"><span class="rule-t">' + esc(t) + '</span><span class="rule-d">' + esc(d) + "</span></div>").join("");
  }
}

/* ---------- 整页渲染 ---------- */
function renderLinks() {
  const box = el("yy-links");
  if (!box) return;
  box.innerHTML = (cur.links || []).map(([name, url]) =>
    '<a class="dict-link" href="' + url + '" target="_blank" rel="noopener">' + esc(name) +
    '<span aria-hidden="true">↗</span></a>').join("");
}

function renderGramLabel() {
  const t = document.querySelector('.yan-tab[data-tab="gram"]');
  if (t) t.textContent = cur.gramLabel || "语法 A1→C1";
}

function renderAll() {
  renderGramLabel();
  renderLinks();
  renderLevels();
  renderTable();
  renderStats();
  renderVerbs();
  renderPhon();
  if (el("phon-warn")) { el("phon-warn").hidden = true; el("phon-warn").textContent = cur.warn; }
  if (el("fr-only")) { el("fr-only").setAttribute("aria-pressed", ui.onlyTodo); el("fr-only").classList.toggle("on", ui.onlyTodo); }
}

function switchLang(k) {
  const target = YY.find((x) => x.key === k);
  if (!target || target === cur) return;
  cur = target;
  try { localStorage.setItem("nahyuu.yan.lang", k); } catch (e) {}
  $langs.forEach((b) => {
    const on = b.dataset.lang === k;
    b.classList.toggle("on", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  ui.lv = "all"; ui.onlyTodo = false; ui.open = null; ui.verb = 0;
  closeDetail();
  pickVoice();
  loadSets();
  renderAll();
}

/* ---------- 事件 ---------- */
if ($tab && cur) {
  loadSets();
  $langs.forEach((b) => {
    const on = b.dataset.lang === cur.key;
    b.classList.toggle("on", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  renderAll();

  $tabs.forEach((t) => {
    t.addEventListener("click", () => {
      $tabs.forEach((x) => {
        const on = x === t;
        x.classList.toggle("on", on);
        x.setAttribute("aria-selected", on ? "true" : "false");
      });
      $panes.forEach((p) => { p.hidden = p.dataset.pane !== t.dataset.tab; });
    }, { signal: YS });
  });

  $langs.forEach((b) => {
    b.addEventListener("click", () => switchLang(b.dataset.lang), { signal: YS });
  });

  el("fr-table").addEventListener("click", (e) => {
    const btn = e.target.closest(".fr-row");
    if (!btn) return;
    if (e.target.closest(".fr-mark")) {
      const id = btn.dataset.id;
      if (done.has(id)) done.delete(id); else done.add(id);
      saveGram();
      const on = done.has(id);
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", on);
      btn.querySelector(".fr-mark").textContent = on ? "✓" : "";
      renderLevels();
      renderStats();
      if (ui.onlyTodo && on) {
        const next = btn.nextElementSibling;
        if (next && next.classList.contains("fr-detail")) next.remove();
        if (ui.open === id) ui.open = null;
        btn.remove();
      }
      return;
    }
    if (btn.classList.contains("open")) closeDetail(); else openDetail(btn);
  }, { signal: YS });

  el("fr-levels").addEventListener("click", (e) => {
    const b = e.target.closest(".fr-chip");
    if (!b) return;
    ui.lv = b.dataset.lv;
    closeDetail();
    renderLevels();
    renderTable();
  }, { signal: YS });

  if (el("fr-only")) el("fr-only").addEventListener("click", () => {
    ui.onlyTodo = !ui.onlyTodo;
    el("fr-only").setAttribute("aria-pressed", ui.onlyTodo);
    el("fr-only").classList.toggle("on", ui.onlyTodo);
    renderTable();
  }, { signal: YS });

  if (el("fr-reset")) el("fr-reset").addEventListener("click", () => {
    if (!done.size) return;
    if (!confirm("把 " + done.size + " 条已勾的记录清空？")) return;
    done = new Set();
    saveGram();
    closeDetail();
    renderLevels();
    renderTable();
    renderStats();
  }, { signal: YS });

  if (el("verb-pick")) el("verb-pick").addEventListener("click", (e) => {
    const b = e.target.closest("[data-v]");
    if (!b) return;
    ui.verb = Number(b.dataset.v) || 0;
    renderVerbs();
  }, { signal: YS });


  if (el("phon-list")) el("phon-list").addEventListener("click", (e) => {
    const b = e.target.closest(".phon-row");
    if (!b) return;
    const word = b.querySelector(".phon-word");
    speak(word ? word.textContent : b.dataset.w, b);
  }, { signal: YS });
}
