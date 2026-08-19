"use client";

import { Lightning, CurrencyDollar, Globe, Lock, Headset, Clock } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function BenefitsSection() {
  const t = useTranslations("Benefits");
  
  const benefits = [
    {
      icon: Lightning,
      titleKey: "fastQuote.title",
      descriptionKey: "fastQuote.description",
    },
    {
      icon: CurrencyDollar,
      titleKey: "transparentPricing.title",
      descriptionKey: "transparentPricing.description",
    },
    {
      icon: Globe,
      titleKey: "globalCoverage.title",
      descriptionKey: "globalCoverage.description",
    },
    {
      icon: Lock,
      titleKey: "financialStrength.title",
      descriptionKey: "financialStrength.description",
    },
    {
      icon: Headset,
      titleKey: "directSupport.title",
      descriptionKey: "directSupport.description",
    },
    {
      icon: Clock,
      titleKey: "rapidClaims.title",
      descriptionKey: "rapidClaims.description",
    },
  ];
  return (
    <section id="benefits" className="relative py-20 bg-gray-50 dark:bg-gray-950">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/shipment.jpg"
          alt="Cargo operations"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title1")}<br />{t("title2")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Added gap between boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10"
              >
                <div className="w-14 h-14 bg-[#0024ff] flex items-center justify-center text-white mb-5">
                  <Icon size={28} weight="bold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}