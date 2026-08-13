"use client";

import { EnvelopeSimple, FacebookLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090b14] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/">
              <Image
                src="/kovasure.svg"
                alt="Kovasure"
                width={130}
                height={36}
                className="h-9 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cargo insurance for global trade. Quick quotes, solid cover, fast claims.
            </p>
            <div className="flex gap-3">
              {[FacebookLogo, XLogo, LinkedinLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0024ff] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="/services#ocean" className="hover:text-white transition-colors">Ocean Freight</a></li>
              <li><a href="/services#air" className="hover:text-white transition-colors">Air Freight</a></li>
              <li><a href="/services#land" className="hover:text-white transition-colors">Land Transport</a></li>
              <li><a href="/services#warehouse" className="hover:text-white transition-colors">Warehousing</a></li>
              <li><a href="/services#multimodal" className="hover:text-white transition-colors">Multimodal</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/about#story" className="hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">
              Trade updates and insurance insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:border-[#0024ff] focus:outline-none"
              />
              <button
                type="button"
                className="px-3 py-2.5 bg-[#0024ff] text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <EnvelopeSimple size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>© {currentYear} Kovasure. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}