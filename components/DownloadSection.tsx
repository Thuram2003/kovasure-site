"use client";

import { CheckCircle } from "@phosphor-icons/react";

const features = [
  "Real-time shipment tracking",
  "Manage cargo insurance policies",
  "File claims with documents in minutes",
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-16 md:py-20 bg-[#0024ff] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
            <img
              src="/meeting.avif"
              alt="Cargo shipment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Your Cargo. Your Shipments. Your Control.
              </h2>

              <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl">
                Stay connected to your shipments wherever you are. Track
                cargo, manage insurance, and handle claims—all from your phone.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle
                    size={19}
                    weight="fill"
                    className="text-[#ffb41d] shrink-0"
                  />
                  <span className="text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2.5 bg-black text-white rounded-lg px-4 py-2.5 hover:bg-gray-900 transition-colors"
              >
                <img
                  src="/Apple_logo_black.svg"
                  alt=""
                  className="w-5 h-6 invert"
                />

                <div className="leading-tight">
                  <span className="text-[10px] text-gray-400 block">
                    Download on the
                  </span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2.5 bg-black text-white rounded-lg px-4 py-2.5 hover:bg-gray-900 transition-colors"
              >
                <img
                  src="/Google_Play_2022_icon.svg.webp"
                  alt=""
                  className="w-6 h-6"
                />

                <div className="leading-tight">
                  <span className="text-[10px] text-gray-400 block">
                    Get it on
                  </span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}