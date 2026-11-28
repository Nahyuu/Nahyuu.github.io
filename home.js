const themeToggle = document.querySelector("#themeToggle");

// 读取上次选择的主题（首页 / 子页共用）
if (themeToggle) {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☼";
    themeToggle.setAttribute("aria-label", "切换浅色主题");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☼" : "◐";
    themeToggle.setAttribute("aria-label", isDark ? "切换浅色主题" : "切换深色主题");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// 其余尚未建好的分区：点击时提示
document.querySelectorAll("[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("建设中");
  });
});
