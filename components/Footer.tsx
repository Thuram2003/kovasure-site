"use client";

import { EnvelopeSimple, FacebookLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090b14] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-[#0024ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-[#ffb41d]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="inline-block transition-transform hover:scale-102">
              <Image
                src="/kovasure.svg"
                alt="Kovasure Logo"
                width={130}
                height={36}
                className="h-9 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Protecting global trade routes with premium cargo insurance solutions. Tailored protection, effortless claims, and absolute peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0024ff] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <FacebookLogo size={20} weight="fill" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0024ff] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <TwitterLogo size={20} weight="fill" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0024ff] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <LinkedinLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Our Services</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li><a href="/services#ocean" className="hover:text-[#ffb41d] transition-colors">Ocean Freight Insurance</a></li>
              <li><a href="/services#air" className="hover:text-[#ffb41d] transition-colors">Air Freight Insurance</a></li>
              <li><a href="/services#land" className="hover:text-[#ffb41d] transition-colors">Land Transport Insurance</a></li>
              <li><a href="/services#warehouse" className="hover:text-[#ffb41d] transition-colors">Warehousing Insurance</a></li>
              <li><a href="/services#multimodal" className="hover:text-[#ffb41d] transition-colors">Multimodal Cargo Insurance</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Company</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-[#ffb41d] transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-[#ffb41d] transition-colors">Blog & News</a></li>
              <li><a href="/contact" className="hover:text-[#ffb41d] transition-colors">Contact Support</a></li>
              <li><a href="/about#story" className="hover:text-[#ffb41d] transition-colors">Our History</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Stay informed on global transit risk management & insurance trends.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-500 focus:border-[#0024ff] focus:outline-none transition-colors"
              />
              <button
                type="button"
                className="p-3 bg-[#0024ff] text-white hover:bg-blue-600 rounded-full hover:shadow-[0_4px_14px_0_rgba(0,36,255,0.4)] transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                <EnvelopeSimple size={20} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Kovasure. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="/privacy" className="hover:text-[#ffb41d] transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#ffb41d] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#ffb41d] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
