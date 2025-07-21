import "./globals.css";

export const metadata = {
    title: "SimonDevHub",
    description: "A personal portfolio by Simon Mezampeh to publish his projects",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
