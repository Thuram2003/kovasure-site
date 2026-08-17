"use client";

import { Boat, Airplane, Truck, Package, Globe, ShieldCheck } from "@phosphor-icons/react";
import Image from "next/image";

const coverageTypes = [
  {
    icon: Boat,
    title: "Ocean Freight",
    description: "FCL and LCL shipments by sea. Coverage includes piracy, weather damage, and total loss.",
    image: "/cargo.jpg",
  },
  {
    icon: Airplane,
    title: "Air Freight",
    description: "High-value and time-sensitive air cargo. Door-to-door protection with customs coverage.",
    image: "/image3.jpg",
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Road and rail freight coverage. Protection against accident, theft, and transit delays.",
    image: "/trucks.jpg",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Goods in storage at ports and facilities. Fire, theft, and natural disaster protection.",
    image: "/image2.jpg",
  },
  {
    icon: Globe,
    title: "Multimodal",
    description: "Single policy for combined transport modes. Origin to destination across sea, air, and land.",
    image: "/multimodal.jpg",
  },
  {
    icon: ShieldCheck,
    title: "All Risk Coverage",
    description: "Comprehensive protection against physical loss or damage from external causes.",
    image: "/portview.jpg",
  },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-20 bg-white dark:bg-[#030712] border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Complete Coverage for<br />Every Transport Mode
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            From origin to final destination, your cargo is protected at every stage of the journey.
          </p>
        </div>

        {/* Added gap between boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={coverage.image}
                    alt={coverage.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-[#0024ff] flex items-center justify-center text-white">
                    <Icon size={24} weight="bold" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white dark:bg-gray-900">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {coverage.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {coverage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0024ff] text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            View Detailed Coverage
          </a>
        </div>
      </div>
    </section>
  );
}