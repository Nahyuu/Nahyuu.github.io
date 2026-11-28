/* 记录页：分组折叠。默认全收起，点标题展开。
   唱片和「言」共用这一套，状态不记忆——每次进来都是收起的。 */
const NS = window.__pageSignal;

document.querySelectorAll(".note-group").forEach((g) => {
  const btn = g.querySelector(".note-toggle");
  const body = g.querySelector(".note-body");
  if (!btn || !body) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", open ? "false" : "true");
    btn.classList.toggle("open", !open);
    body.hidden = open;
  }, { signal: NS });
});
