// Simple carousel: render slides, handle prev/next/dots, autoplay with pause on hover/focus

export function initTestimonials() {
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
    const prevBtn = document.getElementById('prevTesti');
    const nextBtn = document.getElementById('nextTesti');
    if (!container || !dotsContainer || !prevBtn || !nextBtn) return;

    // Build slides & dots
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
    const total = testimonials.length;
    let autoTimer = null;
    const AUTO_DELAY = 6000;

    function update() {
        // translate the track — CSS transition handles smoothness (Tailwind classes on container)
        container.style.transform = `translateX(-${idx * 100}%)`;
        // update dots
        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.classList.toggle('bg-primary', i === idx);
            dot.classList.toggle('bg-border/40', i !== idx);
        });
    }

    function show(i) {
        idx = (i + total) % total;
        update();
    }

    // controls
    prevBtn.addEventListener('click', () => show(idx - 1));
    nextBtn.addEventListener('click', () => show(idx + 1));

    // init
    update();

    // autoplay controls: start/stop and pause on hover/focus
    function startAuto() {
        stopAuto();
        autoTimer = setInterval(() => show(idx + 1), AUTO_DELAY);
    }
    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = null;
    }

    // Pause when users interact (hover or keyboard focus)
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
    container.addEventListener('focusin', stopAuto);
    container.addEventListener('focusout', startAuto);

    startAuto();
}
