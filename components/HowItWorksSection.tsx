"use client";

import { FileText, CreditCard, ShieldCheck, CheckCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HowItWorksSection() {
  const t = useTranslations("HowItWorks");
  
  const steps = [
    {
      icon: FileText,
      numberKey: "step1.number",
      titleKey: "step1.title",
      descriptionKey: "step1.description",
      image: "/cargoman1.avif",
    },
    {
      icon: CreditCard,
      numberKey: "step2.number",
      titleKey: "step2.title",
      descriptionKey: "step2.description",
      image: "/meeting.jpg",
    },
    {
      icon: ShieldCheck,
      numberKey: "step3.number",
      titleKey: "step3.title",
      descriptionKey: "step3.description",
      image: "/handshake.jpg",
    },
    {
      icon: CheckCircle,
      numberKey: "step4.number",
      titleKey: "step4.title",
      descriptionKey: "step4.description",
      image: "/shipment.jpg",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-[#030712] border-y border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title1")}<br />{t("title2")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 dark:border-white/10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-white/10 last:border-r-0 overflow-hidden group"
              >
                {/* Step number badge */}
                <div className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#0024ff] flex items-center justify-center text-white font-bold text-lg">
                  {t(step.numberKey)}
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={t(step.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] mb-4">
                    <Icon size={24} weight="bold" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}