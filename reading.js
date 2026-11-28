/* =========================================================
   阅读页
   ---------------------------------------------------------
   数据在 reading-data.js（由 tools/refresh-weread.py 从微信读书生成）
   字段：
     id   微信读书 bookId
     t    书名        a  作者      p  封面
     cat  分类        fin 1=读完，0=在读
     prog 阅读进度 0–100
     n    笔记数      r  想法数    b  书签数
     u    最近阅读时间（秒级时间戳）
   ========================================================= */
const WR = "https://weread.qq.com";

const HIDE_CAT = /经济|理财|财经|股票|投资|职场|商业|管理|创业|销售|会计|金融|个人成长|心理|励志|成功学|历史|政治|军事|时事|党史|传记-政治/;

// reading-data.js 用 const BOOKS 声明，不在 window 上
const DATA = (typeof BOOKS !== "undefined" && BOOKS) || [];

// 手工校订：抓取源没给全、或给错的字段（按原书名精确匹配）
// t 书名 / a 作者 / yr 年份 / cat 类目 / w 离线简介
const FIX = {
  "失真的冥獸 - 全一卷": {
    cat: "艺术-漫画",
    w: "六名男女受邀参加一场降灵会，要在闹鬼的片场待满 48 小时复现旧案，却相继离奇横死。怪獸特攝、本格推理与 B 级猎奇混作一团，另收九篇短篇。",
  },
  "空气女的时间志": {
    a: "[日] 寺山修司", yr: "2017", cat: "文学-散文杂著",
    w: "寺山修司的自传随笔，原名《我之谜》：从青森的少年时代、酗酒的父亲与私生女出身的母亲写起，兼收作家论与导演论。南海出版公司。",
  },
  "谁人不思乡浦睿文化出品": {
    t: "谁人不思乡", a: "[日] 寺山修司", yr: "2021", cat: "文学-散文杂著",
    w: "副题「虚实交错的寺山修司自传」：他生在奔驰的火车上，父亲酗酒、母亲是私生女，把新宿的酒馆当学校，把青春过成一场居无定所的流浪。",
  },
  "超越福柯": {
    a: "Fabio Vighi / Heiko Feldner 编", cat: "哲学宗教-哲学",
    w: "英国学者编的齐泽克研究文集：前半梳理福柯的话语与权力，后半用拉康的实在界反打，指福柯错失象征与实在的关系、滑向相对主义。拉黑字幕组汉化。",
  },
  "意外地哲学思考.pdf": {
    t: "意外地哲学思考", a: "[法] 贝尔纳·斯蒂格勒", yr: "2018", cat: "哲学宗教-哲学",
    w: "斯蒂格勒与埃利·杜灵的访谈录：从《技术与时间》的技术哲学谈到资本对媒体的操纵，也讲清了他自己的入口——经由意外与缺失去做哲学。",
  },
  "话语集": {
    a: "[法] 雅克·普雷维尔", yr: "2010", cat: "文学-现代诗歌",
    w: "普雷维尔 1930—1944 年间九十五首诗的结集，故意搅乱散文与诗的界限；开篇《试论法国—巴黎一场头面化妆晚宴》把超现实主义的讽刺推到极致。",
  },
  "Why Our Minds Conjure the Paranormal": {
    yr: "2024", cat: "社会文化",
    w: "原书 The Science of Weird Shit。伦敦大学的异常心理学研究者逐条拆解见鬼、外星绑架、濒死体验与巧合：这些经验既不荒谬也不琐碎，而是认知偏差的一面镜子。",
  },
  "永生或猝死：阿部薰物语": {
    a: "間章 等 五十余人", yr: "2014", cat: "艺术-音乐",
    w: "二十九岁自杀的自由爵士萨克斯手阿部薰，五十余位友人与同行——坂本龙一、灰野敬二、大友良英、村上龙——写下的追忆与酷评，附生前照片。",
  },
  "喜剧的本质（果麦经典）": {
    cat: "文学-散文杂著",
    w: "人为什么会笑？柏格森把滑稽归到「活人身上的一段机械」：情境、语言、性格里的错位被社会用笑声纠正，笑因此始终带着一点集体的冷意。",
  },
  "余下只有噪音：聆听20世纪": {
    cat: "文学-散文杂著",
    w: "二十世纪音乐史：从施特劳斯、勋伯格写到凯奇与极简主义，看现代音乐如何在战争、工业与录音技术里一次次自我取消又一次次重生。",
  },
  "人文与社会经典译丛": {
    cat: "社会文化",
    w: "一套把人文学科重新接回社会理论的译丛：伯林、阿伦特、哈贝马斯、罗尔斯、泰勒、鲍曼、吉登斯等人的代表作都在其中。",
  },
  "疯狂山脉": {
    a: "田边刚", cat: "艺术-漫画",
    w: "洛夫克拉夫特《疯狂山脉》的漫画改编：田边刚用极细的线条画南极冰原下的远古都市、修格斯与那场不敢写进报告的考察。",
  },
  "Araki (アラーキー・バイ・アラーキー) (Nobuyoshi Araki (荒木 経惟))": {
    t: "Araki", a: "荒木经惟", cat: "艺术-摄影",
    w: "书名即「荒木 by 荒木」的自选集：他把自己也拍成被摄体，绳缚、日常与东京街景混在同一本里，艳丽又潦草。",
  },
  "寺山修司幸福论【今敏、奈良美智、园子温、森山大道等诸多日本巨匠推崇，寺山修司用幻想与幽默尽情表演释放，完成了一场邂逅、冒险与狩猎的...": {
    cat: "文学-散文杂著",
  },
  "地铁上的哲学【企鹅出品，豆瓣评分超过8.0，著名欧陆哲学家、批判理论家齐泽克等执笔！哲学能否帮助我们找到一种与屈从妥协无关的成熟状态？...": {
    cat: "哲学宗教-哲学",
  },
  "技术与时间": { cat: "哲学宗教-哲学" },
  "我们赖以生存的意义": { cat: "社会文化" },
  // 只补作者
  "享受你的症状！ 好莱坞内外的拉康 (斯拉沃热·齐泽克)": { a: "斯拉沃热·齐泽克" },
  "眼睛的故事 (乔治·巴塔耶 (Georges Bataille) 尉光吉 譯)": { a: "乔治·巴塔耶" },
  "无身体的器官：论德勒兹及其推论 (斯拉沃热·齐泽克)": { a: "斯拉沃热·齐泽克" },
  "视差之见": { a: "斯拉沃热·齐泽克" },
  "齐泽克的笑话 (斯拉沃热·齐泽克, 于东兴)": { a: "斯拉沃热·齐泽克" },
  "撞车 (James Graham Ballard)": { a: "J.G. 巴拉德" },
  "悲剧的哲学：陀思妥耶夫斯基与尼采": { a: "列夫·舍斯托夫" },
  "道德的人与不道德的社会": { a: "莱因霍尔德·尼布尔" },
  "藏传佛教象征符号与器物图解=THE HANDBOOK OF TIBETAN": {
    t: "藏传佛教象征符号与器物图解", a: "罗伯特·比尔",
  },
  // 微信读书把「英文原版」一律归到 教育学习-外语，把佩索阿诗集归到 科学技术；
  // 按内容改回文学，书名也去掉发行方话术。
  "我将宇宙随身携带：佩索阿诗集（葡萄牙国宝级诗人佩索阿重要异名 阿尔贝托·卡埃罗诗歌全收录）": {
    t: "我将宇宙随身携带", a: "[葡] 费尔南多·佩索阿", cat: "文学-现代诗歌",
    w: "佩索阿以异名「阿尔贝托·卡埃罗」写下的诗歌全收录，主张以纯粹的感官观看世界，拒绝形而上学。",
  },
  "The Call of Cthulhu克苏鲁的呼唤": {
    t: "克苏鲁的呼唤", a: "[美] H.P.洛夫克拉夫特", cat: "文学-小说",
    w: "瑟斯顿整理叔父手稿，追查到神秘雕像与全球诡异事件，逐步揭开旧日支配者克苏鲁沉睡拉莱耶、邪教徒盼其苏醒的恐怖真相，直面极致恐惧。",
  },
  "英文原版 无人生还 And Then There Were None": {
    t: "无人生还", a: "[英] 阿加莎·克里斯蒂", cat: "文学-小说",
    w: "十位素不相识的人被邀请到孤岛，各自接到一封神秘信函。客人们逐一抵达豪宅，主人却始终没有出现。晚餐时一张唱片播放出可怕的指控，称每人都曾在暗中犯下无法无天的罪行。随后岛上陆续有人死去，死亡方式与一首童谣一一对应。",
  },
};

DATA.forEach((b) => {
  const f = FIX[b.t];
  if (!f) return;
  if (f.t) b.t = f.t;
  if (f.a) b.a = f.a;
  if (f.yr) b.yr = f.yr;
  if (f.cat) b.cat = f.cat;
  if (f.w) { b.w = f.w; b.i = ""; }
});

/* 搜索 / 过滤 / 排序要用的键只算一次：每次输入都重新 toLowerCase 一遍全表会很卡 */
DATA.forEach((b) => {
  b.q = `${b.t || ""} ${b.a || ""}`.toLowerCase();
  b.nc = (b.n || 0) + (b.r || 0);
  b.hide = HIDE_CAT.test(b.cat || "");
});

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const pad = (n) => String(n).padStart(2, "0");
const collator = new Intl.Collator(["zh", "ja", "en"], { sensitivity: "base", numeric: true });

const state = { q: "", fin: "all", sort: "recent" };

function coverUrl(p) {
  if (!p) return "";
  // 微信读书封面是 https://cdndownload2.imslpvid.com/... 形式，一般可直接用
  return p.startsWith("http") ? p : `https://${p.replace(/^\/+/, "")}`;
}

function computeList() {
  const q = state.q.trim().toLowerCase();
  let list = DATA.filter((b) =>
    !b.hide &&
    (state.fin === "all" || (state.fin === "done" ? b.fin === 1 : b.fin !== 1)) &&
    (!q || b.q.includes(q))
  );
  if (state.sort === "recent") list.sort((x, y) => (y.u || 0) - (x.u || 0));
  else if (state.sort === "notes") list.sort((x, y) => y.nc - x.nc || (y.u || 0) - (x.u || 0));
  else if (state.sort === "author") list.sort((x, y) => collator.compare(x.a || "", y.a || ""));
  else list.sort((x, y) => collator.compare(x.t || "", y.t || ""));
  return list;
}

const GROUP_ORDER = ["文学 · 小说", "文学 · 诗歌", "文学 · 随笔", "文学 · 戏剧", "哲学 · 宗教", "社会文化", "艺术 · 漫画", "艺术 · 摄影", "艺术 · 音乐", "科学 · 技术", "教育 · 学习", "其他"];

function groupOf(b) {
  const parts = (b.cat || "").split("-");
  const c = parts[0], sub = parts[1] || "";
  if (c === "文学" || c === "精品小说") {
    if (/诗|俳句/.test(sub)) return "文学 · 诗歌";
    if (/散文|杂著|随笔|鉴赏/.test(sub)) return "文学 · 随笔";
    if (/戏剧/.test(sub)) return "文学 · 戏剧";
    return "文学 · 小说";
  }
  if (c === "哲学宗教") return "哲学 · 宗教";
  if (c === "社会文化") return "社会文化";
  if (c === "艺术") {
    if (/摄影/.test(sub)) return "艺术 · 摄影";
    if (/音乐/.test(sub)) return "艺术 · 音乐";
    if (/影视|电影/.test(sub)) return "艺术 · 其他";
    return "艺术 · 漫画";
  }
  if (c === "科学技术") return "科学 · 技术";
  if (c === "教育学习") return "教育 · 学习";
  return "其他";
}

const CN_NUM = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
function numOf(s) {
  if (/^[0-9]+$/.test(s)) return s;
  if (CN_NUM[s]) return String(CN_NUM[s]);
  const m = s.match(/^([一二三四五六七八九])?十([一二三四五六七八九])?$/);
  if (m) return String((m[1] ? CN_NUM[m[1]] : 1) * 10 + (m[2] ? CN_NUM[m[2]] : 0));
  return s;
}

function splitTitle(raw) {
  const t = String(raw || "").trim();
  let extra = "";
  let m = t.match(/全\s*([0-9一二三四五六七八九十]+)\s*[卷册]/);
  if (m) extra = `全 ${numOf(m[1])} 卷`;
  else if ((m = t.match(/第\s*([0-9一二三四五六七八九十百]+)\s*[卷册部集]/))) extra = `第 ${m[1]} 卷`;
  else if ((m = t.match(/([0-9]{1,3})\s*[）)]\s*$/))) extra = `第 ${m[1]} 卷`;
  else if ((m = t.match(/([0-9一二三四五六七八九十]+)\s*[卷册]\s*$/))) extra = `第 ${m[1]} 卷`;
  else if ((m = t.match(/[\u4e00-\u9fa5]\s*([0-9]{1,2})\s*$/))) extra = `第 ${m[1]} 卷`;
  else if ((m = t.match(/[-—－]\s*([0-9]{1,3})\s*[卷册]/))) extra = `第 ${m[1]} 卷`;
  const main = t
    .replace(/[（(][^）)]*[）)]/g, "")            // 括号里的宣传语
    .replace(/【.*$/, "")                        // 方头括号起的宣传语（常被截断，无右括号）
    .replace(/\.pdf$/i, "")                      // 文件名尾巴
    .replace(/[：:].*$/, "")                     // 冒号后的副标题
    .replace(/第\s*[0-9一二三四五六七八九十百]+\s*[卷册部集].*$/, "")
    .replace(/\s*[-—－]\s*全?\s*[0-9]*\s*[卷册部].*$/, "")
    .replace(/全\s*[0-9一二三四五六七八九十]+\s*[卷册]\s*$/, "")
    .replace(/[（(]\s*[0-9]{1,3}\s*[）)]\s*$/, "")
    .replace(/([\u4e00-\u9fa5])\s*[0-9]{1,2}\s*$/, "$1")
    .replace(/[\s\-—－~～·・、,，:：]+$/, "")
    .trim();
  return { main: main || t, extra };
}

function catLabel(b) {
  const parts = (b.cat || "").replace(/^-+|-+$/g, "").split("-").filter(Boolean);
  const wikiCat = (b.wc || [])
    .map((c) => c.replace(/[（(].*?[）)]/g, "").replace(/(作品|題材|题材|系列)$/, "").trim())
    .find((c) => c && c.length <= 8 && /漫|小说|詩|诗|散文|随笔|哲学|宗教|历史|社會|社会|艺术|藝術|科学|科幻|推理|绘本|繪本|剧|傳|传|批评|文论|诗选/.test(c));
  const kept = parts.filter((p) => !/^(其他|未知|综合)$/.test(p));
  if (wikiCat && parts.length && /^(其他|未知|综合)$/.test(parts[parts.length - 1])) kept.push(wikiCat);
  if (kept.length) return kept.join(" · ");
  return wikiCat || "";
}

function bookHTML(b) {
  const { main, extra } = splitTitle(b.t);
  const cover = b.p || b.wi || "";
  const meta = [esc(b.a || ""), esc(b.yr || ""), extra ? `<em>${esc(extra)}</em>` : ""]
    .filter(Boolean).join('<span class="dot">·</span>');
  const note = b.w || b.i || "";
  return `
      <div class="book" data-id="${esc(b.id)}" data-title="${esc(b.t)}" title="${esc(b.t)}">        <span class="book-cover${cover ? "" : " none"}">
          ${cover ? `<img src="${esc(cover)}" alt="${esc(b.t)}" loading="lazy" decoding="async">` : ""}
        </span>
        <span class="book-main">
          <h4>${esc(main)}</h4>
          <span class="book-meta">${meta}</span>
          ${note ? `<p class="book-note">${esc(note)}</p>` : ""}
        </span>
      </div>`;
}

function render() {
  const list = computeList();
  const shelf = document.getElementById("shelf");
  const empty = document.getElementById("empty");
  document.getElementById("book-count").textContent = `${list.length} 本`;
  document.getElementById("stat-books").textContent = `${DATA.filter((b) => !HIDE_CAT.test(b.cat || "")).length} 本`;

  if (!DATA.some((b) => !HIDE_CAT.test(b.cat || ""))) {
    shelf.innerHTML = ""; empty.hidden = false; return;
  }
  empty.hidden = true;

  if (!list.length) {
    shelf.innerHTML = '<div class="empty">没有匹配的书。</div>';
    return;
  }

  const groups = new Map();
  list.forEach((b) => {
    const g = groupOf(b);
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(b);
  });
  const order = GROUP_ORDER.filter((g) => groups.has(g))
    .concat([...groups.keys()].filter((g) => !GROUP_ORDER.includes(g)));

  shelf.innerHTML = order.map((g) => `
      <div class="group-head" id="g-${esc(order.indexOf(g))}"><span>${esc(g)}</span><span>${groups.get(g).length}</span></div>
      ${groups.get(g).map(bookHTML).join("")}`).join("");

  const nav = document.getElementById("group-nav");
  nav.innerHTML = order.map((g, i) =>
    `<button type="button" data-jump="g-${i}">${esc(g)}<em>${groups.get(g).length}</em></button>`).join("");
  nav.querySelectorAll("button[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.jump);
      if (!target) return;
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 96;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 18;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}


(function init() {
  render();
  let timer;
  document.getElementById("q").addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.q = e.target.value; render(); }, 140);
  });
  document.querySelectorAll(".chip").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((x) => x.classList.remove("on"));
      b.classList.add("on"); state.fin = b.dataset.fin; render();
    });
  });
  document.getElementById("sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
})();
