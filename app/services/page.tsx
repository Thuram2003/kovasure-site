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
} from "@phosphor-icons/react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Boat size={24} weight="bold" />,
      title: "Ocean Freight Insurance",
      description: "Comprehensive coverage for goods transported via sea routes. Protection against total and partial losses, damage, theft, and natural perils.",
      features: [
        "All-risk coverage option",
        "Protection against piracy & vessel accidents",
        "Coverage for containerized & bulk cargo",
        "Claims assistance at major ports worldwide",
      ],
      image: "/ship.jpeg",
      id: "ocean"
    },
    {
      icon: <Airplane size={24} weight="bold" />,
      title: "Air Freight Insurance",
      description: "Fast-track insurance solutions for high-value air cargo shipments with rapid claims processing and global coverage.",
      features: [
        "Express cargo protection",
        "High-value goods coverage",
        "Aviation-specific risk assessment",
        "24/7 claims support",
      ],
      image: "/portview.jpg",
      id: "air"
    },
    {
      icon: <Truck size={24} weight="bold" />,
      title: "Land Transportation Insurance",
      description: "Secure your cargo during road and rail transport with comprehensive coverage against accidents, theft, and transit delays.",
      features: [
        "Multi-modal transportation coverage",
        "Truck and rail freight protection",
        "Transit delay compensation",
        "Cross-border coverage",
      ],
      image: "/trucks.jpg",
      id: "land"
    },
    {
      icon: <Warehouse size={24} weight="bold" />,
      title: "Warehousing & Storage Insurance",
      description: "Protection for goods stored in warehouses, distribution centers, and temporary storage facilities against fire, theft, and damage.",
      features: [
        "Fire and natural disaster coverage",
        "Theft and vandalism protection",
        "Temperature-controlled storage coverage",
        "Inventory management support",
      ],
      image: "/image2.jpg",
      id: "warehouse"
    },
    {
      icon: <Package size={24} weight="bold" />,
      title: "Multimodal Insurance",
      description: "Seamless coverage across multiple transportation modes - from origin to final destination with a single policy.",
      features: [
        "Door-to-door coverage",
        "Integrated sea, air, and land protection",
        "Simplified claims process",
        "Global network coverage",
      ],
      image: "/image1.jpg",
      id: "multimodal"
    },
    {
      icon: <ShieldCheck size={24} weight="bold" />,
      title: "All-Risk Cargo Insurance",
      description: "Maximum protection with the broadest coverage available, protecting against nearly all physical loss or damage risks.",
      features: [
        "Comprehensive risk coverage",
        "Minimal exclusions",
        "Premium goods protection",
        "Dedicated risk consultants",
      ],
      image: "/image3.jpg",
      id: "allrisk"
    },
  ];

  const benefits = [
    {
      icon: <Shield size={28} weight="bold" className="text-[#ffb41d]" />,
      title: "Maximum Protection",
      description: "Comprehensive policies that safeguard your freight from loading to final delivery.",
    },
    {
      icon: <Coins size={28} weight="bold" className="text-[#ffb41d]" />,
      title: "Competitive Rates",
      description: "Custom premium rates tailored to your specific logistics routes and cargo types.",
    },
    {
      icon: <Clock size={28} weight="bold" className="text-[#ffb41d]" />,
      title: "48-Hour Claims Processing",
      description: "Fast-track digital claims support to ensure your business operations never halt.",
    },
    {
      icon: <Files size={28} weight="bold" className="text-[#ffb41d]" />,
      title: "Instant Digital Policies",
      description: "Generate quotes and execute binding cargo insurance policies in under 5 minutes.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white antialiased">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Premium Light/Split Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 md:py-32 overflow-hidden border-b border-gray-100 dark:border-white/5">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
          </div>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0024ff]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
                  Cargo Insurance <br />
                  <span className="text-[#0024ff] dark:text-blue-500">Built for Global Trade</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  From ocean freight to warehousing, we provide secure, dependable insurance solutions that protect your supply chain and business viability globally.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button variant="primary" size="lg" href="#services">
                    Explore Services
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Speak with an Expert
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5 relative">
                <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/shipment.jpg"
                    alt="Global Cargo Shipping Logistics"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid with Images */}
        <section id="services" className="py-24 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                Our Insurance Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Specialized coverage designed for every type of cargo and transportation method.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  id={service.id}
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#0024ff]/20 transition-all duration-300 overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,36,255,0.06)] hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
                    
                    {/* Floating Glassmorphic Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl flex items-center justify-center text-[#0024ff] dark:text-blue-500 shadow-lg border border-white/20">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="space-y-3 pt-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <Check size={16} weight="bold" className="text-[#0024ff] dark:text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#0024ff]/5 hover:bg-[#0024ff] text-[#0024ff] hover:text-white rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer"
                      >
                        Get Quote for This Service <ArrowRight size={16} weight="bold" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Deep Blue Body Section (Benefits) */}
        <section className="relative py-28 px-6 md:px-8 bg-gradient-to-br from-[#0024ff] to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
          </div>
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#ffb41d]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
                  Why Leading Shippers Choose Kovasure
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  We merge robust underwriting, advanced digital infrastructure, and global coordination to offer cargo security that handles modern supply chain friction.
                </p>
                <div className="pt-4">
                  <Button variant="secondary" size="lg" href="/contact">
                    Get Protected Now
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md border border-white/15 p-8 rounded-xl space-y-4 hover:bg-white/15 transition-colors duration-300">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 md:px-16 bg-gray-950 text-white relative overflow-hidden rounded-xl max-w-7xl mx-auto my-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/5">
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid.svg')] bg-repeat" />
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0024ff]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Ready to Secure Your Operations?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Get an instant online quote or schedule a consultation with our experienced risk management consultants. We're here to tailor a coverage plan that meets your exact logistics and commercial needs.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Check size={18} weight="bold" className="text-[#ffb41d]" />
                  <span className="text-sm font-medium text-gray-200">No obligation, transparent consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={18} weight="bold" className="text-[#ffb41d]" />
                  <span className="text-sm font-medium text-gray-200">Binding policies delivered in under 5 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={18} weight="bold" className="text-[#ffb41d]" />
                  <span className="text-sm font-medium text-gray-200">A+ rated global underwriting partners</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="secondary" size="lg" href="/contact">
                  Request a Quote
                </Button>
                <Button variant="outline" size="lg" href="/about" className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white hover:text-blue-950">
                  Learn More About Us
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-5 relative">
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/handshake.jpg"
                  alt="Business meeting handshake"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/45 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
