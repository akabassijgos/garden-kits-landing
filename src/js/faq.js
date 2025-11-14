// Accessible accordion: toggles panels, rotates icon

export function initFAQ() {
    const faqRoot = document.getElementById('faq');
    if (!faqRoot) return;

    const faqButtons = Array.from(faqRoot.querySelectorAll('button[aria-controls]'));
    const singleOpen = true; // true = only one open at a time

    faqButtons.forEach(btn => {
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        if (!panel) return;

        // find icon SVG (Lucide replacement) or fallback to any svg inside
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
            panel.hidden = expanded;
            if (icon) icon.classList.toggle('rotate-180', !expanded);
        });
    });
}
