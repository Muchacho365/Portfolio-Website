/**
 * data/portfolio.js — Single Source of Truth
 *
 * Contains all structured data for Simon Mezampeh's portfolio:
 * profile details, skills (categorized for UI and dual-row marquee),
 * work experience, education, projects, and the AI chatbot system prompt generator.
 *
 * To add a new project, simply append an object to the `projects` array below.
 */

export const profile = {
	name: "Simon Mezampeh",
	handle: "SimonsDevHub",
	title: "Software Engineering Student & Full-Stack Developer",
	headline:
		"Building Resilient Web Systems, Modern Interfaces & AI Integrations",
	role: "Aspiring Software Engineer",
	availability: "Available for Remote Internships & Junior Roles",
	status: "Open to Remote Software Engineering Opportunities",
	location: "Sekondi-Takoradi, Ghana",
	email: "mezampehsimon@gmail.com",
	phone: "+233 55 061 4909",
	bio: "Software engineering undergraduate at Takoradi Technical University passionate about designing responsive, high-performance web applications, secure backends, and intelligent AI tools. Driven by a disciplined self-study ethic, hands-on development, and continuous improvement, seeking remote software engineering internships and junior roles.",
	quote: {
		text: "Hard work beats talent when talent doesn't work hard.",
		author: "Cristiano Ronaldo",
	},
	avatar: "/images/avatar2.png",
	resumeUrl: "/Simon-Mezampeh-Resume.pdf",
	socialLinks: {
		github: "https://github.com/Muchacho365",
		linkedin: "https://www.linkedin.com/in/simon-mezampeh",
		email: "mailto:mezampehsimon@gmail.com",
	},
	learningPhilosophy:
		"Hands-on execution over passive tutorials. Self-taught through disciplined deep-dives across Udemy, edX, and world-class educators including David Malan (Harvard CS50), Mosh Hamedani, and Andrei Neagoie.",
	careerGoals: [
		"Excel academically and graduate at the top of the software engineering cohort at Takoradi Technical University.",
		"Secure a challenging remote software engineering internship or junior full-stack developer role.",
		"Build scalable, cloud-native software and contribute meaningfully to open-source initiatives (such as Google Summer of Code).",
	],
	interests: [
		"Software Architecture & Open Source",
		"Football (Avid Cristiano Ronaldo fan)",
		"Competitive Gaming",
		"K-Dramas & Anime",
	],
};

export const skills = {
	categories: [
		{
			id: "frontend",
			title: "Frontend Engineering",
			description:
				"Modern component architectures, type safety, and responsive design systems.",
			skills: [
				{ name: "React", icon: "/images/react.png", level: "Advanced" },
				{
					name: "Next.js",
					icon: "/images/nextjs.png",
					level: "Advanced",
				},
				{
					name: "JavaScript (ES6+)",
					icon: "/images/javascript.png",
					level: "Advanced",
				},
				{ name: "TypeScript", icon: null, level: "Intermediate" },
				{
					name: "Tailwind CSS",
					icon: "/images/css.png",
					level: "Advanced",
				},
				{ name: "HTML5", icon: "/images/html.png", level: "Advanced" },
				{ name: "CSS3", icon: "/images/sass.png", level: "Advanced" },
				{ name: "Vite", icon: null, level: "Intermediate" },
			],
		},
		{
			id: "backend",
			title: "Backend & Systems",
			description:
				"Serverless endpoints, relational schemas, secure authentication, and data structures.",
			skills: [
				{ name: "Node.js", icon: null, level: "Intermediate" },
				{ name: "PHP", icon: null, level: "Intermediate" },
				{ name: "SQL", icon: null, level: "Intermediate" },
				{
					name: "Python",
					icon: "/images/python.png",
					level: "Intermediate",
				},
				{ name: "C++", icon: "/images/cpp.png", level: "Intermediate" },
				{
					name: "Java",
					icon: "/images/java.png",
					level: "Intermediate",
				},
			],
		},
		{
			id: "cloud-tools",
			title: "Cloud, AI & Development Tools",
			description:
				"Version control, AI model orchestration, relational admin tools, and developer toolchains.",
			skills: [
				{ name: "Google Gemini AI", icon: null, level: "Advanced" },
				{
					name: "Microsoft Azure",
					icon: "/images/azure.png",
					level: "Intermediate",
				},
				{ name: "Git", icon: "/images/github.png", level: "Advanced" },
				{
					name: "GitHub",
					icon: "/images/github.png",
					level: "Advanced",
				},
				{
					name: "VS Code",
					icon: "/images/vscode.png",
					level: "Advanced",
				},
				{ name: "phpMyAdmin", icon: null, level: "Intermediate" },
				{ name: "Vercel", icon: null, level: "Advanced" },
			],
		},
	],

	// Dual-Row Marquee Data
	marqueeRow1: [
		{ name: "Next.js", icon: "/images/nextjs.png", type: "Framework" },
		{ name: "React", icon: "/images/react.png", type: "Library" },
		{
			name: "JavaScript",
			icon: "/images/javascript.png",
			type: "Language",
		},
		{ name: "TypeScript", icon: null, type: "Language" },
		{ name: "Tailwind CSS", icon: "/images/css.png", type: "Styling" },
		{ name: "HTML5", icon: "/images/html.png", type: "Markup" },
		{ name: "CSS3", icon: "/images/sass.png", type: "Styling" },
		{ name: "Vite", icon: null, type: "Build Tool" },
		{ name: "Node.js", icon: null, type: "Runtime" },
	],
	marqueeRow2: [
		{ name: "Google Gemini AI", icon: null, type: "AI / LLM" },
		{ name: "Python", icon: "/images/python.png", type: "Language" },
		{ name: "C++", icon: "/images/cpp.png", type: "Language" },
		{ name: "Java", icon: "/images/java.png", type: "Language" },
		{ name: "PHP", icon: null, type: "Backend" },
		{ name: "SQL", icon: null, type: "Database" },
		{ name: "phpMyAdmin", icon: null, type: "Tool" },
		{ name: "Microsoft Azure", icon: "/images/azure.png", type: "Cloud" },
		{
			name: "Git & GitHub",
			icon: "/images/github.png",
			type: "Version Control",
		},
		{ name: "VS Code", icon: "/images/vscode.png", type: "IDE" },
	],
};

export const experience = [
	{
		role: "Hardware & Systems Engineering Intern",
		company: "Computer Hardware Company",
		location: "Sekondi-Takoradi, Ghana",
		period: "Internship",
		type: "Internship",
		description:
			"Conducted hardware diagnostics, operating system deployments, system optimizations, and component-level repairs for desktop and laptop computers.",
		highlights: [
			"Installed, configured, and optimized Windows and Linux environments for clients.",
			"Diagnosed hardware failures across motherboards, power delivery units, RAM, and storage media.",
			"Executed precision component replacements, thermal compound refreshes, and maintenance.",
			"Provided troubleshooting and technical consultation, significantly improving device turnaround and client satisfaction.",
		],
	},
	{
		role: "5th-Place Finalist & Project Lead",
		company: "Competitive Innovation Hackathon",
		location: "Ghana",
		period: "Hackathon Competition",
		type: "Award",
		description:
			"Competed against high-performing developer teams, architecting and pitching a functional prototype under intense time constraints to earn a top 5 ranking.",
		highlights: [
			"Awarded 5th Place in a high-stakes hackathon for creating an impactful, working solution.",
			"Led technical execution and system architecture under tight sprint deadlines.",
			"Delivered a live technical demonstration to a judging panel of industry engineers.",
		],
	},
];

export const education = [
	{
		degree: "Bachelor of Technology (BTech) in Software Engineering",
		institution: "Takoradi Technical University",
		location: "Takoradi, Western Region, Ghana",
		period: "Current Student (Undergraduate)",
		status: "In Progress",
		description:
			"Comprehensive coursework in software design, algorithms, relational databases, computer systems, and full-stack development.",
		courses: [
			"Data Structures & Algorithms",
			"Software Engineering & Architecture",
			"Object-Oriented Programming (Java / C++)",
			"Relational Database Management Systems (SQL)",
			"Web Technologies & Systems Programming",
		],
	},
];

/**
 * Projects — Single Source of Truth
 *
 * Adding a new project only requires adding a single object here.
 * Required fields:
 * - title: string
 * - slug: string
 * - category: "Full-Stack" | "Frontend" | "Systems"
 * - summary: string
 * - architecture: string
 * - tags: string[]
 * - githubUrl: string
 * - liveUrl: string
 * - previewImage: string
 * - featured: boolean
 */
export const projects = [
	{
		title: "SimonsDevHub AI Portfolio",
		slug: "simonsdevhub-ai-portfolio",
		category: "Full-Stack",
		summary:
			"Production-grade personal developer portfolio featuring an interactive dual-row infinite marquee, dynamic responsive preview modal, and an AI chat assistant powered by Google Gemini 2.5 Flash.",
		architecture:
			"Engineered with Next.js 16 (App Router), React 19, and Tailwind CSS v4. Features a lightweight serverless Next.js Route Handler communicating with Google Gemini 2.5 Flash via native fetch() without third-party AI SDK overhead, custom CSS keyframe marquees, and an edge-faded Bento grid.",
		tags: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"Google Gemini AI",
			"Serverless",
			"JavaScript",
		],
		githubUrl: "https://github.com/SimonsDevHub/portfolio",
		liveUrl: "https://simonsdevhub.vercel.app",
		previewImage: "/images/nextjs.png",
		featured: true,
	},
	{
		title: "User Authentication & Role Management System",
		slug: "user-authentication-role-management",
		category: "Full-Stack",
		summary:
			"Secure role-based access control (RBAC) portal managing multi-tier user registration, password hashing, administrative permissions, and authenticated session workflows.",
		architecture:
			"Architected using PHP and relational MySQL databases managed through phpMyAdmin. Enforces prepared SQL statements to prevent SQL injection, bcrypt password hashing, CSRF token validation, and secure cookie/session state controls.",
		tags: [
			"PHP",
			"SQL",
			"phpMyAdmin",
			"RBAC",
			"Cybersecurity",
			"MySQL",
			"Authentication",
		],
		githubUrl: "https://github.com/SimonsDevHub/auth-role-management",
		liveUrl: "#",
		previewImage: "/images/vb.png",
		featured: true,
	},
	{
		title: "Airport Operations & Flight Portal",
		slug: "airport-operations-flight-portal",
		category: "Frontend",
		summary:
			"Comprehensive airport operations and flight scheduling interface providing travelers with responsive schedule lookups, interactive gate navigation, and terminal status mockups.",
		architecture:
			"Crafted with semantic HTML5, modern CSS3 layout systems (Flexbox & CSS Grid), and modular vanilla JavaScript (ES6+). Engineered for fast asset rendering, mobile touch interactions, and zero horizontal overflow from 375px mobile screens up to desktop displays.",
		tags: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"Responsive Design",
			"UI/UX",
			"Web Performance",
		],
		githubUrl: "https://github.com/SimonsDevHub/airport-portal",
		liveUrl: "#",
		previewImage: "/images/javascript.png",
		featured: false,
	},
	{
		title: "Hackathon Prototype (5th-Place Award)",
		slug: "hackathon-award-prototype",
		category: "Systems",
		summary:
			"Award-winning rapid prototype engineered during a high-stakes hackathon, securing 5th place among competitive teams with an innovative functional solution and live demonstration.",
		architecture:
			"Rapidly designed and implemented within strict sprint constraints. Combines an agile user interface with reliable backend logic, featuring efficient state synchronization, fault-tolerant error boundaries, and pitch-ready stability.",
		tags: [
			"Hackathon Award",
			"Rapid Prototyping",
			"Full-Stack",
			"Team Leadership",
			"Systems",
			"React",
		],
		githubUrl: "https://github.com/SimonsDevHub/hackathon-prototype",
		liveUrl: "#",
		previewImage: "/images/react.png",
		featured: true,
	},
];

/**
 * generateSystemPrompt — AI Chatbot System Instruction Generator
 *
 * Dynamically formats Simon's resume, background, skills, experience,
 * and project portfolio into a structured system prompt for the Gemini AI chatbot.
 * Automatically stays in sync when new projects, skills, or experiences are added.
 */
export function generateSystemPrompt() {
	const projectList = projects
		.map(
			(p, idx) =>
				`${idx + 1}. **${p.title}** (${p.category}) [${p.featured ? "Featured" : "Standard"}]\n` +
				`   - Summary: ${p.summary}\n` +
				`   - Architecture: ${p.architecture}\n` +
				`   - Tech Stack: ${p.tags.join(", ")}\n` +
				`   - Links: GitHub (${p.githubUrl}), Live Demo (${p.liveUrl})`,
		)
		.join("\n\n");

	const skillSummary = skills.categories
		.map(
			(c) =>
				`- **${c.title}**: ${c.skills.map((s) => s.name).join(", ")}`,
		)
		.join("\n");

	const expSummary = experience
		.map(
			(e) =>
				`- **${e.role}** @ ${e.company} (${e.location} | ${e.period})\n` +
				`  ${e.description}\n` +
				`  Key Contributions:\n` +
				e.highlights.map((h) => `    * ${h}`).join("\n"),
		)
		.join("\n\n");

	const eduSummary = education
		.map(
			(ed) =>
				`- **${ed.degree}** — ${ed.institution} (${ed.location})\n` +
				`  Status: ${ed.status} (${ed.period})\n` +
				`  Relevant Coursework: ${ed.courses.join(", ")}`,
		)
		.join("\n");

	return `You are PortfolioGPT, the intelligent, friendly, and articulate personal AI assistant for Simon Mezampeh (handle: ${profile.handle}) on his portfolio website.
Your objective is to represent Simon accurately, highlighting his technical abilities, practical engineering projects, problem-solving mindset, and readiness for remote software engineering internships and junior roles.

### CANDIDATE OVERVIEW
- Name: ${profile.name} (${profile.handle})
- Title: ${profile.title}
- Location: ${profile.location} (Fully open and equipped for remote software engineering internships and junior roles)
- Contact: ${profile.email} | Phone: ${profile.phone}
- Resume: Downloadable from "${profile.resumeUrl}"
- Core Mindset: "${profile.quote.text}" — ${profile.quote.author}. Simon believes in deep work ethic, humility, continuous improvement, and adaptability.

### EDUCATION
${eduSummary}

### PROFESSIONAL EXPERIENCE & ACHIEVEMENTS
${expSummary}
- Additional Highlights: Overcame financial constraints to master programming through disciplined self-study on YouTube, Udemy, and edX (guided by instructors David Malan, Mosh Hamedani, and Andrei Neagoie). Secured 5th Place in a competitive developer hackathon.

### TECHNICAL PROFICIENCIES
${skillSummary}
- Preferred Technologies: JavaScript (favored for versatility across React/Next.js frontend and Node.js backend), alongside practical experience in Python, C++, Java, PHP, and SQL.

### PORTFOLIO PROJECTS
${projectList}

### CAREER GOALS & WORK ETHIC
${profile.careerGoals.map((g) => `- ${g}`).join("\n")}
- Learning Philosophy: ${profile.learningPhilosophy}
- Personal Interests: ${profile.interests.join(", ")}

### OPERATIONAL GUIDELINES FOR RESPONSES
1. **Factual Grounding**: Strictly base all technical, educational, and experience answers on Simon's profile detailed above. Never invent unlisted companies, degrees, or experience.
2. **Professional & Engaging Tone**: Respond with warmth, technical confidence, and enthusiasm. Use clear markdown formatting (bullet points, bold text, concise paragraphs) so answers are immediately scannable for recruiters.
3. **Encourage Next Steps**: When appropriate, invite recruiters and visitors to view his source code on GitHub (${profile.socialLinks.github}), download his resume (${profile.resumeUrl}), or reach out directly at ${profile.email}.
4. **Unknown Inquiries**: If an inquiry touches upon topics outside Simon's professional background, politely state that you do not have that specific detail and invite the user to contact Simon via email.`;
}

const portfolioData = {
	profile,
	skills,
	experience,
	education,
	projects,
	generateSystemPrompt,
};

export default portfolioData;
