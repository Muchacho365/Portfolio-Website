# SimonsDevHub — Personal Portfolio & AI Recruiter Assistant

A modern, responsive, production-grade software engineering portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Designed for technical recruiters and hiring managers, it features an interactive **Live Project Preview** modal, a dual-row tech stack marquee, and a serverless **Google Gemini AI Assistant** trained on my resume and engineering background.

🔗 **Live Demo:** [https://vercel.app](https://vercel.app) *(Update with your live Vercel URL after deployment)*

---

## ✨ Key Features

* **Serverless AI Recruiter Assistant (`/api/chat`):** Powered by Google AI Studio (`gemini-2.5-flash`) via a zero-dependency Next.js Route Handler. Answers questions about my skills, projects, education, and hackathon experience using a centralized system prompt.
* **Interactive Live Project Previews:** Visitors can inspect live applications directly inside the portfolio using a custom browser-chrome modal with **Desktop (`100%`)** and **Mobile (`375px`)** viewport toggles.
* **Single Source of Truth Architecture:** All profile metadata, skills, experience, projects, and AI prompt context are managed in `data/portfolio.js`—adding a new project requires only a single object entry.
* **Modern Dark-Mode UI & Dual Marquee:** Built with `zinc-950` glassmorphism surfaces, `Inter` & `JetBrains Mono` typography, and an edge-faded dual-direction infinite tech stack marquee.
* **CI/CD & Production Ready:** Configured with GitHub Actions (`.github/workflows/ci.yml`) for automated build verification on every push and pull request.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org) (App Router)
* **Frontend:** [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com), [Lucide React](https://lucide.dev)
* **AI & Serverless:** [Google AI Studio (Gemini API)](https://google.com), Vercel Serverless Functions
* **Package Manager & CI:** [pnpm](https://pnpm.io), GitHub Actions

---

## 📁 Project Structure

```text
├── .github/workflows/ci.yml        # Automated pnpm build check
├── app/
│   ├── api/chat/route.js           # Serverless Google Gemini API endpoint
│   ├── globals.css                 # Tailwind v4 & marquee animations
│   ├── layout.js                   # Root metadata, SEO & fonts
│   └── page.js                     # Main portfolio page assembly
├── components/
│   ├── layout/                     # Navbar & Footer
│   ├── sections/                   # Hero, TechMarquee, Projects, Experience & Contact
│   └── ui/                         # ProjectPreviewModal & AiAssistant
├── data/
│   └── portfolio.js                # Centralized portfolio data & AI system prompt
└── public/
    ├── images/                     # Static assets & project thumbnails
    └── Simon-Mezampeh-Resume.pdf   # Downloadable resume
```

---

## 🚀 Getting Started Locally

### Prerequisites
* **Node.js** `20+` or `22+`
* **pnpm** `12+`
* A free **Google AI Studio API Key** from [://google.com](https://google.com)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd Portfolio-Website
   ```

2. **Install dependencies with `pnpm`:**
   ```bash
   pnpm install
   ```

3. **Configure environment variables:**
   Copy `.env.example` to `.env.local` and add your Gemini API key:
   ```bash
   cp .env.example .env.local
   ```
   ```env
   GEMINI_API_KEY=your_google_ai_studio_api_key_here
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## ☁️ Deployment (Vercel)

1. Push your repository to **GitHub**.
2. Import the project into **[Vercel](https://vercel.com)** (Vercel automatically detects `pnpm-lock.yaml` and Next.js).
3. Navigate to **Project Settings → Environment Variables** and add:
   * **Key:** `GEMINI_API_KEY`
   * **Value:** Your Google AI Studio API key
4. Deploy and share your live link.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Simon Mezampeh** — Software Engineering Student (Takoradi Technical University)  
* **Email:** [mezampehsimon@gmail.com](mailto:mezampehsimon@gmail.com)  
* **GitHub:** [://github.com](https://://github.com)  
* **LinkedIn:** [://linkedin.com](https://://linkedin.com)
