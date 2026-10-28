// DCU Blood Directory i18n Bridge
(function() {
    function applyI18n() {
        const lang = (typeof window.$lang === 'function') ? window.$lang() : (localStorage.getItem('dcuSL') || 'bn');
        const isBn = lang === 'bn';

        // Translate .t elements
        document.querySelectorAll('.t').forEach(el => {
            const raw = el.dataset.raw || el.textContent.trim();
            if (!el.dataset.raw && raw.includes('|')) {
                el.dataset.raw = raw;
            }
            if (el.dataset.raw) {
                const parts = el.dataset.raw.split('|');
                el.textContent = isBn ? parts[0] : (parts[1] || parts[0]);
            }
        });

        // Translate placeholders
        document.querySelectorAll('input[data-p], textarea[data-p]').forEach(el => {
            const parts = el.dataset.p.split('|');
            el.placeholder = isBn ? parts[0] : (parts[1] || parts[0]);
        });

        // Trigger onLang in blood page
        if (typeof window.onLang === 'function') {
            window.onLang();
        }
    }

    // Run on initial load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyI18n);
    } else {
        setTimeout(applyI18n, 50);
    }

    // Listen for language changes from site.js
    window.addEventListener('storage', (e) => {
        if (e.key === 'dcuSL') applyI18n();
    });

    const origOnLang = window.onLang;
    window.$applyBloodLang = applyI18n;
})();
