"use client";

import { Lightning, CurrencyDollar, Globe, Lock, Headset, Clock } from "@phosphor-icons/react";

const benefits = [
  {
    icon: Lightning,
    title: "Instant Quotes",
    description: "Get a price in minutes, not days.",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Rates",
    description: "No hidden fees. Transparent pricing from the start.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Protection across 150+ countries with local claims support.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "A+ rated underwriters. Your claims are backed by solid capital.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Claims and support available around the clock.",
  },
  {
    icon: Clock,
    title: "Fast Claims",
    description: "Most valid claims settled within 48 hours of documentation.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="text-[#0024ff]">Kovasure</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Cargo insurance that actually works for shippers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0024ff]/10 rounded-lg flex items-center justify-center text-[#0024ff] flex-shrink-0">
                  <Icon size={20} weight="bold" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}