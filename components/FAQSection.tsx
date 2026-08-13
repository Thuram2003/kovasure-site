"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What types of cargo can I insure?",
    answer: "We cover most cargo types including electronics, machinery, textiles, food products, and automotive parts. Air, sea, and land transport are all supported.",
  },
  {
    question: "How quickly can I get a quote?",
    answer: "Most quotes are ready in under 5 minutes. Enter your cargo value, route, and transport mode, and our system generates a bindable price instantly.",
  },
  {
    question: "What perils are covered?",
    answer: "All Risk covers fire, theft, collision, sinking, derailment, natural disasters, and more. Named-peril options are also available for lower premiums.",
  },
  {
    question: "How do I file a claim?",
    answer: "File online, by email, or phone 24/7. Submit documentation of the loss and our team will guide you through the rest. Most claims settle within 48 hours.",
  },
  {
    question: "Is there a minimum shipment value?",
    answer: "We insure shipments from $1,000 up to $10 million. For higher values, contact our underwriting team directly.",
  },
  {
    question: "Do you offer annual policies?",
    answer: "Yes. Frequent shippers can get an annual open cargo policy covering multiple shipments. Usually cheaper than insuring each shipment separately.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Common questions about our cargo insurance. Need more help? Contact us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <CaretDown
                    size={18}
                    weight="bold"
                    className={`text-[#0024ff] flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}