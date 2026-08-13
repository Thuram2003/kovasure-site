"use client";

import { ArrowRight, Check } from "@phosphor-icons/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#030712]">
      {/* Right half background */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50 dark:bg-gray-900/30" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white leading-[1.1] mb-6">
              Cargo Insurance <br />
              <span className="text-[#0024ff]">That Actually Works</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Instant quotes, policies bound in minutes, and claims settled in 48 hours. Cover for sea, air, and land worldwide.
            </p>

            <ul className="space-y-2.5 mb-8">
              {[
                "Instant digital policy certificates",
                "48-hour claim settlements",
                "All transport modes covered",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                  <Check size={16} weight="bold" className="text-[#0024ff] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0024ff] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get a Quote
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white rounded-lg font-semibold hover:border-[#0024ff] transition-colors"
              >
                See Coverage
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 dark:border-white/10 pt-6">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5k+</div>
                <div className="text-xs text-gray-500 mt-0.5">Shipments covered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                <div className="text-xs text-gray-500 mt-0.5">Active clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">99.8%</div>
                <div className="text-xs text-gray-500 mt-0.5">Claims paid</div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[420px] md:h-[500px] lg:h-[540px]">
            {/* Blue accent shape */}
            <div className="absolute top-8 right-0 w-[85%] h-[80%] bg-[#0024ff]/10 rounded-2xl" />

            {/* Main image */}
            <div className="absolute top-0 left-0 w-[82%] h-[72%] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/cargo.jpg"
                alt="Cargo vessel at sea"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlapping image */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[50%] rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-[#030712]">
              <Image
                src="/cargoman.jpg"
                alt="Container port operations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}