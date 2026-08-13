"use client";

import { CheckCircle } from "@phosphor-icons/react";

const features = [
  "Real-time shipment tracking",
  "Instant claim filing with document upload",
  "Direct chat with underwriters",
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-16 bg-[#0024ff] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src="/payshipment.jpg"
              alt="Cargo shipment"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-5">
            <span className="text-xs font-semibold uppercase text-[#ffb41d]">
              Mobile App
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Manage Your Cargo Insurance On the Go
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Track shipments, request policies, and file claims from anywhere.
            </p>

            <ul className="space-y-2.5">
              {features.map((feat, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle size={18} weight="bold" className="text-[#ffb41d] shrink-0" />
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-black text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-gray-900 transition-colors"
              >
                <img src="/Apple_logo_black.svg" alt="" className="w-5 h-6 invert" />
                <div className="leading-tight">
                  <span className="text-[10px] text-gray-400 block">Download on the</span>
                  <span className="font-bold">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-black text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-gray-900 transition-colors"
              >
                <img src="/Google_Play_2022_icon.svg.webp" alt="" className="w-6 h-6" />
                <div className="leading-tight">
                  <span className="text-[10px] text-gray-400 block">Get it on</span>
                  <span className="font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}