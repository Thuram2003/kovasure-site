"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Boat,
  Airplane,
  Truck,
  Warehouse,
  Package,
  ShieldCheck,
  ArrowRight,
  Check,
  Files,
  Clock,
  Shield,
  Coins,
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
  NumberCircleFour,
  Warning,
  X,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Boat,
    title: "Ocean Freight Insurance",
    description: "Cover for goods shipped by sea. Protects against loss, damage, theft, and weather events.",
    features: [
      "All-risk and named-peril options",
      "Piracy and vessel accident cover",
      "Container and bulk cargo",
      "Claims support at major ports",
    ],
    image: "/image1.jpg",
    id: "ocean"
  },
  {
    icon: Airplane,
    title: "Air Freight Insurance",
    description: "Fast cover for high-value air cargo with quick claims turnaround.",
    features: [
      "Express cargo protection",
      "High-value goods cover",
      "Aviation risk assessment",
      "24/7 claims line",
    ],
    image: "/image3.jpg",
    id: "air"
  },
  {
    icon: Truck,
    title: "Land Transport Insurance",
    description: "Road and rail cover against accidents, theft, and delays.",
    features: [
      "Multi-modal cover",
      "Truck and rail protection",
      "Delay compensation",
      "Cross-border included",
    ],
    image: "/trucks.jpg",
    id: "land"
  },
  {
    icon: Warehouse,
    title: "Warehousing Insurance",
    description: "Cover for goods in storage against fire, theft, and damage.",
    features: [
      "Fire and natural disaster cover",
      "Theft and vandalism protection",
      "Cold storage options",
      "Inventory support",
    ],
    image: "/image2.jpg",
    id: "warehouse"
  },
  {
    icon: Package,
    title: "Multimodal Insurance",
    description: "One policy from origin to destination across sea, air, and land.",
    features: [
      "Door-to-door cover",
      "Integrated transport protection",
      "Single claims process",
      "Global network",
    ],
    image: "/multimodal.jpg",
    id: "multimodal"
  },
  {
    icon: ShieldCheck,
    title: "All-Risk Cargo Insurance",
    description: "Broad cover against almost all physical loss or damage risks.",
    features: [
      "Comprehensive risk cover",
      "Minimal exclusions",
      "Premium goods protection",
      "Risk consultants available",
    ],
    image: "/risk.jpg",
    id: "allrisk"
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Maximum Protection",
    description: "Policies that cover your freight from loading to delivery.",
  },
  {
    icon: Coins,
    title: "Competitive Rates",
    description: "Premiums tailored to your routes and cargo types.",
  },
  {
    icon: Clock,
    title: "48-Hour Claims",
    description: "Digital claims support so your business keeps moving.",
  },
  {
    icon: Files,
    title: "Instant Policies",
    description: "Get quotes and bind cover in under 5 minutes.",
  },
];

const steps = [
  {
    num: NumberCircleOne,
    title: "Get a Quote",
    desc: "Enter cargo value, route, and mode. Receive a bindable quote in minutes.",
  },
  {
    num: NumberCircleTwo,
    title: "Bind Your Policy",
    desc: "Review terms, pay premium, and receive your certificate of insurance instantly.",
  },
  {
    num: NumberCircleThree,
    title: "Ship with Confidence",
    desc: "Your goods are covered from pickup to final delivery, anywhere in the world.",
  },
  {
    num: NumberCircleFour,
    title: "Claim if Needed",
    desc: "File online 24/7. Most claims settled within 48 hours of documentation.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative bg-slate-50 dark:bg-gray-950 py-20 md:py-28 border-b border-gray-100 dark:border-white/5">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cargo Insurance <br />
                  <span className="text-[#0024ff]">Built for Global Trade</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                  From ocean freight to warehousing, we protect your supply chain so you can trade with confidence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="#services">
                    Explore Services
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Speak with an Expert
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/shipment.jpg"
                    alt="Cargo ship at port"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Insurance Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Cover for every cargo type and transport method.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    id={service.id}
                    key={service.id}
                    className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 overflow-hidden group flex flex-col"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-lg flex items-center justify-center text-[#0024ff]">
                        <Icon size={20} weight="bold" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={14} weight="bold" className="text-[#0024ff] mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#0024ff]/5 hover:bg-[#0024ff] text-[#0024ff] hover:text-white rounded-lg font-semibold text-sm transition-colors"
                      >
                        Get Quote <ArrowRight size={14} weight="bold" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative py-24 px-6 md:px-8 bg-[#0024ff] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Shippers Choose Kovasure
                </h2>
                <p className="text-blue-100 text-lg">
                  We combine solid underwriting with digital tools and global reach to keep your cargo covered.
                </p>
                <Button variant="secondary" size="lg" href="/contact">
                  Get Protected Now
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 border border-white/15 p-6 rounded-lg space-y-3"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#ffb41d]">
                        <Icon size={22} weight="bold" />
                      </div>
                      <h3 className="text-lg font-bold">{benefit.title}</h3>
                      <p className="text-sm text-blue-100">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 md:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How Cargo Insurance Works
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Four steps from quote to covered shipment. No paperwork, no delays.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Num = step.num;
                return (
                  <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-white/5 space-y-3">
                    <Num size={36} weight="bold" className="text-[#0024ff]" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coverage Gap Comparison */}
        <section className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Cargo Insurance vs. Carrier Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Most shippers assume their carrier covers everything. They do not.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} weight="bold" className="text-[#0024ff]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cargo Insurance</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Covers full declared value of goods",
                    "Protects against theft, fire, and Acts of God",
                    "Covers damage from improper handling",
                    "Pays even if carrier is not at fault",
                    "Worldwide coverage, any transport mode",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={16} weight="bold" className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Warning size={24} weight="bold" className="text-amber-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Carrier Liability Only</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Limited to $500 per package (COGSA)",
                    "Excludes Acts of God and inherent vice",
                    "Carrier must be proven negligent",
                    "No cover for concealed damage",
                    "Varies wildly by jurisdiction",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <X size={16} weight="bold" className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}