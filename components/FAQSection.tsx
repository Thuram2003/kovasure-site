"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      questionKey: "faq1.question",
      answerKey: "faq1.answer",
    },
    {
      questionKey: "faq2.question",
      answerKey: "faq2.answer",
    },
    {
      questionKey: "faq3.question",
      answerKey: "faq3.answer",
    },
    {
      questionKey: "faq4.question",
      answerKey: "faq4.answer",
    },
    {
      questionKey: "faq5.question",
      answerKey: "faq5.answer",
    },
    {
      questionKey: "faq6.question",
      answerKey: "faq6.answer",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-0 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-200 dark:border-white/10 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white pr-6">
                    {t(faq.questionKey)}
                  </span>
                  <div className="w-8 h-8 bg-[#0024ff] flex items-center justify-center text-white flex-shrink-0">
                    {isOpen ? (
                      <Minus size={18} weight="bold" />
                    ) : (
                      <Plus size={18} weight="bold" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-6">
                      {t(faq.answerKey)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("ctaText")}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            {t("ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
}