"use client";

import { Lightning, CurrencyDollar, Globe, Lock, Headset, Clock } from "@phosphor-icons/react";
import Image from "next/image";

const benefits = [
  {
    icon: Lightning,
    title: "Fast Quote Processing",
    description: "Clear pricing within minutes. No waiting days for a simple quote.",
  },
  {
    icon: CurrencyDollar,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. Know your costs upfront.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Protection across 150+ countries with local claims adjusters.",
  },
  {
    icon: Lock,
    title: "Financial Strength",
    description: "A+ rated underwriters. Your claims backed by solid capital.",
  },
  {
    icon: Headset,
    title: "Direct Support",
    description: "Account managers and claims handlers who actually respond.",
  },
  {
    icon: Clock,
    title: "Rapid Claims",
    description: "Most valid claims settled within 48 hours of documentation.",
  },
];

export default function BenefitsSection() {
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
            Why Logistics Companies<br />Choose Kovasure
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Practical protection designed for real cargo operations.
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
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}