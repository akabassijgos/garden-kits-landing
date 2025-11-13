
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


// Testimonials
(function () {
    const testimonials = [
        {
            name: 'Aiko', location: 'Kyoto', img: './images/testimonials/aiko.jpg',
            text: `Love my balcony basil! The kit included everything I needed, and the illustrated 
            card made planting so simple. My herbs are thriving and look amazing on my windowsill.`
        },
        {
            name: 'Jack', location: 'Sydney', img: './images/testimonials/jack.jpg',
            text: `The care cards are great for beginners; saved my first crop! I've been 
            recommending these kits to all my friends who want to start small indoor gardens.`
        },
        {
            name: 'Diego', location: 'Madrid', img: './images/testimonials/diego.jpg',
            text: `Fast shipping and great packaging. Plants arrived healthy and ready to grow. 
            I especially appreciate how easy it was to follow the instructions and see results quickly.`
        }
    ];

    const container = document.getElementById('testiSlides');
    const dotsContainer = document.getElementById('testiDots');

    testimonials.forEach((t, i) => {
        // create slide
        const slide = document.createElement('article');
        slide.className = 'flex-shrink-0 w-full px-16 py-6 bg-surface rounded-2xl border border-border/10 shadow-md flex gap-4 items-center';
        slide.innerHTML = `
        <img src="${t.img}" alt="${t.name}" class="w-40 h-40 rounded-full object-cover shadow-sm shrink-0">
        <div>
        <blockquote class="text-text-primary text-lg">“${t.text}”</blockquote>
        <div class="mt-3 text-sm text-text-secondary">${t.name}, ${t.location}</div>
        </div>
    `;
        container.appendChild(slide);

        // create dot
        const dot = document.createElement('button');
        dot.className = 'w-3 h-3 rounded-full bg-border/40';
        dot.addEventListener('click', () => show(i));
        dotsContainer.appendChild(dot);
    });

    let idx = 0;

    function update() {
        container.style.transform = `translateX(-${idx * 100}%)`;
        // update dots
        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.classList.toggle('bg-primary', i === idx);
            dot.classList.toggle('bg-border/40', i !== idx);
        });
    }

    function show(i) {
        idx = (i + testimonials.length) % testimonials.length;
        update();
    }

    // controls
    document.getElementById('prevTesti').addEventListener('click', () => show(idx - 1));
    document.getElementById('nextTesti').addEventListener('click', () => show(idx + 1));

    // init
    update();

    // auto-slide
    let auto = setInterval(() => show(idx + 1), 6000);
    container.addEventListener('mouseenter', () => clearInterval(auto));
    container.addEventListener('mouseleave', () => auto = setInterval(() => show(idx + 1), 6000));
})();


// FAQ
document.addEventListener('DOMContentLoaded', () => {
    const faqRoot = document.getElementById('faq');
    if (!faqRoot) return;

    const faqButtons = Array.from(faqRoot.querySelectorAll('button[aria-controls]'));
    const singleOpen = true; // true = only one open at a time

    faqButtons.forEach(btn => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (!panel) return;

        // find the icon element inside the button
        const icon = btn.querySelector('[data-lucide]') || btn.querySelector('svg');

        btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';

        if (singleOpen) {
            // close others
            faqButtons.forEach(other => {
            if (other === btn) return;
            const otherPanelId = other.getAttribute('aria-controls');
            const otherPanel = document.getElementById(otherPanelId);
            other.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.hidden = true;
            const otherIcon = other.querySelector('[data-lucide]') || other.querySelector('svg');
            if (otherIcon) otherIcon.classList.remove('rotate-180');
            });
        }

        // toggle current
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded; // if it was expanded -> hide, else show

        if (icon) icon.classList.toggle('rotate-180', !expanded);
        });
    });

});
