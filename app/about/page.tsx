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
} from "@phosphor-icons/react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const stats = [
    { value: "50+", label: "Countries Covered", icon: Globe },
    { value: "1K+", label: "Policies Issued", icon: Shield },
    { value: "98%", label: "Client Satisfaction", icon: Medal },
    { value: "24/7", label: "Support Available", icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We do what we say. Clear terms, no surprises at claim time.",
    },
    {
      icon: TrendUp,
      title: "Innovation",
      description: "Digital-first quoting and claims so you spend less time on paperwork.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your coverage is built around your routes, not a one-size-fits-all policy.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Cover works across major trade lanes and ports worldwide.",
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
      description: "Digital claims infrastructure. Most valid claims paid within 48 hours of docs.",
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
        <section className="bg-slate-50 dark:bg-gray-950 py-20 md:py-28 border-b border-gray-100 dark:border-white/5">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Protecting Global Trade <br />
                  <span className="text-[#0024ff]">Since 2020</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
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

              <div className="relative">
                <div className="relative h-[380px] w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/portview.jpg"
                    alt="Port operations"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 md:px-8 bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-lg p-6"
                  >
                    <div className="w-10 h-10 bg-[#0024ff]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#0024ff]">
                      <Icon size={20} weight="bold" />
                    </div>
                    <div className="text-2xl font-bold text-[#0024ff] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section id="story" className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                What drives us and how we work.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                      activeTab === tab.key
                        ? "bg-[#0024ff] text-white"
                        : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Icon size={18} weight="bold" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 p-8">
              {activeTab === "mission" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0024ff]/10 rounded-lg flex items-center justify-center text-[#0024ff]">
                      <Target size={20} weight="bold" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To make cargo insurance simple, fast, and fair. We believe every shipper should know exactly what they are covered for and get paid quickly when something goes wrong. No jargon, no runaround.
                  </p>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#ffb41d]/10 rounded-lg flex items-center justify-center text-[#ffb41d]">
                      <Eye size={20} weight="bold" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
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
                          <h4 className="font-bold text-gray-900 dark:text-white">{value.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-20 px-6 md:px-8 bg-[#0024ff] text-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Operate</h2>
              <p className="text-blue-100">
                Four commitments that shape every policy we write.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/15 p-6 rounded-lg space-y-3"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#ffb41d]">
                      <Icon size={22} weight="bold" />
                    </div>
                    <h3 className="text-lg font-bold">{pillar.title}</h3>
                    <p className="text-sm text-blue-100">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Leadership
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Built by people who understand both insurance and trade.
              </p>
            </div>

            <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-white/5 overflow-hidden">
              <div className="aspect-square bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#0024ff] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                  GS
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Genesis St. James Amahnui
                </h3>
                <p className="text-sm text-[#0024ff] font-semibold mt-1">
                  Founder & CEO
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Technology entrepreneur and software systems designer based in Cameroon.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}