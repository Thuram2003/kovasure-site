"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Target,
  Eye,
  Heart,
  Globe,
  Shield,
  TrendUp,
  Medal,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  Compass,
  Check,
  Users,
} from "@phosphor-icons/react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const stats = [
    { value: "50+", label: "Countries Covered", icon: Globe },
    { value: "12K+", label: "Shipments Covered", icon: Shield },
    { value: "98%", label: "Claims Paid", icon: Medal },
    { value: "48 hrs", label: "Avg. Settlement", icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We do what we say. Clear terms, no surprises at claim time.",
    },
    {
      icon: TrendUp,
      title: "Practical Innovation",
      description: "Digital quoting and claims so you spend less time on paperwork.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Coverage built around your routes, not a one-size-fits-all policy.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Cover that works across major trade lanes and ports worldwide.",
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "A+ Rated Backing",
      description: "Policies underwritten by leading global carriers with strong solvency ratings.",
    },
    {
      icon: Compass,
      title: "Regulatory Compliance",
      description: "We handle maritime, air, and cross-border rules so your cargo stays compliant.",
    },
    {
      icon: Clock,
      title: "Fast Settlements",
      description: "Digital claims infrastructure. Most valid claims paid within 48 hours of documentation.",
    },
    {
      icon: Building,
      title: "Smart Underwriting",
      description: "Risk models tuned to specific lanes, vessels, and cargo types to keep premiums fair.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="bg-white dark:bg-[#030712] border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
                  Protecting Global Trade <br />
                  <span className="text-[#0024ff]">Since 2024</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Cargo insurance built for logistics companies, freight forwarders, and importers who need cover that actually pays out.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="#story">
                    Our Story
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Contact Us
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 h-[420px]">
                <div className="relative col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/portview.jpg"
                    alt="Port operations"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/ship.webp"
                    alt="Cargo vessel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/trucks.jpg"
                    alt="Land transport"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6 md:px-8 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-6"
                  >
                    <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center mx-auto mb-3 text-[#0024ff]">
                      <Icon size={20} weight="bold" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[#0024ff] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Are / Mission Vision Values */}
        <section id="story" className="py-20 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                What drives us and how we work with shippers and forwarders every day.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { key: "mission", label: "Mission", icon: Target },
                { key: "vision", label: "Vision", icon: Eye },
                { key: "values", label: "Values", icon: Heart },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex items-center gap-2 px-5 py-2.5 font-semibold text-sm transition-colors border ${activeTab === tab.key
                        ? "bg-[#0024ff] text-white border-[#0024ff]"
                        : "bg-white dark:bg-gray-900 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-[#0024ff]"
                      }`}
                  >
                    <Icon size={18} weight="bold" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-8">
                {activeTab === "mission" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff]">
                        <Target size={20} weight="bold" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      To make cargo insurance simple, fast, and fair. Every shipper should know exactly what they are covered for and get paid quickly when something goes wrong. No jargon, no runaround.
                    </p>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#ffb41d]/10 flex items-center justify-center text-[#ffb41d]">
                        <Eye size={20} weight="bold" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      A world where cargo cover is as standard as shipping labels. Where a small business in Douala has the same access to protection as a multinational in Rotterdam. We are building the infrastructure to make that happen.
                    </p>
                  </div>
                )}

                {activeTab === "values" && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {values.map((value, i) => {
                      const Icon = value.icon;
                      return (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Icon size={18} weight="bold" className="text-[#0024ff]" />
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {value.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="relative h-80 lg:h-full min-h-[320px] border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/meeting.avif"
                  alt="Team discussing cargo coverage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How We Operate */}
        <section className="py-20 px-6 md:px-8 bg-[#0024ff] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Operate
              </h2>
              <p className="text-blue-100 text-lg">
                Four commitments that shape every policy we write.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/20 p-6"
                  >
                    <div className="w-10 h-10 bg-white/15 flex items-center justify-center text-[#ffb41d] mb-4">
                      <Icon size={22} weight="bold" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* People / Trust section */}
        <section className="py-20 px-6 md:px-8 border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Built by people who understand trade
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Our team combines insurance expertise with real logistics experience. We know the pressure of moving cargo on time and the cost of delays when cover is unclear.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated account managers",
                    "Claims handlers who respond",
                    "Underwriters focused on cargo risk",
                    "Local knowledge on major trade lanes",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check size={16} weight="bold" className="text-[#0024ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-56 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/man-woman.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/personOffice.jpg"
                    alt="Specialist at work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/meeting.jpg"
                    alt="Operations on the ground"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership 
        <section className="py-20 px-6 md:px-8 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Leadership
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Built by people who understand both insurance and trade.
              </p>
            </div>

            <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 overflow-hidden">
              <div className="relative h-80 w-full border-b border-gray-200 dark:border-white/10">
                <Image
                  src="/founder.jpg"
                  alt="Genesis St. James Amahnui"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Genesis St. James Amahnui
                </h3>
                <p className="text-sm text-[#0024ff] font-semibold mt-1.5">
                  Founder & CEO
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  Technology entrepreneur and systems designer based in Cameroon. Focused on making cargo insurance accessible and reliable for businesses across Africa and global trade lanes.
                </p>
              </div>
            </div>
          </div>
        </section > */}

        {/* Final CTA */}
        <section className="py-16 px-6 md:px-8 bg-gray-50 dark:border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative h-72 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/image1.jpg"
                  alt="Protecting cargo worldwide"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Users size={36} weight="bold" className="text-[#0024ff] mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to work with us?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Talk to a cargo insurance specialist about your routes and risk profile. Clear answers, no pressure.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="/contact">
                    Contact Us
                  </Button>
                  <Button variant="outline" size="lg" href="/services">
                    View Services
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