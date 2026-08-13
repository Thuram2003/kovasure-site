"use client";

import { Lightning, CurrencyDollar, Globe, Lock, Headset, Clock } from "@phosphor-icons/react";

const benefits = [
  {
    icon: Lightning,
    title: "Instant Quotes",
    description: "Get accurate quotes in minutes, not days. No waiting, no hassle.",
    image: "/mobileMockup.png",
  },
  {
    icon: CurrencyDollar,
    title: "Competitive Rates",
    description: "Best-in-class pricing with no hidden fees. Save up to 30% compared to traditional insurers.",
    image: "/handshake.jpg",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Worldwide protection across 150+ countries with local claims support.",
    image: "/portview.jpg",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "A+ rated insurance partners. Your claims are always backed by trusted underwriters.",
    image: "/meeting.jpg",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Round-the-clock customer support and claims assistance in multiple languages.",
    image: "/boss.jpeg",
  },
  {
    icon: Clock,
    title: "Fast Claims",
    description: "Average claim settlement in 48 hours. Quick resolution when you need it most.",
    image: "/shipment.jpg",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-[#0024ff] to-[#ffb41d] bg-clip-text text-transparent">Kovasure</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're redefining cargo insurance with technology, transparency, and exceptional service.
          </p>
        </div>

        {/* Benefits Grid - Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Benefits List */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0024ff]/5 text-[#0024ff]">
                    <Icon size={24} weight="bold" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column - Large Premium Team Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5] border border-gray-100 dark:border-white/5">
              <img 
                src="/team.jpeg" 
                alt="Kovasure support team" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14]/40 via-transparent to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0024ff]/10 to-[#ffb41d]/10 rounded-xl blur-3xl -z-10 opacity-55" />
          </div>
        </div>

        {/* Stats Section with CSS counter */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 counter-reset-stats">
          <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/60 border border-gray-100 dark:border-white/5 shadow-soft rounded-xl hover:shadow-[0_12px_30px_rgba(0,36,255,0.05)] transition-shadow duration-300 counter-item-stat">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0024ff] to-blue-600 bg-clip-text text-transparent mb-2">99.8%</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Claim Approval</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/60 border border-gray-100 dark:border-white/5 shadow-soft rounded-xl hover:shadow-[0_12px_30px_rgba(255,180,29,0.05)] transition-shadow duration-300 counter-item-stat">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0024ff] to-blue-600 bg-clip-text text-transparent mb-2">48hrs</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Avg Settlement</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/60 border border-gray-100 dark:border-white/5 shadow-soft rounded-xl hover:shadow-[0_12px_30px_rgba(0,36,255,0.05)] transition-shadow duration-300 counter-item-stat">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0024ff] to-blue-600 bg-clip-text text-transparent mb-2">$10M</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Max Coverage</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/60 border border-gray-100 dark:border-white/5 shadow-soft rounded-xl hover:shadow-[0_12px_30px_rgba(255,180,29,0.05)] transition-shadow duration-300 counter-item-stat">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0024ff] to-blue-600 bg-clip-text text-transparent mb-2">150+</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Countries Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
