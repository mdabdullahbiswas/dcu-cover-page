/* Premium layer: click ripple only. No app logic is touched. */
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest && e.target.closest('button, .bt');
    if (!b || b.disabled) return;
    var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, s = document.createElement('span');
    s.className = 'rp-wave';
    s.style.width = s.style.height = d + 'px';
    s.style.left = (e.clientX - r.left - d / 2) + 'px';
    s.style.top = (e.clientY - r.top - d / 2) + 'px';
    if (getComputedStyle(b).position === 'static') b.style.position = 'relative';
    if (getComputedStyle(b).overflow === 'visible') b.style.overflow = 'hidden';
    b.appendChild(s);
    s.addEventListener('animationend', function () { s.remove(); });
  }, { passive: true });
})();
