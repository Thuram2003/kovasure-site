"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What types of cargo can be insured?",
    answer: "We cover most commercial cargo including electronics, machinery, textiles, food products, automotive parts, and general merchandise. Coverage is available for air, sea, and land transport worldwide.",
  },
  {
    question: "How quickly can I get a quote?",
    answer: "Most quotes are ready within 5 minutes. Simply enter your cargo value, route, and transport mode in our online form. You'll receive bindable pricing immediately.",
  },
  {
    question: "What risks are covered under All Risk insurance?",
    answer: "All Risk policies cover physical loss or damage from external causes including fire, theft, collision, sinking, derailment, natural disasters, and accidents during loading/unloading. Named-peril options available for lower premiums.",
  },
  {
    question: "How do I file a claim?",
    answer: "File claims online, by email, or phone 24/7. Submit documentation of the loss (photos, commercial invoice, packing list, transport documents). Our claims team will guide you through the process. Most valid claims settle within 48 hours.",
  },
  {
    question: "Is there a minimum shipment value?",
    answer: "We insure shipments from $1,000 up to $10 million per shipment. For values above $10 million, please contact our underwriting team for special arrangements.",
  },
  {
    question: "Do you offer annual policies for frequent shippers?",
    answer: "Yes. We offer annual open cargo policies covering multiple shipments throughout the year. This is more economical than insuring each shipment separately and provides automatic coverage for qualifying shipments.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-white/10">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Common Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Clear answers about cargo insurance coverage. Need more information? Contact our team directly.
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
                    {faq.question}
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
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}