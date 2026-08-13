"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What types of cargo can I insure?",
    answer: "We cover virtually all types of cargo including electronics, machinery, textiles, food products, automotive parts, and more. Whether you're shipping by air, sea, or land, we have a solution for you.",
  },
  {
    question: "How quickly can I get a quote?",
    answer: "You can receive an instant quote online in less than 5 minutes. Simply provide your cargo details, value, and shipping route, and our system will generate a competitive quote immediately.",
  },
  {
    question: "What perils are covered?",
    answer: "Our All Risk coverage protects against loss or damage from fire, theft, collision, sinking, derailment, overturning, natural disasters, and more. We also offer customized coverage for specific needs.",
  },
  {
    question: "How do I file a claim?",
    answer: "Claims can be filed 24/7 through our online portal, email, or phone. Provide documentation of the loss/damage, and our claims team will guide you through the process. Most claims are settled within 48 hours.",
  },
  {
    question: "Is there a minimum shipment value?",
    answer: "We insure shipments starting from $1,000 up to $10 million per shipment. For higher value shipments, special arrangements can be made with our underwriting team.",
  },
  {
    question: "Do you offer annual policies?",
    answer: "Yes! For frequent shippers, we offer annual open cargo policies that cover multiple shipments throughout the year. This provides convenience and often better rates than per-shipment coverage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/10 dark:from-[#030712] dark:via-[#090b14] dark:to-[#0024ff]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#0024ff] to-[#ffb41d] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Got questions? We've got answers. If you need custom assistance, contact our support desk.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden shadow-soft hover:border-[#0024ff] dark:hover:border-[#0024ff] transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent border-none"
                >
                  <span className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <CaretDown
                    size={20}
                    weight="bold"
                    className={`text-[#0024ff] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0024ff] to-blue-700 text-white rounded-xl hover:shadow-[0_8px_25px_rgba(0,36,255,0.35)] transition-all font-semibold hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
