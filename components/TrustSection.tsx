"use client";

import { Quotes } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TrustSection() {
  const t = useTranslations("Trust");
  
  const testimonials = [
    {
      quoteKey: "testimonial1.quote",
      authorKey: "testimonial1.author",
      roleKey: "testimonial1.role",
      companyKey: "testimonial1.company",
      image: "/man-meeting.jpg",
    },
    {
      quoteKey: "testimonial2.quote",
      authorKey: "testimonial2.author",
      roleKey: "testimonial2.role",
      companyKey: "testimonial2.company",
      image: "/man-woman.jpg",
    },
    {
      quoteKey: "testimonial3.quote",
      authorKey: "testimonial3.author",
      roleKey: "testimonial3.role",
      companyKey: "testimonial3.company",
      image: "/cargoman.jpg",
    },
  ];
  return (
    <section className="py-20 bg-white dark:bg-[#030712] border-y border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title1")}<br />{t("title2")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-gray-200 dark:border-white/10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 border-r border-b border-gray-200 dark:border-white/10 last:border-r-0 flex flex-col"
            >
              {/* Quote icon */}
              <Quotes size={32} weight="fill" className="text-[#0024ff] mb-6" />

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                "{t(testimonial.quoteKey)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                <div className="relative w-12 h-12 overflow-hidden border-2 border-[#0024ff]">
                  <Image
                    src={testimonial.image}
                    alt={t(testimonial.authorKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">
                    {t(testimonial.authorKey)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t(testimonial.roleKey)}, {t(testimonial.companyKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {t("stat1.value")}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t("stat1.label")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {t("stat2.value")}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t("stat2.label")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {t("stat3.value")}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t("stat3.label")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {t("stat4.value")}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t("stat4.label")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
