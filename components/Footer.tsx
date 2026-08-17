"use client";

import { EnvelopeSimple, FacebookLogo, XLogo, LinkedinLogo, Phone, MapPin } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090b14] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/">
              <Image
                src="/kovasure.svg"
                alt="Kovasure"
                width={140}
                height={38}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional cargo insurance for global trade. Fast quotes, comprehensive coverage, rapid claims.
            </p>
            <div className="flex gap-2">
              {[FacebookLogo, XLogo, LinkedinLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#0024ff] flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/10"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider border-b border-white/10 pb-3">Coverage</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/services#ocean" className="hover:text-white transition-colors">Ocean Freight Insurance</a></li>
              <li><a href="/services#air" className="hover:text-white transition-colors">Air Cargo Insurance</a></li>
              <li><a href="/services#land" className="hover:text-white transition-colors">Land Transport Coverage</a></li>
              <li><a href="/services#warehouse" className="hover:text-white transition-colors">Warehousing Protection</a></li>
              <li><a href="/services#multimodal" className="hover:text-white transition-colors">Multimodal Coverage</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider border-b border-white/10 pb-3">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Kovasure</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Industry Insights</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider border-b border-white/10 pb-3">Get in Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone size={18} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">24/7 Support</div>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <EnvelopeSimple size={18} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a href="mailto:info@kovasure.com" className="hover:text-white transition-colors">info@kovasure.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">Office</div>
                  <span>Global Insurance Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Kovasure. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/about#compliance" className="hover:text-white transition-colors">Regulatory Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}