"use client";

import { FileText, CreditCard, ShieldCheck, CheckCircle } from "@phosphor-icons/react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Request a Quote",
    description: "Provide shipment details on our contact page. Our automated desk processes your request instantly.",
    color: "blue",
    image: "/mobileMockup.png",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Choose Coverage",
    description: "Select the coverage level that fits your needs and budget. Highly flexible limits & risk parameters.",
    color: "gold",
    image: "/meeting.jpg",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Secure Policy",
    description: "Complete payment & validation digitally. Receive your official insurance certificate in minutes.",
    color: "blue",
    image: "/handshake.jpg",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Ship Safely",
    description: "Your cargo is protected. File claims easily 24/7 if needed with our global support team.",
    color: "gold",
    image: "/shipment.jpg",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-blue-950 via-[#0024ff] to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.1) 1.5px, transparent 1.5px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            How It <span className="text-[#ffb41d]">Works</span>
          </h2>
          <p className="text-lg text-blue-100">
            Get your cargo protected in four simple, digital steps. Transparent and secure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isBlue = step.color === "blue";

            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on last item and on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-white/20 -z-10" />
                )}

                <div className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-[0_20px_50px_rgba(0,36,255,0.15)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Step Image - High Visibility */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
                        isBlue 
                          ? 'bg-[#0024ff]/10 text-[#0024ff]' 
                          : 'bg-[#ffb41d]/15 text-[#ffb41d]'
                      }`}>
                        <Icon size={24} weight="bold" />
                      </div>
                      <span className="text-2xl font-black text-gray-200 dark:text-gray-800 font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ffb41d]" />
            <h3 className="text-2xl font-bold text-white">
              Ready to protect your shipments?
            </h3>
            <p className="text-blue-100 text-sm max-w-md">
              Secure reliable protection with Kovasure. Drop us a message and our team will prepare your onboarding instantly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ffb41d] to-amber-500 text-gray-950 rounded-full hover:shadow-[0_8px_25px_rgba(255,180,29,0.4)] transition-all font-semibold hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
