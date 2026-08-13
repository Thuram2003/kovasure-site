"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-20 bg-slate-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Protect Your Cargo <br />
              <span className="text-[#0024ff]">Anywhere, Anytime</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Cargo insurance for international trade. Quick quotes, global cover, and claims that get paid.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              {[
                { title: "Instant Policies", desc: "Certificates in minutes" },
                { title: "Global Scope", desc: "All transport modes" },
                { title: "24/7 Support", desc: "Claims desk always on" },
              ].map((feature, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white border-l-2 border-[#0024ff] pl-3">
                    {feature.title}
                  </div>
                  <div className="text-xs text-gray-500 pl-3">{feature.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0024ff] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Protected Now
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white rounded-lg font-semibold hover:border-[#0024ff] transition-colors"
              >
                Explore Coverage
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-white/10">
              <div>
                <div className="text-2xl font-bold text-[#0024ff]">5k+</div>
                <div className="text-xs text-gray-500">Shipments Covered</div>
              </div>
              <div className="h-8 w-px bg-gray-200 dark:bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-[#0024ff]">100+</div>
                <div className="text-xs text-gray-500">Clients</div>
              </div>
              <div className="h-8 w-px bg-gray-200 dark:bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-[#0024ff]">99.8%</div>
                <div className="text-xs text-gray-500">Claims Paid</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cargo.jpg"
                alt="Cargo ship at sea"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}