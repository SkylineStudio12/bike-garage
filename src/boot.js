
window.addEventListener("error", function (e) {
  var d = document.createElement("pre");
  d.style.cssText = "position:fixed;inset:12px;z-index:9999;background:#0F110F;color:#EFFF3B;" +
    "padding:16px;border-radius:16px;font:12px/1.5 monospace;white-space:pre-wrap;overflow:auto";
  d.textContent = "Boot error:\n" + e.message + (e.filename ? "\n" + e.filename + ":" + e.lineno : "");
  document.body.appendChild(d);
}, { once: true });
