/* site-shared.js
 * Shared helpers used by about.html, feedback.html and tools.html.
 * Load in <head> BEFORE the page's own script:
 *   <script src="site-shared.js"></script>
 *
 * $L(s)   : "বাংলা|English" -> text for the current language
 * L       : same as $L (short name used by the pages)
 * $DEV    : developer profile used by About and Feedback
 * $SOC    : builds a link chip HTML string
 */
(function () {
  "use strict";

  var KEY = "dcu-lang";

  function currentLang() {
    var l = document.documentElement.getAttribute("data-lang");
    if (l === "en" || l === "bn") return l;
    try { return localStorage.getItem(KEY) === "en" ? "en" : "bn"; }
    catch (e) { return "bn"; }
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function pick(s) {
    var str = String(s == null ? "" : s);
    var i = str.indexOf("|");
    if (i < 0) return str;
    return currentLang() === "en" ? str.slice(i + 1) : str.slice(0, i);
  }

  window.$L = pick;
  window.L = pick;

  /* developer profile — add your links/email here when you want them shown.
   * links: [ ["LinkedIn", "https://..."], ... ]   email: "you@example.com"
   * (Links whose label/URL contains "github" are hidden by the About page.) */
  window.$DEV = {
    name: "মোঃ আব্দুল্লাহ বিশ্বাস",
    links: [],
    email: ""
  };

  window.$SOC = function (key, href, label, external) {
    var text = label || key;
    var target = external === false ? "" : ' target="_blank" rel="noopener"';
    return '<a href="' + esc(href) + '"' + target + ">" + esc(text) + "</a>";
  };
})();
