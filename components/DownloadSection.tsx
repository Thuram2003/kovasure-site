"use client";

import { CheckCircle } from "@phosphor-icons/react";
import Image from "next/image";

const features = [
  "Real-time access to policy certificates and claims status",
  "Manage all your cargo insurance in one secure portal",
  "File claims with photo documentation in minutes",
  "Instant notifications on policy updates and claim progress",
];

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-[#0024ff]/10 border border-[#0024ff]/20 text-[#0024ff] text-sm font-semibold mb-4">
                DIGITAL PLATFORM
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Manage Your Coverage<br />Anytime, Anywhere
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Complete control over your cargo insurance. Track shipments, access documents, and handle claims from desktop or mobile.
              </p>
            </div>

            <ul className="space-y-4 border-l-4 border-[#0024ff] pl-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    weight="fill"
                    className="text-[#0024ff] shrink-0 mt-0.5"
                  />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* App buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                <img
                  src="/Apple_logo_black.svg"
                  alt=""
                  className="w-6 h-7 invert"
                />
                <div className="leading-tight">
                  <span className="text-xs text-gray-300 block">
                    Download on the
                  </span>
                  <span className="text-base font-bold">App Store</span>
                </div>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                <img
                  src="/Google_Play_2022_icon.svg.webp"
                  alt=""
                  className="w-7 h-7"
                />
                <div className="leading-tight">
                  <span className="text-xs text-gray-300 block">
                    Get it on
                  </span>
                  <span className="text-base font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/man-meeting.jpg"
                  alt="Cargo insurance management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/personOffice.jpg"
                  alt="Insurance professional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/meeting.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}