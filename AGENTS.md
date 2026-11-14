# AGENTS.md — Architectural & Engineering Standards

## 1. Project Overview
Production-grade personal portfolio for **Simon Mezampeh** (`SimonsDevHub`), a Software Engineering student at Takoradi Technical University seeking remote software engineering internships and roles.

## 2. Locked Tech Stack
* **Framework:** Next.js `16.4.6` (App Router, JavaScript `.js`/`.jsx`)
* **UI Library:** React `19.3.1`
* **Styling:** Tailwind CSS `4.3.5` (`@tailwindcss/postcss`)
* **Icons:** `lucide-react` `^1.73.0`
* **Package Manager:** `pnpm` (`12.19.0`)
* **AI Backend:** Serverless Next.js Route Handler (`app/api/chat/route.js`) calling Google AI Studio (`gemini-2.5-flash`) via native `fetch()` using `process.env.GEMINI_API_KEY`.

## 3. Coding & Architecture Rules
* **Dark-Mode-First Design:** Use `bg-zinc-950` canvas, `bg-zinc-900/60` glassmorphic cards with `border-zinc-800/80`, and `emerald-400` / `cyan-400` accents.
* **Zero Bloat:** Do not install extra icon libraries or third-party AI SDK packages. Use `lucide-react` and built-in `fetch()`.
* **Single Source of Truth:** All profile details, skills, experience, projects, and AI prompt context live in `data/portfolio.js`. Adding a new project must only require adding one object to `projects`.
* **Responsive Precision:** All layouts must render cleanly at `375px` (Mobile), `768px` (Tablet), and `1440px+` (Desktop) with zero horizontal overflow.

## 4. Directory Structure
```text
├── .github/workflows/ci.yml        # Automated pnpm install & next build check
├── app/
│   ├── api/chat/route.js           # Serverless Google Gemini endpoint
│   ├── globals.css                 # Tailwind v4 setup + custom marquee keyframes
│   ├── layout.js                   # Root metadata, SEO tags, and Google Fonts
│   └── page.js                     # Main portfolio page composition
├── components/
│   ├── layout/                     # Navbar.jsx & Footer.jsx
│   ├── sections/                   # Hero, TechMarquee, Projects, ExperienceAndAbout, Contact
│   └── ui/                         # ProjectPreviewModal.jsx & AiAssistant.jsx
├── data/
│   └── portfolio.js                # Single source of truth for UI + AI system prompt
└── public/
    ├── images/                     # Static assets & project thumbnails
    └── Simon-Mezampeh-Resume.pdf   # URL-safe downloadable resume
```
