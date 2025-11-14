// Simple contact form fake-submit (placeholder for later API integration)

export function initForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('contactSuccess');
    if (!form || !success) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // a fake submit for now
        success.classList.remove('hidden');
        form.reset();
    });
}
