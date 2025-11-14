import { initMobileMenu } from './menu.js';
import { initTheme } from './theme.js';
import { initTestimonials } from './testimonials.js';
import { initFAQ } from './faq.js';
import { initForm } from './form.js';

// single DOMContentLoaded entrypoint
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTheme();
    initTestimonials();
    initFAQ();
    initForm();
});
