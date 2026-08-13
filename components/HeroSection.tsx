"use client";

import { ShieldCheck, ArrowRight, Check } from "@phosphor-icons/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-50 via-[#0024ff]/5 to-white dark:from-[#030712] dark:via-[#0024ff]/5 dark:to-[#090b14]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0024ff 1.5px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              Protect Your Cargo <br />
              <span className="inline-block bg-gradient-to-r from-[#0024ff] via-blue-600 to-[#ffb41d] bg-clip-text text-transparent">Anywhere, Anytime</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              Comprehensive cargo insurance coverage built for international trade. Get rapid claims support, flexible limits, and global protection for every single shipment.
            </p>

            {/* Features List - Clean corporate design, no badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {[
                { title: "Instant Policies", desc: "Digital certificates in minutes" },
                { title: "Global Scope", desc: "All modes of transport covered" },
                { title: "24/7 Support", desc: "Dedicated global claims desk" },
              ].map((feature, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-sm font-bold text-gray-900 dark:text-white border-l-2 border-[#0024ff] pl-3">
                    {feature.title}
                  </div>
                  <div className="text-xs text-gray-500 pl-3 leading-relaxed">{feature.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0024ff] to-blue-700 text-white rounded-xl hover:shadow-[0_8px_25px_rgba(0,36,255,0.4)] transition-all font-semibold hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Get Protected Now
                <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="#coverage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white rounded-xl hover:border-[#0024ff] transition-all font-semibold hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Explore Coverage
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100 dark:border-white/5">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0024ff] dark:text-blue-500">$500M+</div>
                <div className="text-xs sm:text-sm text-gray-500">Cargo Protected</div>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0024ff] dark:text-blue-500">10,000+</div>
                <div className="text-xs sm:text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0024ff] dark:text-blue-500">99.8%</div>
                <div className="text-xs sm:text-sm text-gray-500">Claim Payout Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Multimodal Cargo Visual Grid */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto h-[480px]">
              {/* Main Background Image - Cargo Vessel */}
              <div className="absolute top-0 left-0 w-[80%] h-[75%] rounded-xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl z-10">
                <img 
                  src="/ship.jpeg" 
                  alt="Cargo ship at sea" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Foreground Image - Port Logistics */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl z-20">
                <img 
                  src="/portview.jpg" 
                  alt="Port and container terminal" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative accent element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0024ff]/10 to-[#ffb41d]/10 rounded-xl blur-3xl -z-10 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
