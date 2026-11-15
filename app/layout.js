import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata = {
	metadataBase: new URL("https://simonsdevhub.vercel.app"),
	verification: {
		google: "aMH4GPIN7tAdDdDSUjjrq6jDuxe_r1m9NK9gOyfwXTw",
	},
	title: {
		default: `${profile.name} | ${profile.title}`,
		template: `%s | ${profile.name}`,
	},
	description: `${profile.bio} Open to remote software engineering internships and junior roles.`,
	keywords: [
		"Simon Mezampeh",
		"SimonsDevHub",
		"Software Engineer",
		"Software Engineering Student",
		"Full-Stack Developer",
		"Next.js",
		"React",
		"Tailwind CSS",
		"Takoradi Technical University",
		"Ghana Software Engineer",
		"Remote Software Engineering Intern",
	],
	authors: [{ name: profile.name, url: profile.socialLinks.github }],
	creator: profile.name,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://simonsdevhub.vercel.app",
		title: `${profile.name} | ${profile.title}`,
		description: profile.bio,
		siteName: `${profile.handle} Portfolio`,
		images: [
			{
				url: profile.avatar,
				width: 800,
				height: 800,
				alt: `${profile.name} - ${profile.title}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${profile.name} | ${profile.title}`,
		description: profile.bio,
		images: [profile.avatar],
		creator: `@${profile.handle}`,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){try{var s=localStorage.getItem('theme');if(s==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){}})();`,
					}}
				/>
			</head>
			<body className="bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300 min-h-screen flex flex-col">
				{children}
			</body>
		</html>
	);
}
