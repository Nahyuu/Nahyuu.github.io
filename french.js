/* =========================================================
   言 / 法语：语法清单 + 动词变位 + 语音发音
   ---------------------------------------------------------
   数据在 french-data.js：FR_GRAM / FR_VERBS / FR_PHON / FR_PHON_RULES
   语法勾选存在 localStorage 的 nahyuu.fr.gram（存 id 数组），只在本机。
   发音走 speechSynthesis，lang = fr-FR。
   ========================================================= */
const FS = window.__pageSignal;
const FKEY = "nahyuu.fr.gram";

const GRAM = (typeof FR_GRAM !== "undefined" && FR_GRAM) || [];
const VERBS = (typeof FR_VERBS !== "undefined" && FR_VERBS) || [];
const PHON = (typeof FR_PHON !== "undefined" && FR_PHON) || [];
const RULES = (typeof FR_PHON_RULES !== "undefined" && FR_PHON_RULES) || [];
const NOTES = (typeof FR_NOTES !== "undefined" && FR_NOTES) || {};

/* ---------- 语法：展平成一维，id 用「级别#序号」 ---------- */
const ROWS = [];
GRAM.forEach(([lv, list]) => {
  list.forEach((r, i) => ROWS.push({ id: lv + "#" + i, lv, fr: r[0], zh: r[1], ex: r[2] || "" }));
});

let done = new Set();
try {
  const raw = JSON.parse(localStorage.getItem(FKEY) || "[]");
  if (Array.isArray(raw)) done = new Set(raw.filter((x) => typeof x === "string"));
} catch (e) { done = new Set(); }

const state = { lv: "all", onlyTodo: false, verb: 0, open: null };

const root = document.getElementById("fr-panel");
const table = document.getElementById("fr-table");
const levels = document.getElementById("fr-levels");
const bar = document.getElementById("fr-bar");
const count = document.getElementById("fr-count");

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const save = () => { try { localStorage.setItem(FKEY, JSON.stringify([...done])); } catch (e) {} };

function tally(rows) {
  let d = 0;
  rows.forEach((r) => { if (done.has(r.id)) d++; });
  return [d, rows.length];
}

/* ---------- 标签页 ---------- */
const tabs = document.querySelectorAll(".yan-tab");
tabs.forEach((t) => {
  t.addEventListener("click", () => {
    tabs.forEach((x) => {
      const on = x === t;
      x.classList.toggle("on", on);
      x.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll(".yan-pane").forEach((p) => {
      p.hidden = p.dataset.pane !== t.dataset.tab;
    });
  }, { signal: FS });
});

/* ---------- 语法清单 ---------- */
function renderLevels() {
  if (!levels) return;
  const items = [["all", "全部", ROWS]].concat(GRAM.map(([lv]) => [lv, lv, ROWS.filter((r) => r.lv === lv)]));
  levels.innerHTML = items.map(([k, label, rows]) => {
    const [d, n] = tally(rows);
    return '<button class="fr-chip' + (state.lv === k ? " on" : "") + '" type="button" role="tab" aria-selected="' +
      (state.lv === k) + '" data-lv="' + k + '">' + label + "<em>" + d + "/" + n + "</em></button>";
  }).join("");
}

function renderTable() {
  if (!table) return;
  const base = state.lv === "all" ? ROWS : ROWS.filter((r) => r.lv === state.lv);
  const rows = state.onlyTodo ? base.filter((r) => !done.has(r.id)) : base;

  if (!rows.length) {
    table.innerHTML = '<p class="fr-empty">这一级已经全部勾完了。</p>';
    return;
  }

  let html = '<div class="fr-head" aria-hidden="true"><span></span><span>语法点 / 要点</span><span>例句</span></div>';
  let cur = null;
  rows.forEach((r) => {
    if (r.lv !== cur) {
      cur = r.lv;
      const [d, n] = tally(ROWS.filter((x) => x.lv === cur));
      html += '<div class="fr-band"><span>' + cur + "</span><em>" + d + " / " + n + "</em></div>";
    }
    const on = done.has(r.id);
    html += '<button class="fr-row' + (on ? " on" : "") + '" type="button" data-id="' + r.id +
      '" aria-pressed="' + on + '"><span class="fr-mark" aria-hidden="true">' + (on ? "✓" : "") +
      '</span><span class="fr-main"><span class="fr-name">' + esc(r.fr) + '</span><span class="fr-zh">' +
      esc(r.zh) + '</span></span><span class="fr-ex">' + esc(r.ex) + "</span></button>";
  });
  table.innerHTML = html;
  if (state.open) {
    const row = table.querySelector('.fr-row[data-id="' + state.open + '"]');
    if (row) openDetail(row); else state.open = null;
  }
}

function renderStats() {
  const [d, n] = tally(ROWS);
  if (count) count.textContent = d + " / " + n;
  if (bar) bar.style.width = (n ? (d / n) * 100 : 0).toFixed(2) + "%";
  const text = d + " / " + n;
  const total = document.getElementById("fr-total");
  if (total) total.textContent = text;
  document.querySelectorAll(".fr-total-em").forEach((el) => { el.textContent = text; });
}

function detailHTML(id) {
  const n = NOTES[id];
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
  state.open = null;
}

function openDetail(row) {
  const id = row.dataset.id;
  document.querySelectorAll(".fr-detail").forEach((d) => d.remove());
  document.querySelectorAll(".fr-row.open").forEach((r) => r.classList.remove("open"));
  row.insertAdjacentHTML("afterend", detailHTML(id));
  row.classList.add("open");
  state.open = id;
}

function renderGram() { renderLevels(); renderTable(); renderStats(); }

/* ---------- 动词变位 ---------- */
const TENSES = [
  ["pr", "现在时"], ["pc", "复合过去时"], ["im", "未完成过去时"],
  ["fu", "简单将来时"], ["co", "条件式现在时"], ["su", "虚拟式现在时"]
];
const PERSONS = ["1s", "2s", "3s", "1p", "2p", "3p"];

function passCompose(v) {
  const auxV = VERBS.find((x) => x.v === (v.aux === "e" ? "être" : "avoir"));
  const aux = auxV ? auxV.pr : [];
  return aux.map((a) => a + " " + v.pp + (v.aux === "e" ? "(e)" : ""));
}

function renderVerbs() {
  const pick = document.getElementById("verb-pick");
  const box = document.getElementById("verb-table");
  if (!pick || !box) return;
  const cur = VERBS[state.verb];
  if (!cur) return;

  pick.innerHTML = VERBS.map((v, i) =>
    '<button class="fr-chip' + (i === state.verb ? " on" : "") + '" type="button" data-v="' + i +
    '">' + esc(v.v) + "</button>").join("");

  const cols = { pr: cur.pr, pc: passCompose(cur), im: cur.im, fu: cur.fu, co: cur.co, su: cur.su };
  let html = '<table class="verb"><thead><tr><th scope="col"></th>' +
    TENSES.map(([, label]) => '<th scope="col">' + label + "</th>").join("") + "</tr></thead><tbody>";
  PERSONS.forEach((p, i) => {
    html += '<tr><th scope="row">' + p + "</th>" +
      TENSES.map(([k]) => '<td class="' + (k === "pc" ? "aux" : "") + '">' + esc(cols[k][i]) + "</td>").join("") +
      "</tr>";
  });
  html += "</tbody></table>";
  box.innerHTML = '<p class="verb-zh">' + esc(cur.zh) + "</p>" + html;
}

/* ---------- 语音 ---------- */
let FR_VOICE = null;
const hasSpeech = "speechSynthesis" in window;

function pickVoice() {
  if (!hasSpeech) return;
  const vs = window.speechSynthesis.getVoices() || [];
  FR_VOICE = vs.find((v) => /^fr([-_]|$)/i.test(v.lang)) || null;
}
if (hasSpeech) {
  pickVoice();
  try { window.speechSynthesis.addEventListener("voiceschanged", pickVoice, { signal: FS }); } catch (e) {}
}

function speak(word, el) {
  if (!hasSpeech) return;
  if (!FR_VOICE) {
    const vs = window.speechSynthesis.getVoices() || [];
    if (vs.length) {
      const w = document.getElementById("phon-warn");
      if (w) w.hidden = false;
    }
  }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = "fr-FR";
    u.rate = 0.85;
    if (FR_VOICE) u.voice = FR_VOICE;
    if (el) {
      el.classList.add("speaking");
      const off = () => el.classList.remove("speaking");
      u.onend = off;
      u.onerror = off;
      setTimeout(off, 2000);
    }
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

function renderPhon() {
  const box = document.getElementById("phon-list");
  const rules = document.getElementById("phon-rules");
  if (!box) return;

  let cur = null;
  let html = "";
  PHON.forEach((p) => {
    if (p.g !== cur) {
      cur = p.g;
      html += '<div class="fr-band"><span>' + esc(cur) + "</span><em>" + PHON.filter((x) => x.g === cur).length + " 个</em></div>";
    }
    html += '<button class="phon-row" type="button" data-w="' + esc(p.w) + '"><span class="phon-ipa">' +
      esc(p.ipa) + '</span><span class="phon-main"><span class="phon-word">' + esc(p.w) +
      '</span><span class="phon-zh">' + esc(p.zh) + '</span></span><span class="phon-play" aria-hidden="true">▶</span></button>';
  });
  box.innerHTML = html;

  if (rules) {
    rules.innerHTML = '<div class="fr-band"><span>拼读规则</span><em>' + RULES.length + " 条</em></div>" +
      RULES.map(([t, d]) =>
        '<div class="rule-row"><span class="rule-t">' + esc(t) + '</span><span class="rule-d">' + esc(d) + "</span></div>"
      ).join("");
  }
}


/* ---------- 词汇：清单 + 自测 ---------- */
const WDATA = (typeof FR_WORDS !== "undefined" && FR_WORDS) || [];
const WROWS = [];
WDATA.forEach(function (r, i) {
  WROWS.push({ id: r[0] + "#" + i, lv: r[0], fr: r[1], pos: r[2], ipa: r[3], zh: r[4], ex: r[5], exzh: r[6] });
});

const WKEY = "nahyuu.fr.words";
let wdone = new Set();
try {
  const raw = JSON.parse(localStorage.getItem(WKEY) || "[]");
  if (Array.isArray(raw)) wdone = new Set(raw.filter((x) => typeof x === "string"));
} catch (e) { wdone = new Set(); }
const wsave = () => { try { localStorage.setItem(WKEY, JSON.stringify([...wdone])); } catch (e) {} };

const wstate = { lv: "all", onlyTodo: false, q: null };
const wtable = document.getElementById("wd-table");
const wlevels = document.getElementById("wd-levels");
const wcount = document.getElementById("wd-count");
const wbar = document.getElementById("wd-bar");
const wpanel = document.getElementById("wd-quiz-panel");
const wpane = document.querySelector('.yan-pane[data-pane="word"]');

function wtally(rows) {
  let d = 0;
  rows.forEach((r) => { if (wdone.has(r.id)) d++; });
  return [d, rows.length];
}

function wfilter() {
  const base = wstate.lv === "all" ? WROWS : WROWS.filter((r) => r.lv === wstate.lv);
  return wstate.onlyTodo ? base.filter((r) => !wdone.has(r.id)) : base;
}

function renderWordLevels() {
  if (!wlevels) return;
  const items = [["all", "全部", WROWS]].concat(
    ["A1", "A2", "B1", "B2", "C1"].map((lv) => [lv, lv, WROWS.filter((r) => r.lv === lv)]).filter((x) => x[2].length)
  );
  wlevels.innerHTML = items.map(([k, label, rows]) => {
    const [d, n] = wtally(rows);
    return '<button class="fr-chip' + (wstate.lv === k ? " on" : "") + '" type="button" role="tab" aria-selected="' +
      (wstate.lv === k) + '" data-wlv="' + k + '">' + label + "<em>" + d + "/" + n + "</em></button>";
  }).join("");
}

function renderWords() {
  if (!wtable) return;
  const rows = wfilter();
  if (!rows.length) {
    wtable.innerHTML = '<p class="fr-empty">这一级已经全部记住了。</p>';
    return;
  }
  let html = '<div class="fr-head" aria-hidden="true"><span></span><span>词 / 音标 / 释义</span><span>例句</span></div>';
  let cur = null;
  rows.forEach((r) => {
    if (r.lv !== cur) {
      cur = r.lv;
      const [d, n] = wtally(WROWS.filter((x) => x.lv === cur));
      html += '<div class="fr-band"><span>' + cur + "</span><em>" + d + " / " + n + "</em></div>";
    }
    const on = wdone.has(r.id);
    html += '<button class="wd-row' + (on ? " on" : "") + '" type="button" data-wid="' + r.id + '" data-w="' +
      esc(r.fr) + '" aria-pressed="' + on + '">' +
      '<span class="wd-mark" aria-hidden="true">' + (on ? "✓" : "") + "</span>" +
      '<span class="wd-main"><span class="wd-top"><span class="wd-fr">' + esc(r.fr) +
      '</span><span class="wd-pos">' + esc(r.pos) + '</span><span class="wd-ipa">' + esc(r.ipa) +
      '</span></span><span class="wd-zh">' + esc(r.zh) + "</span></span>" +
      '<span class="wd-ex">' + esc(r.ex) + "</span></button>";
  });
  wtable.innerHTML = html;
}

function renderWordStats() {
  const [d, n] = wtally(WROWS);
  if (wcount) wcount.textContent = d + " / " + n;
  if (wbar) wbar.style.width = (n ? (d / n) * 100 : 0).toFixed(2) + "%";
}

function renderWordChips() {
  if (!wlevels) return;
  wlevels.querySelectorAll("[data-wlv]").forEach((b) => {
    const k = b.dataset.wlv;
    const rows = k === "all" ? WROWS : WROWS.filter((r) => r.lv === k);
    b.querySelector("em").textContent = wtally(rows).join("/");
  });
}

function setWordDone(id, on) {
  if (on) wdone.add(id); else wdone.delete(id);
  wsave();
  const row = wtable && wtable.querySelector('.wd-row[data-wid="' + id + '"]');
  if (row) {
    row.classList.toggle("on", on);
    row.setAttribute("aria-pressed", on);
    row.querySelector(".wd-mark").textContent = on ? "✓" : "";
    if (wstate.onlyTodo && on) row.remove();
  }
  renderWordChips();
  renderWordStats();
}

/* ---------- 自测：闪卡 ---------- */
function wshuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function quizChrome(on) {
  if (wtable) wtable.hidden = on;
  if (wlevels) wlevels.hidden = on;
  if (wpane) {
    const hint = wpane.querySelector(".fr-hint");
    const tools = wpane.querySelector(".fr-tools");
    if (hint) hint.hidden = on;
    if (tools) tools.hidden = on;
  }
  if (wpanel) wpanel.hidden = !on;
  if (!on && wpanel) wpanel.innerHTML = "";
}

function startQuiz() {
  const rows = wfilter();
  if (!rows.length) {
    if (wpanel) {
      wpanel.hidden = false;
      wpanel.innerHTML = '<div class="wd-qbar"><span>没有可考的</span><button class="fr-btn" type="button" data-q="exit">回列表</button></div>' +
        '<div class="wd-card wd-done"><p class="wd-dtxt">这一级都记住了，或者还没勾过任何词。</p></div>';
    }
    return;
  }
  wstate.q = { queue: wshuffle(rows.map((r) => r.id)), known: 0, forgot: 0, tries: {}, total: rows.length, reveal: false };
  quizChrome(true);
  renderQuiz();
}

function exitQuiz() {
  wstate.q = null;
  quizChrome(false);
  renderWordLevels();
  renderWords();
  renderWordStats();
}

function renderQuiz() {
  if (!wpanel || !wstate.q) return;
  const q = wstate.q;

  if (!q.queue.length) {
    wpanel.innerHTML = '<div class="wd-qbar"><span>本轮结束</span><span class="wd-qscore">记得 ' + q.known +
      " · 忘了 " + q.forgot + '</span></div><div class="wd-card wd-done"><span class="wd-cpos">这一轮</span>' +
      '<p class="wd-dtxt">共 ' + q.total + " 个词，过了 " + (q.known + q.forgot) + " 次：记得 <b>" + q.known +
      '</b> 次，忘了 <b>' + q.forgot + '</b> 次。</p><div class="wd-cbtns"><button class="fr-btn" type="button" data-q="again">' +
      '再来一轮</button><button class="fr-btn" type="button" data-q="exit">回列表</button></div></div>';
    return;
  }

  const w = WROWS.find((r) => r.id === q.queue[0]);
  if (!w) { q.queue.shift(); renderQuiz(); return; }

  const face = '<div class="wd-face"><span class="wd-cpos">' + esc(w.pos) + '</span><span class="wd-cfr" lang="fr">' +
    esc(w.fr) + '</span><span class="wd-cipa">' + esc(w.ipa) + '</span>' +
    '<button class="wd-speak" type="button" data-q="say" data-say="' + esc(w.fr) + '">▶ 听一下</button></div>';
  const bar = '<div class="wd-qbar"><span>剩 <b>' + q.queue.length + '</b> 张</span><span class="wd-qscore">记得 ' +
    q.known + " · 忘了 " + q.forgot + '</span><button class="fr-btn" type="button" data-q="exit">退出</button></div>';

  const body = q.reveal
    ? '<div class="wd-card">' + face + '<div class="wd-cback"><span class="wd-czh">' + esc(w.zh) +
      '</span><p class="wd-cex">' + esc(w.ex) + "<i>" + esc(w.exzh) + "</i></p></div>" +
      '<div class="wd-cbtns"><button class="wd-ok" type="button" data-q="ok">记得</button>' +
      '<button class="wd-no" type="button" data-q="no">忘了</button></div></div>'
    : '<div class="wd-card">' + face + '<button class="wd-reveal" type="button" data-q="reveal">看答案</button></div>';

  wpanel.innerHTML = bar + body;
}

function answerQuiz(ok) {
  const q = wstate.q;
  if (!q || !q.queue.length) return;
  const id = q.queue.shift();
  if (ok) {
    q.known++;
    setWordDone(id, true);
  } else {
    q.forgot++;
    setWordDone(id, false);
    const t = (q.tries[id] || 0) + 1;
    q.tries[id] = t;
    if (t <= 2) q.queue.push(id);
  }
  q.reveal = false;
  renderQuiz();
}

/* ---------- 事件 ---------- */
if (root) {
  renderGram();
  renderWords();
  renderWordLevels();
  renderWordStats();
  renderVerbs();
  renderPhon();

  function toggleDone(btn) {
    const id = btn.dataset.id;
    if (done.has(id)) done.delete(id); else done.add(id);
    save();
    const on = done.has(id);
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", on);
    btn.querySelector(".fr-mark").textContent = on ? "✓" : "";
    const lv = id.split("#")[0];
    const chip = levels.querySelector('[data-lv="' + lv + '"]');
    const all = levels.querySelector('[data-lv="all"]');
    if (chip) chip.querySelector("em").textContent = tally(ROWS.filter((r) => r.lv === lv)).join("/");
    if (all) all.querySelector("em").textContent = tally(ROWS).join("/");
    renderStats();
    if (state.onlyTodo && on) {
      const next = btn.nextElementSibling;
      if (next && next.classList.contains("fr-detail")) next.remove();
      if (state.open === id) state.open = null;
      btn.remove();
    }
  }

  table.addEventListener("click", (e) => {
    const btn = e.target.closest(".fr-row");
    if (!btn) return;
    if (e.target.closest(".fr-mark")) { toggleDone(btn); return; }
    if (btn.classList.contains("open")) closeDetail(); else openDetail(btn);
  }, { signal: FS });

  levels.addEventListener("click", (e) => {
    const b = e.target.closest(".fr-chip");
    if (!b) return;
    state.lv = b.dataset.lv;
    renderGram();
  }, { signal: FS });

  const only = document.getElementById("fr-only");
  if (only) {
    only.addEventListener("click", () => {
      state.onlyTodo = !state.onlyTodo;
      only.setAttribute("aria-pressed", state.onlyTodo);
      only.classList.toggle("on", state.onlyTodo);
      renderTable();
    }, { signal: FS });
  }

  const reset = document.getElementById("fr-reset");
  if (reset) {
    reset.addEventListener("click", () => {
      if (!done.size) return;
      if (!confirm("把 " + done.size + " 条已勾的记录清空？")) return;
      done = new Set();
      save();
      renderGram();
    }, { signal: FS });
  }

  const pick = document.getElementById("verb-pick");
  if (pick) {
    pick.addEventListener("click", (e) => {
      const b = e.target.closest("[data-v]");
      if (!b) return;
      state.verb = Number(b.dataset.v) || 0;
      renderVerbs();
    }, { signal: FS });
  }


  const wOnly = document.getElementById("wd-only");
  if (wOnly) {
    wOnly.addEventListener("click", () => {
      wstate.onlyTodo = !wstate.onlyTodo;
      wOnly.classList.toggle("on", wstate.onlyTodo);
      wOnly.setAttribute("aria-pressed", wstate.onlyTodo);
      renderWords();
    }, { signal: FS });
  }

  const wReset = document.getElementById("wd-reset");
  if (wReset) {
    wReset.addEventListener("click", () => {
      if (!wdone.size) return;
      if (!confirm("把 " + wdone.size + " 个已记住的词清空？")) return;
      wdone = new Set();
      wsave();
      renderWordLevels();
      renderWords();
      renderWordStats();
    }, { signal: FS });
  }

  const wStart = document.getElementById("wd-quiz");
  if (wStart) wStart.addEventListener("click", startQuiz, { signal: FS });

  if (wtable) {
    wtable.addEventListener("click", (e) => {
      const row = e.target.closest(".wd-row");
      if (!row) return;
      if (e.target.closest(".wd-mark")) {
        setWordDone(row.dataset.wid, !wdone.has(row.dataset.wid));
        return;
      }
      speak(row.dataset.w, row);
    }, { signal: FS });
  }

  if (wlevels) {
    wlevels.addEventListener("click", (e) => {
      const b = e.target.closest("[data-wlv]");
      if (!b) return;
      wstate.lv = b.dataset.wlv;
      renderWordLevels();
      renderWords();
    }, { signal: FS });
  }

  if (wpanel) {
    wpanel.addEventListener("click", (e) => {
      const b = e.target.closest("[data-q]");
      if (!b) return;
      const act = b.dataset.q;
      if (act === "exit") { exitQuiz(); return; }
      if (!wstate.q) return;
      else if (act === "reveal") { wstate.q.reveal = true; renderQuiz(); }
      else if (act === "say") speak(b.dataset.say, b);
      else if (act === "ok") answerQuiz(true);
      else if (act === "no") answerQuiz(false);
      else if (act === "again") startQuiz();
    }, { signal: FS });
  }

  const phon = document.getElementById("phon-list");
  if (phon) {
    phon.addEventListener("click", (e) => {
      const b = e.target.closest(".phon-row");
      if (!b) return;
      speak(b.dataset.w, b);
    }, { signal: FS });
  }
}
