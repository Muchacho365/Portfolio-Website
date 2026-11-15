export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://simonsdevhub.vercel.app/sitemap.xml",
	};
}
