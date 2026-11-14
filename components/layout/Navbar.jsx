"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, Sparkles, Terminal, Sun, Moon } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore storage errors in restricted contexts
    }

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "AI Assistant", href: "#ai-assistant", highlight: true },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20"
          : "bg-zinc-950/60 backdrop-blur-sm border-b border-zinc-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-zinc-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-base sm:text-lg group-hover:border-emerald-400 group-hover:scale-105 transition-all duration-300 shadow-sm shadow-emerald-500/10">
              <Terminal className="w-5 h-5 text-emerald-400 group-hover:text-cyan-300 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-zinc-100 text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                {profile.handle}
              </span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  link.highlight
                    ? "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-500/20 flex items-center gap-1.5"
                    : "text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800/50"
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-emerald-400" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl text-zinc-400 hover:text-zinc-100 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 hover:border-emerald-500/40 transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && theme === "light" ? (
                <Moon className="w-4 h-4 text-emerald-600 transition-transform duration-200" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200" />
              )}
            </button>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-zinc-100 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 hover:border-emerald-500/50 transition-all duration-200 shadow-sm hover:shadow-emerald-500/10 active:scale-95"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && theme === "light" ? (
                <Moon className="w-4 h-4 text-emerald-600" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-zinc-200" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.highlight
                    ? "text-emerald-400 bg-emerald-950/30 border border-emerald-500/30"
                    : "text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800/50"
                }`}
              >
                <span>{link.name}</span>
                {link.highlight && <Sparkles className="w-4 h-4 text-emerald-400" />}
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-800/60 space-y-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700"
              >
                <span className="flex items-center gap-2">
                  {mounted && theme === "light" ? (
                    <Moon className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-400" />
                  )}
                  <span>Appearance</span>
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {mounted && theme === "light" ? "Light" : "Dark"}
                </span>
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
