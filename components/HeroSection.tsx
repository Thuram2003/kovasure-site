"use client";

import { ArrowRight, ShieldCheck } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");
  
  return (
    <section className="relative bg-white dark:bg-[#030712]">
      {/* Full-width hero image background */}
      <div className="relative h-[600px] lg:h-[700px]">
        <Image
          src="/cargo.jpg"
          alt="Global cargo operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
              <ShieldCheck size={18} weight="bold" className="text-[#ffb41d]" />
              <span className="text-sm font-medium">{t("badge")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t("title1")}<br />
              <span className="text-[#ffb41d]">{t("title2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                {t("cta1")}
                <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("cta2")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators bar */}
      <div className="bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{t("stat1Value")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat1Label")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{t("stat2Value")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat2Label")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{t("stat3Value")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat3Label")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{t("stat4Value")}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{t("stat4Label")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}