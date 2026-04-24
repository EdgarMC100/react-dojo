(function () {
  try {
    var s = localStorage.getItem("theme");
    var p = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var t = s || (p ? "dark" : "light");
    document.documentElement.dataset.theme = t;
    if (t === "dark") document.documentElement.classList.add("dark");
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.classList.add("dark");
  }
})();
