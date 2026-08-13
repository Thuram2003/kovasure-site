"use client";

import { FileText, CreditCard, ShieldCheck, CheckCircle } from "@phosphor-icons/react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Request a Quote",
    description: "Enter your shipment details. Our desk processes it instantly.",
    image: "/cargoman1.avif",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Choose Coverage",
    description: "Pick the level that fits your cargo and budget.",
    image: "/meeting.jpg",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Secure Policy",
    description: "Pay and validate digitally. Get your certificate in minutes.",
    image: "/shakehands.jpg",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Ship Safely",
    description: "Your cargo is covered. File claims 24/7 if needed.",
    image: "/shipment.jpg",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#0024ff] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-[#ffb41d]">Works</span>
          </h2>
          <p className="text-blue-100">
            Four steps from quote to covered shipment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 overflow-hidden flex flex-col"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-[#0024ff]/10 rounded-lg flex items-center justify-center text-[#0024ff]">
                      <Icon size={20} weight="bold" />
                    </div>
                    <span className="text-lg font-bold text-gray-200 dark:text-gray-700">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
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