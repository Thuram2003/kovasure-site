"use client";

import { CheckCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function DownloadSection() {
  const t = useTranslations("Download");
  
  const features = [
    "feature1",
    "feature2",
    "feature3",
    "feature4",
  ];
  return (
    <section id="download" className="relative py-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-[#0024ff]/10 border border-[#0024ff]/20 text-[#0024ff] text-sm font-semibold mb-4">
                {t("badge")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                {t("title1")}<br />{t("title2")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            <ul className="space-y-4 border-l-4 border-[#0024ff] pl-6">
              {features.map((featureKey, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    weight="fill"
                    className="text-[#0024ff] shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                    {t(featureKey)}
                  </span>
                </li>
              ))}
            </ul>

            {/* App buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                aria-label={t("appStore.ariaLabel")}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                <img
                  src="/Apple_logo_black.svg"
                  alt=""
                  className="w-6 h-7 invert"
                />
                <div className="leading-tight">
                  <span className="text-xs text-gray-300 block">
                    {t("appStore.text1")}
                  </span>
                  <span className="text-base font-bold">{t("appStore.text2")}</span>
                </div>
              </a>

              <a
                href="#"
                aria-label={t("googlePlay.ariaLabel")}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                <img
                  src="/Google_Play_2022_icon.svg.webp"
                  alt=""
                  className="w-7 h-7"
                />
                <div className="leading-tight">
                  <span className="text-xs text-gray-300 block">
                    {t("googlePlay.text1")}
                  </span>
                  <span className="text-base font-bold">{t("googlePlay.text2")}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/man-meeting.jpg"
                  alt={t("imageAlt1")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/personOffice.jpg"
                  alt={t("imageAlt2")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/meeting.jpg"
                  alt={t("imageAlt3")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}