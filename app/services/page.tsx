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
  User,
  GraduationCap,
  ChartBar,
  Globe,
  DeviceMobile,
  FileText,
  MagnifyingGlass,
  Users,
  Handshake,
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
    id: "ocean",
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
    id: "air",
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
    id: "land",
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
    id: "warehouse",
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
    id: "multimodal",
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
    id: "allrisk",
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

const brokerageItems = [
  {
    icon: FileText,
    title: "Admitted Policy Process",
    desc: "We manage issuing, billing, and claims on local policies for full visibility of your global program.",
  },
  {
    icon: ShieldCheck,
    title: "Risk of Loss & Incoterms",
    desc: "Deep knowledge of international terms of sale ensures the right exposures are covered.",
  },
  {
    icon: Coins,
    title: "Subrogation",
    desc: "We manage recovery on your behalf to maximize returns and keep premiums low.",
  },
  {
    icon: MagnifyingGlass,
    title: "Surveys",
    desc: "Global network of surveyors for timely action that can make or break a claim.",
  },
];

const claimsItems = [
  {
    icon: ChartBar,
    title: "Reporting & Analytics",
    desc: "See where losses occur and eliminate poor-performing carriers with actionable data.",
  },
  {
    icon: DeviceMobile,
    title: "TRACE® Web Portal",
    desc: "Real-time visibility into certificates, claims, documents, and reporting — web and mobile.",
  },
  {
    icon: Globe,
    title: "Surveyor Appointment",
    desc: "We coordinate surveys with our global network, even in remote locations.",
  },
  {
    icon: GraduationCap,
    title: "Education & Consulting",
    desc: "Dedicated professionals to train your team on claims process and cargo risk.",
  },
];

const valueProps = [
  {
    icon: User,
    title: "Single Point of Contact",
    desc: "One person handles your policy, claims, and questions from start to finish.",
  },
  {
    icon: GraduationCap,
    title: "Logistics Experts",
    desc: "Sole focus on cargo insurance means better coverage, pricing, and subrogation.",
  },
  {
    icon: ChartBar,
    title: "Reporting & Analytics",
    desc: "Supply chain risk tools that surface insights and improve performance.",
  },
  {
    icon: DeviceMobile,
    title: "Accessibility & Technology",
    desc: "Web portal and mobile app for claims filing anytime, anywhere.",
  },
  {
    icon: Globe,
    title: "Global Presence",
    desc: "Best-in-class service backed by a worldwide network of industry experts.",
  },
];

const trustStats = [
  { value: "12,000+", label: "Shipments Covered" },
  { value: "98%", label: "Claims Paid" },
  { value: "48 hrs", label: "Average Claims Settlement" },
  { value: "A+", label: "Rated Underwriters" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative bg-white dark:bg-[#030712] border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
                  Insurance for{" "}
                  <span className="text-[#0024ff]">Every Shipment</span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Ocean, air, land, and warehouse cover. Clear policies, straightforward claims, and people who understand logistics.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {[
                    "All-risk and named-peril options",
                    "Door-to-door multimodal cover",
                    "A+ rated global underwriters",
                    "Dedicated claims handlers",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check size={16} weight="bold" className="text-[#0024ff] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="#coverage">
                    Explore Services
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Speak with an Expert
                  </Button>
                </div>
              </div>

              {/* Operational images */}
              <div className="grid grid-cols-2 gap-3 h-[420px]">
                <div className="relative col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/shipment.jpg"
                    alt="Cargo vessel loading at port"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/trucks.jpg"
                    alt="Trucks at warehouse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/image2.jpg"
                    alt="Warehouse operations"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-bold text-[#0024ff]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* People & Operations */}
        <section className="py-16 px-6 md:px-8 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Real people. Real operations.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  We work every day with shippers, forwarders, and warehouse teams. Our claims handlers and underwriters understand the pressure of moving cargo on time and on budget.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated account managers",
                    "On-the-ground survey network",
                    "Claims teams that pick up the phone",
                    "Practical advice, not just policies",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <Check size={16} weight="bold" className="text-[#0024ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-64 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/man-woman.jpg"
                    alt="Insurance team discussing a claim"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/image3.webp"
                    alt="Warehouse staff checking cargo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/image1.jpg"
                    alt="Port operations and container handling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="coverage" className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Insurance Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Straightforward cover for every cargo type and transport method.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    id={service.id}
                    key={service.id}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 flex flex-col"
                  >
                    <div className="relative h-52 w-full overflow-hidden border-b border-gray-200 dark:border-white/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff]">
                          <Icon size={20} weight="bold" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={14} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 border border-[#0024ff] text-[#0024ff] hover:bg-[#0024ff] hover:text-white font-semibold text-sm transition-colors"
                      >
                        Get a Quote <ArrowRight size={14} weight="bold" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Brokerage & Claims */}
        <section className="py-20 px-6 md:px-8 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Brokerage & Claims Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                We handle the full lifecycle from placing the policy to resolving the claim.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              <div className="relative h-72 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/man-meeting.jpg"
                  alt="Claims team reviewing documents"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-72 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/cargoman.jpg"
                  alt="Surveyor inspecting cargo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Handshake size={24} weight="bold" className="text-[#0024ff]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Cargo Insurance Brokerage
                  </h3>
                </div>
                <div className="space-y-6">
                  {brokerageItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-9 h-9 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] flex-shrink-0">
                          <Icon size={18} weight="bold" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Files size={24} weight="bold" className="text-[#0024ff]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Cargo Claims Management
                  </h3>
                </div>
                <div className="space-y-6">
                  {claimsItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-9 h-9 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] flex-shrink-0">
                          <Icon size={18} weight="bold" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Shippers Work With Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Clear communication, practical expertise, and a team that understands the realities of moving cargo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueProps.map((prop, i) => {
                const Icon = prop.icon;
                return (
                  <div key={i} className="border border-gray-200 dark:border-white/10 p-6">
                    <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] mb-4">
                      <Icon size={20} weight="bold" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {prop.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {prop.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits band */}
        <section className="py-16 px-6 md:px-8 bg-[#0024ff] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Practical Protection for Real Shipments
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  Solid underwriting, clear communication, and people who respond when you need them.
                </p>
                <Button variant="secondary" size="lg" href="/contact">
                  Get Protected Now
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-white/10 border border-white/20 p-5">
                      <div className="w-10 h-10 bg-white/15 flex items-center justify-center text-[#ffb41d] mb-3">
                        <Icon size={22} weight="bold" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-blue-100">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 md:px-8 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How Cargo Insurance Works
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Four clear steps. No unnecessary paperwork.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Num = step.num;
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-6"
                  >
                    <Num size={32} weight="bold" className="text-[#0024ff] mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coverage Gap Comparison */}
        <section className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Cargo Insurance vs. Carrier Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Many shippers assume the carrier’s liability is enough. In most cases it is not.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <ShieldCheck size={24} weight="bold" className="text-[#0024ff]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Cargo Insurance
                  </h3>
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
                      <Check size={16} weight="bold" className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Warning size={24} weight="bold" className="text-amber-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Carrier Liability Only
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Limited to $500 per package (COGSA)",
                    "Excludes Acts of God and inherent vice",
                    "Carrier must be proven negligent",
                    "No cover for concealed damage",
                    "Varies widely by jurisdiction",
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

        {/* Final CTA */}
        <section className="py-16 px-6 md:px-8 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/personOffice.jpg"
                  alt="Speaking with a cargo insurance specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Users size={36} weight="bold" className="text-[#0024ff] mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to protect your next shipment?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Talk to a cargo insurance specialist. No pressure — just clear answers about what you actually need.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="/contact">
                    Speak with an Expert
                  </Button>
                  <Button variant="outline" size="lg" href="#coverage">
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}