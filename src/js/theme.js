// Theme toggle (auto / light / dark) with icon update using lucide
import { createElement, Sun, Moon, SunMoon } from 'lucide';

const THEME_KEY = 'theme-preference';
const MODES = ['auto', 'light', 'dark'];


/**
 * Update the icon element according to the current mode
 * 
 */
function updateThemeIcon(iconHolder, mode) {
    if (!iconHolder) return;
    iconHolder.innerHTML = '';
    let node = SunMoon;
    if (mode === 'light') node = Sun;
    else if (mode === 'dark') node = Moon;
    const iconSVG = createElement(node, { class: ['w-4', 'h-4'] });
    iconHolder.appendChild(iconSVG);
}

/**
 * Apply visual theme to the document (adds/removes .dark)
 */
function applyTheme(mode, themeLabelEl, iconHolder) {
    if (mode === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (mode === 'light') {
        document.documentElement.classList.remove('dark');
    } else { // auto
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    if (themeLabelEl) themeLabelEl.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    updateThemeIcon(iconHolder, mode);
}

/**
 * Persist and apply theme
 */
function setTheme(mode, themeLabelEl, iconHolder) {
    if (mode === 'auto') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, mode);
    applyTheme(mode, themeLabelEl, iconHolder);
}

/**
 * Initialize theme button, label, icon and system-change listener
 */
export function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const themeLabel = document.getElementById('themeLabel');
    const iconHolder = document.getElementById('themeIcon');
    if (!themeBtn) return;

    // load saved or default
    const saved = localStorage.getItem(THEME_KEY);
    const mode = saved && MODES.includes(saved) ? saved : 'auto';
    let modeIndex = MODES.indexOf(mode);
    applyTheme(mode, themeLabel, iconHolder);

    // Cycle theme on button click
    themeBtn.addEventListener('click', () => {
        modeIndex = (modeIndex + 1) % MODES.length;
        setTheme(MODES[modeIndex], themeLabel, iconHolder);
    });

    // React to system preference changes (only when mode is auto)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (!localStorage.getItem(THEME_KEY)) applyTheme('auto', themeLabel, iconHolder);
        });
    }

    // Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}
