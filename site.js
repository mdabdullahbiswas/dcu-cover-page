/* site.js
 * Small, dependency-free behaviour layer.
 * Hooks are opt-in through data attributes, so the script is safe to load
 * on any page even when a feature's markup is missing.
 *
 *   [data-nav-toggle]   button that opens/closes the navigation
 *   [data-nav]          the navigation container
 *   [data-theme-toggle] button that switches light/dark theme
 *   [data-reveal]       element that fades in when it scrolls into view
 *   [data-year]         element whose text is set to the current year
 */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;

  /* ---------- helpers ---------- */

  function $(selector, scope) {
    return (scope || doc).querySelector(selector);
  }

  function $all(selector, scope) {
    return Array.prototype.slice.call((scope || doc).querySelectorAll(selector));
  }

  function safeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (err) {
      /* storage can be blocked; the feature still works for this visit */
    }
  }

  /* ---------- year in footer ---------- */

  function fillYear() {
    var year = String(new Date().getFullYear());
    $all("[data-year]").forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ---------- mobile navigation ---------- */

  function setupNav() {
    var toggle = $("[data-nav-toggle]");
    var nav = $("[data-nav]");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    /* close the menu after a link is picked on small screens */
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    /* close with Escape */
    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  /* ---------- theme switch ---------- */

  var THEME_KEY = "site-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    $all("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
    });
  }

  function setupTheme() {
    var saved = safeGet(THEME_KEY);
    var prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    $all("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        safeSet(THEME_KEY, next);
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  function setupReveal() {
    var items = $all("[data-reveal]");
    if (!items.length) return;

    /* no observer support or reduced motion: show everything at once */
    var reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduce) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- back to top button ---------- */

  function setupBackToTop() {
    var btn = doc.createElement("button");
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("aria-label", "উপরে যান");
    btn.textContent = "↑";
    doc.body.appendChild(btn);

    function update() {
      btn.classList.toggle("is-shown", window.scrollY > 400);
    }

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- boot ---------- */

  function init() {
    fillYear();
    setupTheme();
    setupNav();
    setupReveal();
    setupBackToTop();
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
