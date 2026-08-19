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
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const stats = [
    { valueKey: "stats.stat1.value", labelKey: "stats.stat1.label", icon: Globe },
    { valueKey: "stats.stat2.value", labelKey: "stats.stat2.label", icon: Shield },
    { valueKey: "stats.stat3.value", labelKey: "stats.stat3.label", icon: Medal },
    { valueKey: "stats.stat4.value", labelKey: "stats.stat4.label", icon: Clock },
  ];

  const values = [
    {
      icon: Shield,
      titleKey: "values.value1.title",
      descriptionKey: "values.value1.description",
    },
    {
      icon: TrendUp,
      titleKey: "values.value2.title",
      descriptionKey: "values.value2.description",
    },
    {
      icon: Heart,
      titleKey: "values.value3.title",
      descriptionKey: "values.value3.description",
    },
    {
      icon: Globe,
      titleKey: "values.value4.title",
      descriptionKey: "values.value4.description",
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      titleKey: "pillars.pillar1.title",
      descriptionKey: "pillars.pillar1.description",
    },
    {
      icon: Compass,
      titleKey: "pillars.pillar2.title",
      descriptionKey: "pillars.pillar2.description",
    },
    {
      icon: Clock,
      titleKey: "pillars.pillar3.title",
      descriptionKey: "pillars.pillar3.description",
    },
    {
      icon: Building,
      titleKey: "pillars.pillar4.title",
      descriptionKey: "pillars.pillar4.description",
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
                  {t("hero.title1")} <br />
                  <span className="text-[#0024ff]">{t("hero.title2")}</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="#story">
                    {t("hero.cta1")}
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    {t("hero.cta2")}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 h-[420px]">
                <div className="relative col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/portview.jpg"
                    alt={t("hero.imageAlt1")}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/ship.webp"
                    alt={t("hero.imageAlt2")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/trucks.jpg"
                    alt={t("hero.imageAlt3")}
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
                      {t(stat.valueKey)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t(stat.labelKey)}
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
                {t("whoWeAre.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("whoWeAre.subtitle")}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { key: "mission", labelKey: "tabs.mission", icon: Target },
                { key: "vision", labelKey: "tabs.vision", icon: Eye },
                { key: "values", labelKey: "tabs.values", icon: Heart },
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
                    {t(tab.labelKey)}
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
                        {t("mission.title")}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t("mission.description")}
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
                        {t("vision.title")}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t("vision.description")}
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
                              {t(value.titleKey)}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t(value.descriptionKey)}
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
                  alt={t("whoWeAre.imageAlt")}
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
                {t("operate.title")}
              </h2>
              <p className="text-blue-100 text-lg">
                {t("operate.subtitle")}
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
                    <h3 className="text-xl font-bold mb-2">{t(pillar.titleKey)}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {t(pillar.descriptionKey)}
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
                  {t("team.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  {t("team.subtitle")}
                </p>
                <ul className="space-y-3">
                  {[
                    "team.item1",
                    "team.item2",
                    "team.item3",
                    "team.item4",
                  ].map((itemKey) => (
                    <li
                      key={itemKey}
                      className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check size={16} weight="bold" className="text-[#0024ff]" />
                      {t(itemKey)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-56 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/man-woman.jpg"
                    alt={t("team.imageAlt1")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/personOffice.jpg"
                    alt={t("team.imageAlt2")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/meeting.jpg"
                    alt={t("team.imageAlt3")}
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
                  alt={t("cta.imageAlt")}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Users size={36} weight="bold" className="text-[#0024ff] mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("cta.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {t("cta.subtitle")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="/contact">
                    {t("cta.button1")}
                  </Button>
                  <Button variant="outline" size="lg" href="/services">
                    {t("cta.button2")}
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