"use client";

import { Boat, Airplane, Truck, Package, Globe, ShieldCheck } from "@phosphor-icons/react";

const coverageTypes = [
  {
    icon: Boat,
    title: "Ocean Freight",
    description: "Full coverage for cargo shipped via sea, including FCL and LCL shipments.",
    color: "blue",
    image: "/ship.jpeg",
  },
  {
    icon: Airplane,
    title: "Air Freight",
    description: "Comprehensive protection for time-sensitive air cargo worldwide.",
    color: "gold",
    image: "/portview.jpg",
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Coverage for overland cargo movement including trucks and rail.",
    color: "blue",
    image: "/trucks.jpg",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Protection during storage and handling at warehouses and facilities.",
    color: "gold",
    image: "/shipment.jpg",
  },
  {
    icon: Globe,
    title: "Multimodal",
    description: "End-to-end coverage for shipments using multiple transport modes.",
    color: "blue",
    image: "/deliveryboy.jpg",
  },
  {
    icon: ShieldCheck,
    title: "All Risk",
    description: "Maximum protection against all perils except those specifically excluded.",
    color: "gold",
    image: "/meeting.jpg",
  },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Comprehensive Coverage for
            <span className="inline-block bg-gradient-to-r from-[#0024ff] to-[#ffb41d] bg-clip-text text-transparent ml-2">Every Shipment</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            From origin to destination, we protect your cargo through every stage of the journey.
          </p>
        </div>

        {/* Coverage Grid with premium styled cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon;
            const isBlue = coverage.color === "blue";
            
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-xl shadow-soft hover:shadow-[0_20px_50px_rgba(0,36,255,0.08)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Visual Top Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={coverage.image} 
                    alt={coverage.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
                      isBlue 
                        ? 'bg-[#0024ff]/10 text-[#0024ff]' 
                        : 'bg-[#ffb41d]/15 text-[#ffb41d]'
                    }`}>
                      <Icon size={24} weight="bold" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {coverage.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base flex-grow">
                    {coverage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0024ff] to-blue-700 text-white rounded-xl hover:shadow-[0_8px_25px_rgba(0,36,255,0.35)] transition-all font-semibold hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Get Custom Coverage Quote
          </a>
        </div>
      </div>
    </section>
  );
}
