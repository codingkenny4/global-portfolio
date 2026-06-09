# Global Software Engineer Portfolio 🚀

A highly responsive, premium developer portfolio designed to appeal to both local (South Korean) and international recruiters. Built with Vanilla HTML, CSS, JavaScript, and powered by Vite for clean bundling and rapid local development.

## 🌟 Key Features

- **Bilingual Support (EN / KO)**: Instant translation toggling for all sections, showing cultural fluency and localizing content for Korean and global recruiters.
- **Sleek Light/Dark Mode**: Persisted dark-themed and light-themed designs built with custom CSS property systems.
- **Interactive UI Components**:
  - **Dynamic Text Typing**: Self-typing text subtitle effect on the Hero section.
  - **Custom Timeline**: Sleek experience and education vertical timeline.
  - **Project Filter Grid**: Instantly filter projects by tags (All, Frontend, Fullstack, DevOps/API).
  - **Skill Bars**: Dynamic progress bars that animate when scrolling into view.
- **Modern Styling System**: Built with modern CSS variables, glassmorphism, smooth gradients, and float/pulsing micro-interactions.
- **SEO & Performance Best Practices**: Fully semantic HTML5 structure, unique descriptive IDs, performance-optimized, and structured header tags.

---

## 📂 Project Structure

```bash
global-portfolio/
├── assets/                  # High-quality illustrations and mockups
│   ├── profile.png          # Generated developer 3D profile avatar
│   ├── project1.png         # Project 1 (Collaborative Workspace) image
│   ├── project2.png         # Project 2 (Portfolio SaaS) image
│   └── project3.png         # Project 3 (High-throughput API) image
├── app.js                   # Application logic (Translation database, typing effect, toggles)
├── index.html               # Main index containing semantic layout and translations hooks
├── style.css                # Visual design system, variables, layouts, and animations
├── package.json             # DevDependencies and run scripts
└── README.md                # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org) installed on your system to run the Vite dev server.

### Installation

1. Navigate to the project directory:
   ```bash
   cd ~/projects/global-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open the local URL (usually `http://localhost:5173`) in your browser to view and edit the portfolio.

### Production Build

Compile and minify the static files for production deployment:
```bash
npm run build
```
The production bundle will be generated in the `/dist` directory, ready to be hosted on Netlify, Vercel, GitHub Pages, or AWS S3.

---

## ✍️ Customizing Content

### 1. Adding/Editing Translations
All texts, titles, descriptions, and taglines are stored in the `translations` object inside `app.js`.
To change text, modify the English or Korean entries under their respective keys:
```javascript
const translations = {
    en: {
        "hero-title-name": "Your Name",
        // ...
    },
    ko: {
        "hero-title-name": "본인 이름",
        // ...
    }
};
```

### 2. Updating Profile & Project Images
To use your own photos or project screenshots, replace the corresponding files in the `/assets` directory:
- Profile photo: `assets/profile.png`
- Project screenshots: `assets/project1.png`, `assets/project2.png`, `assets/project3.png`

### 3. Replacing Resumes
To link your actual resume PDFs:
1. Copy your English and Korean resume PDFs into the `assets/` directory (e.g., `assets/resume-en.pdf`, `assets/resume-ko.pdf`).
2. Update the button triggers or modify the logic inside `app.js`'s `initResumeDownloads()` to open or download the files instead of showing mock alerts.
