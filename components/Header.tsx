"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/kovasure.svg"
              alt="Kovasure"
              width={130}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/services"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] transition-colors"
            >
              {t("services")}
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] transition-colors"
            >
              {t("blog")}
            </Link>
          </nav>

          {/* CTA + Language + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Language switcher - Desktop */}
            <div className="hidden lg:block relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                onMouseEnter={() => setIsLangOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
              >
                <span className={`fi fi-${locale === "en" ? "us" : "fr"} rounded-sm`} style={{ width: "1rem", height: "0.75rem", display: "inline-block", backgroundSize: "cover" }} />
                <span>{locale.toUpperCase()}</span>
              </button>
              {isLangOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
                  <div
                    onMouseLeave={() => setIsLangOpen(false)}
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#030712] border border-gray-200 dark:border-white/10 rounded-lg shadow-lg z-50 p-1 animate-fade-in"
                  >
                    <button
                      onClick={() => { switchLocale("en"); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${locale === "en" ? "text-[#0024ff] bg-blue-50 dark:bg-blue-500/10" : "text-gray-700 dark:text-gray-300"}`}
                    >
                      <span className="fi fi-us rounded-sm" style={{ width: "1rem", height: "0.75rem", display: "inline-block", backgroundSize: "cover" }} />
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => { switchLocale("fr"); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${locale === "fr" ? "text-[#0024ff] bg-blue-50 dark:bg-blue-500/10" : "text-gray-700 dark:text-gray-300"}`}
                    >
                      <span className="fi fi-fr rounded-sm" style={{ width: "1rem", height: "0.75rem", display: "inline-block", backgroundSize: "cover" }} />
                      <span>Français</span>
                    </button>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#0024ff] text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              {t("getQuote")}
            </Link>

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
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {t("services")}
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0024ff] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                {t("blog")}
              </Link>

              <div className="mt-3 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center px-6 py-3 bg-[#0024ff] text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  {t("getQuote")}
                </Link>
              </div>
            </nav>

            {/* Language switcher - Mobile */}
            <div className="flex justify-between items-center mt-4 pt-4 px-4 border-t border-gray-100 dark:border-white/10">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{t("language")}</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => { switchLocale("en"); setIsMenuOpen(false); }}
                  className={`px-2 py-1.5 rounded-md border text-xs font-bold flex items-center gap-1 transition-all ${
                    locale === "en" 
                      ? 'bg-blue-50 text-[#0024ff] border-blue-200 dark:bg-blue-500/20 dark:border-blue-500/30' 
                      : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="fi fi-us rounded-sm" style={{ width: "0.85rem", height: "0.64rem", display: "inline-block", backgroundSize: "cover" }} />
                </button>
                <button
                  onClick={() => { switchLocale("fr"); setIsMenuOpen(false); }}
                  className={`px-2 py-1.5 rounded-md border text-xs font-bold flex items-center gap-1 transition-all ${
                    locale === "fr" 
                      ? 'bg-blue-50 text-[#0024ff] border-blue-200 dark:bg-blue-500/20 dark:border-blue-500/30' 
                      : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="fi fi-fr rounded-sm" style={{ width: "0.85rem", height: "0.64rem", display: "inline-block", backgroundSize: "cover" }} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}