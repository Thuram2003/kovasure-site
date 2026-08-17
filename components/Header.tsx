"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white dark:bg-[#030712] border-b border-gray-200 dark:border-white/10 shadow-sm"
          : "bg-white/95 dark:bg-[#030712]/95 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/kovasure.svg"
              alt="Kovasure"
              width={130}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/services"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] transition-colors"
            >
              Services
            </a>
            <a
              href="/about"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] transition-colors"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] transition-colors"
            >
              Blog
            </a>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#0024ff] text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex w-10 h-10 items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#030712]">
            <nav className="flex flex-col gap-1">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 px-4">
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-3 bg-[#0024ff] text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}