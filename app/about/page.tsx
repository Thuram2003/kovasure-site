"use client";

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
  Users,
  Compass,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const stats = [
    { value: "150+", label: "Countries Covered", icon: <Globe size={24} weight="bold" /> },
    { value: "10K+", label: "Policies Issued", icon: <Shield size={24} weight="bold" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Medal size={24} weight="bold" /> },
    { value: "24/7", label: "Support Available", icon: <Clock size={24} weight="bold" /> },
  ];

  const values = [
    {
      icon: <Shield size={32} weight="bold" />,
      title: "Trust & Reliability",
      description: "We build lasting relationships through consistent, dependable service and transparent practices.",
    },
    {
      icon: <TrendUp size={32} weight="bold" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to simplify insurance processes and enhance customer experience.",
    },
    {
      icon: <Heart size={32} weight="bold" />,
      title: "Customer First",
      description: "Your success is our priority. We tailor solutions to meet your unique business needs.",
    },
    {
      icon: <Globe size={32} weight="bold" />,
      title: "Global Reach",
      description: "Comprehensive coverage across major trade routes and shipping lanes worldwide.",
    },
  ];

  const team = [
    { name: "Genesis St. James Amahnui", role: "Founder & CEO", expertise: "Cameroonian technology entrepreneur & software systems designer" },
  ];

  const pillars = [
    {
      icon: <ShieldCheck size={32} weight="bold" className="text-[#ffb41d]" />,
      title: "Strategic Risk Transfer",
      description: "Our policies are backed by leading A+ rated global underwriters, ensuring absolute solvency and stable backing.",
    },
    {
      icon: <Compass size={32} weight="bold" className="text-[#ffb41d]" />,
      title: "Regulatory Compliance",
      description: "We navigate complex maritime, air, and territorial regulations, keeping your cargo fully compliant across borders.",
    },
    {
      icon: <Clock size={32} weight="bold" className="text-[#ffb41d]" />,
      title: "Frictionless Settlements",
      description: "A digital claims infrastructure designed to process valid losses and transfer capital back to you within 48 hours.",
    },
    {
      icon: <Building size={32} weight="bold" className="text-[#ffb41d]" />,
      title: "Underwriting Intelligence",
      description: "Custom risk models optimized for specific trade lanes, handling vessels, and weather dynamics to lower premiums.",
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
                  Protecting Global Trade <br />
                  <span className="text-[#0024ff] dark:text-blue-500">Since 2015</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  We make cargo insurance simple, accessible, and highly reliable for logistics and trade businesses of all scales globally.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button variant="primary" size="lg" href="#story">
                    Our Story
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    Contact Our Office
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5 relative">
                <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/portview.jpg"
                    alt="Kovasure Port Operations"
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

        {/* Stats Panel */}
        <section className="py-16 px-6 md:px-8 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 counter-reset-stats">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-soft rounded-xl hover:-translate-y-1 transition-all duration-300 counter-item-stat">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0024ff] to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-soft group-hover:scale-105 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-[#0024ff] dark:text-blue-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section id="story" className="py-24 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Driven by purpose, guided by values, and committed to excellence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { key: "mission", label: "Our Mission", icon: <Target size={20} weight="bold" /> },
                { key: "vision", label: "Our Vision", icon: <Eye size={20} weight="bold" /> },
                { key: "values", label: "Our Values", icon: <Heart size={20} weight="bold" /> },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-[#0024ff] text-white shadow-[0_4px_15px_rgba(0,36,255,0.3)] scale-102"
                      : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

             <div className="max-w-4xl mx-auto">
              {activeTab === "mission" && (
                <div className="bg-gradient-to-br from-[#0024ff]/5 to-blue-50/50 dark:from-[#0024ff]/5 dark:to-transparent rounded-xl p-10 sm:p-12 border border-[#0024ff]/15 shadow-soft">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 bg-[#0024ff] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-soft">
                      <Target size={32} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        To provide comprehensive, accessible, and innovative cargo insurance solutions that empower businesses to trade confidently across borders. We're committed to simplifying the insurance process, offering competitive rates, and delivering exceptional service at every touchpoint.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="bg-gradient-to-br from-[#ffb41d]/5 to-amber-50/50 dark:from-[#ffb41d]/5 dark:to-transparent rounded-xl p-10 sm:p-12 border border-[#ffb41d]/20 shadow-soft">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 bg-[#ffb41d] rounded-xl flex items-center justify-center flex-shrink-0 text-gray-900 shadow-soft">
                      <Eye size={32} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        To become the world's most trusted and technologically advanced cargo insurance provider, enabling seamless global trade through innovative risk management solutions. We envision a future where every shipment, regardless of size or destination, has access to reliable, affordable protection.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-[0_15px_40px_rgba(0,36,255,0.06)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0024ff] to-blue-700 rounded-xl flex items-center justify-center mb-5 text-white shadow-soft">
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Deep Blue Body Section (Core Commitments replacing old Journey) */}
        <section className="relative py-28 px-6 md:px-8 bg-gradient-to-br from-[#0024ff] to-blue-900 text-white overflow-hidden rounded-xl max-w-7xl mx-auto my-12 shadow-[0_20px_50px_rgba(0,36,255,0.2)]">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat"></div>
          </div>
          <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#ffb41d]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Our Pillars of Trust
              </h2>
              <p className="text-lg text-blue-100">
                Core structural commitments that keep your global assets safe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/15 p-8 rounded-xl space-y-4 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Experienced marine insurance and technology specialists.
              </p>
            </div>

            <div className="flex justify-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#0024ff]/20 transition-all overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,36,255,0.06)] hover:-translate-y-1.5 duration-300 max-w-sm w-full"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#0024ff]/5 to-[#ffb41d]/5 flex items-center justify-center relative overflow-hidden">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#0024ff] to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl font-extrabold shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0024ff] dark:text-blue-400 mb-3 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              ))}
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
                Ready to Partner with Us?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Join thousands of global shipping businesses that trust Kovasure to safeguard cargo.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="secondary" size="lg" href="/contact">
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg" href="/services" className="bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white hover:text-blue-950">
                  Explore Services <ArrowRight size={18} weight="bold" />
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/handshake.jpg"
                  alt="Business partnership handshake"
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
