"use client";

import { Boat, Airplane, Truck, Package, Globe, ShieldCheck } from "@phosphor-icons/react";

const coverageTypes = [
  {
    icon: Boat,
    title: "Ocean Freight",
    description: "Cover for FCL and LCL shipments by sea.",
    image: "/image1.jpg",
  },
  {
    icon: Airplane,
    title: "Air Freight",
    description: "Protection for time-sensitive air cargo.",
    image: "/image3.jpg",
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Road and rail cargo cover.",
    image: "/trucks.jpg",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Cover for goods in storage and handling.",
    image: "/image2.jpg",
  },
  {
    icon: Globe,
    title: "Multimodal",
    description: "End-to-end cover across multiple transport modes.",
    image: "/multimodal.jpg",
  },
  {
    icon: ShieldCheck,
    title: "All Risk",
    description: "Broad protection against all perils except named exclusions.",
    image: "/risk.jpg",
  },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-20 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coverage for Every Shipment
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            From origin to destination, we protect your cargo at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageTypes.map((coverage, index) => {
            const Icon = coverage.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-lg overflow-hidden flex flex-col"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={coverage.image}
                    alt={coverage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#0024ff]/10 rounded-lg flex items-center justify-center text-[#0024ff]">
                      <Icon size={20} weight="bold" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {coverage.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {coverage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}