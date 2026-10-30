/* dcu-layout.js
 * Shared premium header + footer for every DCU Unofficial page.
 * Fills the existing <div id="hdr"> and <div id="ftr"> placeholders.
 * Load with:  <script src="dcu-layout.js" defer></script>
 */
(function () {
  "use strict";

  var THEME_KEY = "site-theme";
  var root = document.documentElement;

  /* ---------- current page ---------- */
  var file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (!/\.html?$/.test(file)) file = "index.html";

  function isCurrent(href) {
    return href.split("#")[0] === file;
  }

  /* ---------- data ---------- */
  var NAV = [
    { href: "index.html", label: "হোম" },
    { href: "cover.html", label: "কভার পেজ" },
    { href: "blood.html", label: "ডোনার" },
    { href: "feedback.html", label: "মতামত" },
    { href: "about.html", label: "আমাদের সম্পর্কে" }
  ];

  var TOOLS = [
    { href: "tools.html#card", bn: "শেয়ার কার্ড", en: "Share Card" },
    { href: "tools.html#routine", bn: "ক্লাস রুটিন", en: "Class Routine" },
    { href: "tools.html#cgpa", bn: "CGPA ক্যালকুলেটর", en: "CGPA Calculator" },
    { href: "tools.html#exam", bn: "পরীক্ষা প্ল্যানার", en: "Exam Planner" },
    { href: "tools.html#cv", bn: "সিভি বিল্ডার", en: "CV Builder" },
    { href: "tools.html#frame", bn: "প্রোফাইল ফ্রেম", en: "Profile Frame" },
    { href: "tools.html#pdf", bn: "PDF টুলকিট", en: "PDF Toolkit" },
    { href: "tools.html#calc", bn: "সায়েন্টিফিক ক্যালকুলেটর", en: "Scientific Calculator" },
    { href: "tools.html#result", bn: "রেজাল্ট", en: "Results Portal" }
  ];

  var ICON_CHEVRON =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var ICON_BURGER =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  var ICON_MOON =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>';
  var ICON_SUN =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- header markup ---------- */
  function headerHTML() {
    var links = NAV.map(function (n) {
      var cur = isCurrent(n.href) ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + ">" + esc(n.label) + "</a>";
    });

    // insert the tools dropdown after the "কভার পেজ" link (index 1)
    var toolsActive = file === "tools.html";
    var items = TOOLS.map(function (t) {
      return (
        '<a href="' + t.href + '" role="menuitem"><b>' + esc(t.bn) +
        "</b><small>" + esc(t.en) + "</small></a>"
      );
    }).join("");
    var dd =
      '<div class="dl-dd" data-dl-dd>' +
      '<button type="button" class="dl-dd-btn"' + (toolsActive ? ' aria-current="page"' : "") +
      ' aria-haspopup="true" aria-expanded="false">টুলস ' + ICON_CHEVRON + "</button>" +
      '<div class="dl-menu" role="menu">' + items + "</div></div>";

    links.splice(2, 0, dd);

    return (
      '<div class="dl-bar">' +
      '<a class="dl-brand" href="index.html" aria-label="DCU Unofficial — হোম">' +
      '<img src="logo.png" alt="" width="38" height="38">' +
      '<span class="dl-brand-txt"><b>DCU</b><small>Unofficial · শিক্ষার্থী টুলকিট</small></span></a>' +
      '<nav class="dl-nav" id="dlNav" aria-label="প্রধান নেভিগেশন">' + links.join("") + "</nav>" +
      '<div class="dl-actions">' +
      '<button type="button" class="dl-icon-btn dl-theme" data-dl-theme aria-label="থিম পরিবর্তন করুন" aria-pressed="false" title="থিম পরিবর্তন">' +
      ICON_MOON + "</button>" +
      '<button type="button" class="dl-icon-btn dl-burger" data-dl-burger aria-label="মেনু খুলুন" aria-expanded="false" aria-controls="dlNav">' +
      ICON_BURGER + "</button>" +
      "</div></div>"
    );
  }

  /* ---------- footer markup ---------- */
  function footerHTML() {
    var toolLinks = [
      ["cover.html", "কভার পেজ"],
      ["tools.html#cv", "সিভি বিল্ডার"],
      ["tools.html#routine", "ক্লাস রুটিন"],
      ["tools.html#cgpa", "CGPA ক্যালকুলেটর"],
      ["tools.html#pdf", "PDF টুলকিট"]
    ];
    var siteLinks = [
      ["index.html", "হোম"],
      ["blood.html", "ডোনার ডিরেক্টরি"],
      ["feedback.html", "মতামত দিন"],
      ["about.html", "আমাদের সম্পর্কে"]
    ];
    function col(title, list) {
      return (
        "<div><h4>" + esc(title) + "</h4>" +
        list.map(function (l) { return '<a href="' + l[0] + '">' + esc(l[1]) + "</a>"; }).join("") +
        "</div>"
      );
    }
    return (
      '<footer class="dl-foot">' +
      '<div class="dl-foot-in">' +
      '<div class="dl-foot-brand"><img src="logo.png" alt="" width="52" height="52">' +
      "<div><b>DCU Unofficial</b>" +
      "<p>শিক্ষার্থীদের জন্য প্রিমিয়াম ডিজিটাল টুলকিট — কভার পেজ, সিভি, ক্লাস রুটিন, CGPA ও আরও অনেক কিছু, বিনামূল্যে।</p>" +
      '<div class="dl-badges"><span>✓ ব্রাউজারে চলে</span><span>✓ সার্ভারে আপলোড নেই</span><span>✓ বিনামূল্যে</span></div>' +
      "</div></div>" +
      col("টুলস", toolLinks) +
      col("সাইট", siteLinks) +
      "</div>" +
      '<div class="dl-foot-bar"><span>© <span data-dl-year></span> DCU Unofficial</span>' +
      "<span>এটি একটি শিক্ষার্থী-উদ্যোগ, কোনো সরকারি বা প্রাতিষ্ঠানিক ওয়েবসাইট নয়।</span></div>" +
      "</footer>"
    );
  }

  /* ---------- theme ---------- */
  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (document.body) document.body.classList.toggle("dark", theme === "dark");
    var btn = document.querySelector("[data-dl-theme]");
    if (btn) {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
      btn.innerHTML = theme === "dark" ? ICON_SUN : ICON_MOON;
    }
    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* storage blocked */ }
    }
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
    if (saved === "dark" || saved === "light") applyTheme(saved, false);
    else applyTheme(isDark() ? "dark" : "light", false);

    var btn = document.querySelector("[data-dl-theme]");
    if (btn) {
      btn.addEventListener("click", function () {
        applyTheme(isDark() ? "light" : "dark", true);
      });
    }
  }

  /* ---------- nav behaviour ---------- */
  function initNav() {
    var host = document.getElementById("hdr");
    if (!host) return;

    var nav = host.querySelector("#dlNav");
    var burger = host.querySelector("[data-dl-burger]");
    var dd = host.querySelector("[data-dl-dd]");
    var ddBtn = dd && dd.querySelector(".dl-dd-btn");

    function setMenu(open) {
      nav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "মেনু বন্ধ করুন" : "মেনু খুলুন");
      if (!open && dd) setDd(false);
    }

    function setDd(open) {
      if (!dd) return;
      dd.classList.toggle("open", open);
      ddBtn.setAttribute("aria-expanded", String(open));
    }

    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      setMenu(!nav.classList.contains("is-open"));
    });

    if (ddBtn) {
      ddBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        setDd(!dd.classList.contains("open"));
      });
    }

    document.addEventListener("click", function (e) {
      if (!host.contains(e.target)) {
        setMenu(false);
        setDd(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        setMenu(false);
        setDd(false);
      }
    });

    /* close the mobile menu after a real link is chosen */
    nav.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (a && !(dd && ddBtn === a)) setMenu(false);
    });
  }

  /* ---------- boot ---------- */
  function mount() {
    var hdr = document.getElementById("hdr");
    if (!hdr) {
      hdr = document.createElement("div");
      hdr.id = "hdr";
      document.body.insertBefore(hdr, document.body.firstChild);
    }
    hdr.innerHTML = headerHTML();

    var ftr = document.getElementById("ftr");
    if (!ftr) {
      ftr = document.createElement("div");
      ftr.id = "ftr";
      document.body.appendChild(ftr);
    }
    ftr.innerHTML = footerHTML();

    var year = String(new Date().getFullYear());
    ftr.querySelectorAll("[data-dl-year]").forEach(function (el) { el.textContent = year; });

    initTheme();
    initNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
