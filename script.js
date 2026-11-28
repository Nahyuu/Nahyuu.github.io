/* 共用：主题记忆、导航滚动态、占位提示、进场动画
   监听一律挂在 window.__pageSignal 上：软导航换页时 router.js 会 abort 掉，
   不会在 window 上越积越多。 */
const PAGE_SIG = window.__pageSignal;
const PAGE_CLEANUP = window.__pageCleanup || [];

const NAV = document.getElementById("nav");
const TOGGLE = document.getElementById("themeToggle");

// 主题（默认深色，对应 k2cee 的深底；白版用 body.white_ver）
const saved = localStorage.getItem("theme");
if (saved === "light") {
  document.body.classList.add("white_ver");
  if (TOGGLE) TOGGLE.textContent = "☼";
}
if (TOGGLE) {
  TOGGLE.addEventListener("click", () => {
    document.body.classList.toggle("white_ver");
    const light = document.body.classList.contains("white_ver");
    TOGGLE.textContent = light ? "☼" : "◐";
    localStorage.setItem("theme", light ? "light" : "dark");
  });
}

// 导航：滚动后加毛玻璃底。只在状态真的变了才写 class，避免每次滚动都触发重绘
if (NAV) {
  let solid = null;
  const onScroll = () => {
    const next = window.scrollY > 24;
    if (next === solid) return;
    solid = next;
    NAV.classList.toggle("solid", next);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true, signal: PAGE_SIG });
}

// 还没做的分区
document.querySelectorAll("[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (e) => { e.preventDefault(); alert("建设中"); });
});

// 进场
const reveals = document.querySelectorAll(".reveal");
if (reveals.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { rootMargin: "0px 0px -8% 0px" });
  reveals.forEach((el) => io.observe(el));
  PAGE_CLEANUP.push(() => io.disconnect());
} else {
  reveals.forEach((el) => el.classList.add("in"));
}
