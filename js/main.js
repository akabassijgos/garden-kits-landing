
// Mobile menu toggle
(function () {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        mobileMenu.classList.toggle('hidden');
    });

    // close mobile menu when clicking a link (nice-to-have)
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
})();


// Theme handling (auto / light / dark), persisted in localStorage
(function () {
    const THEME_KEY = 'theme-preference';
    const themeBtn = document.getElementById('themeBtn');
    const themeLabel = document.getElementById('themeLabel');
    const modes = ['auto', 'light', 'dark'];
    let modeIndex = 0;

    // Apply theme to document
    function applyTheme(mode) {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (mode === 'light') {
            document.documentElement.classList.remove('dark');
        } else { // auto
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
        themeLabel.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    }

    // Set theme and save to localStorage
    function setTheme(mode) {
        if (mode === 'auto') {
            localStorage.removeItem(THEME_KEY);
        } else {
            localStorage.setItem(THEME_KEY, mode);
        }
        applyTheme(mode);
    }

    // Initialize
    function initTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        const mode = saved && modes.includes(saved) ? saved : 'auto';
        modeIndex = modes.indexOf(mode);
        applyTheme(mode);
    }

    // Cycle theme on button click
    themeBtn.addEventListener('click', () => {
        modeIndex = (modeIndex + 1) % modes.length;
        const newMode = modes[modeIndex];
        setTheme(newMode);
    });

    // React to system preference changes (only when mode is auto)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem(THEME_KEY)) applyTheme('auto');
    });

    // Initialize on page load
    initTheme();

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
})();
