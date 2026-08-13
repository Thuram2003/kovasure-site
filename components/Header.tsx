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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-xl border-b border-[#0024ff]/10 shadow-[0_4px_30px_rgba(0,36,255,0.03)]" 
        : "bg-white/60 backdrop-blur-lg border-b border-gray-100/50"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group transition-transform hover:scale-102">
            <Image
              src="/kovasure.svg"
              alt="Kovasure"
              width={130}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/services"
              className="text-sm font-semibold text-gray-700 hover:text-[#0024ff] transition-colors py-2"
            >
              Our Services
            </a>

            <a
              href="/blog"
              className="text-sm font-semibold text-gray-700 hover:text-[#0024ff] transition-colors py-2"
            >
              Blog
            </a>

            <a
              href="/about"
              className="text-sm font-semibold text-gray-700 hover:text-[#0024ff] transition-colors py-2"
            >
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#0024ff] to-blue-700 text-white rounded-xl hover:shadow-[0_6px_20px_rgba(0,36,255,0.35)] transition-all duration-300 font-semibold text-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              Contact Us
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex w-10 h-10 items-center justify-center text-gray-600 hover:text-gray-900 rounded-xl hover:bg-[#0024ff]/5 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              <a
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-700 hover:text-[#0024ff] hover:bg-blue-50/50 rounded-xl transition-colors"
              >
                Our Services
              </a>

              <a
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-700 hover:text-[#0024ff] hover:bg-blue-50/50 rounded-xl transition-colors"
              >
                Blog
              </a>

              <a
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-700 hover:text-[#0024ff] hover:bg-blue-50/50 rounded-xl transition-colors"
              >
                About
              </a>

              {/* Mobile CTA */}
              <div className="mt-4 px-2">
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#0024ff] to-blue-700 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
