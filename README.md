# Garden Kits
This project is a simple, responsive landing page built with Tailwind CSS v4.1, Vanilla JS and Vite. Its purpose is to showcase the products of a fictional company specializing in gardening kits.

**Live demo:** View the project live at https://akabassijgos.github.io/garden-kits-landing/


## Installation

1. Clone the repo

```bash
git clone https://github.com/akabassijgos/garden-kits-landing
cd garden-kits-landing
```

2. Install dependencies

```bash
npm install
```

3. Start the dev server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```


## Features

* Responsive hero section with call-to-action buttons
* Featured kits section with cards and images
* How it works section with steps
* Testimonials carousel with customer photos
* Pricing / CTA section
* FAQ section with accordion style
* Contact form (currently just a fake submit)
* Footer with theme toggle and visual language selector
* Dark / light / auto theme switching
* Lucide icons integration
* Mobile menu for small screens


## Project Structure

```
garden-kits-landing/
├── index.html                 # Main HTML page
├── package.json               # Project dependencies & scripts
├── package-lock.json          # Exact dependency versions
├── vite.config.js             # Vite configuration
├── README.md
├── .gitignore
├── public/
│   └── images/                # All images used in the site
└── src/
    ├── css/                   # Tailwind input CSS
    └── js/
        ├── faq.js             # Accordion functionality for FAQ section
        ├── form.js            # Handles contact form submission
        ├── icons.js           # Initializes Lucide icons used across the site
        ├── main.js            # Entry point: imports and initializes all modules
        ├── menu.js            # Handles mobile menu toggle and link clicks
        ├── testimonials.js    # Carousel logic for the testimonials section
        └── theme.js           # Dark/light/auto theme switching
```


## TODO

* Implement reduced-motion support (for users who prefer less animation).
* Make the language selector functional.
* Change the contact form to actually send emails via the backend.


## Image Credits

- **hero-kit.jpg**: Photo by <a href="https://unsplash.com/@_yana__?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Yana Kovalyova</a> on <a href="https://unsplash.com/photos/a-yellow-vase-sits-on-a-table-ZBftjN-kKIM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- **indoor-herb-starter.jpg**: Photo by <a href="https://unsplash.com/@charlesjaymurphy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Murphy</a> on <a href="https://unsplash.com/photos/green-plant-on-brown-clay-pot-VLE-tCetCBQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- **balcony-veg-kit.jpg**: Photo by <a href="https://unsplash.com/@fourcubes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">杨 震</a> on <a href="https://unsplash.com/photos/a-balcony-with-a-planter-filled-with-flowers-WPRG873bhYM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- **outdoor-flower-pack.jpg**: Photo by <a href="https://unsplash.com/@anderson_mike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Anderson</a> on <a href="https://unsplash.com/photos/a-bridge-over-a-river-surrounded-by-lots-of-flowers-ytsYMo1ciWo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- **aiko.jpg**: Photo by <a href="https://unsplash.com/@zacks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">oktavianus mulyadi</a> on <a href="https://unsplash.com/photos/a-woman-with-pink-hair-is-posing-for-a-picture-qPyQROA4H64?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- **jack.jpg**: Photo by <a href="https://unsplash.com/@vincefleming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vince Fleming</a> on <a href="https://unsplash.com/photos/person-wearing-blue-top-smiling-j3lf-Jn6deo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- **diego.jpg**: Photo by <a href="https://unsplash.com/@rd421?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">R.D. Smith</a> on <a href="https://unsplash.com/photos/a-man-with-a-beard-standing-in-front-of-a-colorful-wall-S1z65AHntBo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      
