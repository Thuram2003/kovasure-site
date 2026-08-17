"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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

export default function ServicesPage() {
  const t = useTranslations("Services");

  const services = [
    {
      icon: Boat,
      title: t("services.ocean.title"),
      description: t("services.ocean.description"),
      features: [
        t("services.ocean.f1"),
        t("services.ocean.f2"),
        t("services.ocean.f3"),
        t("services.ocean.f4"),
      ],
      image: "/image1.jpg",
      id: "ocean",
    },
    {
      icon: Airplane,
      title: t("services.air.title"),
      description: t("services.air.description"),
      features: [
        t("services.air.f1"),
        t("services.air.f2"),
        t("services.air.f3"),
        t("services.air.f4"),
      ],
      image: "/image3.jpg",
      id: "air",
    },
    {
      icon: Truck,
      title: t("services.land.title"),
      description: t("services.land.description"),
      features: [
        t("services.land.f1"),
        t("services.land.f2"),
        t("services.land.f3"),
        t("services.land.f4"),
      ],
      image: "/trucks.jpg",
      id: "land",
    },
    {
      icon: Warehouse,
      title: t("services.warehouse.title"),
      description: t("services.warehouse.description"),
      features: [
        t("services.warehouse.f1"),
        t("services.warehouse.f2"),
        t("services.warehouse.f3"),
        t("services.warehouse.f4"),
      ],
      image: "/image2.jpg",
      id: "warehouse",
    },
    {
      icon: Package,
      title: t("services.multimodal.title"),
      description: t("services.multimodal.description"),
      features: [
        t("services.multimodal.f1"),
        t("services.multimodal.f2"),
        t("services.multimodal.f3"),
        t("services.multimodal.f4"),
      ],
      image: "/multimodal.jpg",
      id: "multimodal",
    },
    {
      icon: ShieldCheck,
      title: t("services.allrisk.title"),
      description: t("services.allrisk.description"),
      features: [
        t("services.allrisk.f1"),
        t("services.allrisk.f2"),
        t("services.allrisk.f3"),
        t("services.allrisk.f4"),
      ],
      image: "/risk.jpg",
      id: "allrisk",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t("benefits.maxProtection.title"),
      description: t("benefits.maxProtection.description"),
    },
    {
      icon: Coins,
      title: t("benefits.competitiveRates.title"),
      description: t("benefits.competitiveRates.description"),
    },
    {
      icon: Clock,
      title: t("benefits.claims48h.title"),
      description: t("benefits.claims48h.description"),
    },
    {
      icon: Files,
      title: t("benefits.instantPolicies.title"),
      description: t("benefits.instantPolicies.description"),
    },
  ];

  const steps = [
    {
      num: NumberCircleOne,
      title: t("steps.quote.title"),
      desc: t("steps.quote.desc"),
    },
    {
      num: NumberCircleTwo,
      title: t("steps.bind.title"),
      desc: t("steps.bind.desc"),
    },
    {
      num: NumberCircleThree,
      title: t("steps.ship.title"),
      desc: t("steps.ship.desc"),
    },
    {
      num: NumberCircleFour,
      title: t("steps.claim.title"),
      desc: t("steps.claim.desc"),
    },
  ];

  const brokerageItems = [
    {
      icon: FileText,
      title: t("brokerage.admitted.title"),
      desc: t("brokerage.admitted.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("brokerage.risk.title"),
      desc: t("brokerage.risk.desc"),
    },
    {
      icon: Coins,
      title: t("brokerage.subrogation.title"),
      desc: t("brokerage.subrogation.desc"),
    },
    {
      icon: MagnifyingGlass,
      title: t("brokerage.surveys.title"),
      desc: t("brokerage.surveys.desc"),
    },
  ];

  const claimsItems = [
    {
      icon: ChartBar,
      title: t("claims.reporting.title"),
      desc: t("claims.reporting.desc"),
    },
    {
      icon: DeviceMobile,
      title: t("claims.portal.title"),
      desc: t("claims.portal.desc"),
    },
    {
      icon: Globe,
      title: t("claims.surveyor.title"),
      desc: t("claims.surveyor.desc"),
    },
    {
      icon: GraduationCap,
      title: t("claims.education.title"),
      desc: t("claims.education.desc"),
    },
  ];

  const valueProps = [
    {
      icon: User,
      title: t("valueProps.contact.title"),
      desc: t("valueProps.contact.desc"),
    },
    {
      icon: GraduationCap,
      title: t("valueProps.experts.title"),
      desc: t("valueProps.experts.desc"),
    },
    {
      icon: ChartBar,
      title: t("valueProps.analytics.title"),
      desc: t("valueProps.analytics.desc"),
    },
    {
      icon: DeviceMobile,
      title: t("valueProps.tech.title"),
      desc: t("valueProps.tech.desc"),
    },
    {
      icon: Globe,
      title: t("valueProps.global.title"),
      desc: t("valueProps.global.desc"),
    },
  ];

  const trustStats = [
    { value: "12,000+", label: t("trust.shipments") },
    { value: "98%", label: t("trust.claimsPaid") },
    { value: "48 hrs", label: t("trust.settlement") },
    { value: "A+", label: t("trust.underwriters") },
  ];

  const heroBullets = [
    t("hero.bullet1"),
    t("hero.bullet2"),
    t("hero.bullet3"),
    t("hero.bullet4"),
  ];

  const peopleBullets = [
    t("people.bullet1"),
    t("people.bullet2"),
    t("people.bullet3"),
    t("people.bullet4"),
  ];

  const cargoInsuranceItems = [
    t("comparison.cargo.item1"),
    t("comparison.cargo.item2"),
    t("comparison.cargo.item3"),
    t("comparison.cargo.item4"),
    t("comparison.cargo.item5"),
  ];

  const carrierLiabilityItems = [
    t("comparison.carrier.item1"),
    t("comparison.carrier.item2"),
    t("comparison.carrier.item3"),
    t("comparison.carrier.item4"),
    t("comparison.carrier.item5"),
  ];

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
                  {t("hero.title1")}{" "}
                  <span className="text-[#0024ff]">{t("hero.title2")}</span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {t("hero.subtitle")}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {heroBullets.map((item) => (
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
                    {t("hero.cta1")}
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    {t("hero.cta2")}
                  </Button>
                </div>
              </div>

              {/* Operational images */}
              <div className="grid grid-cols-2 gap-3 h-[420px]">
                <div className="relative col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/shipment.jpg"
                    alt={t("images.shipment")}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/trucks.jpg"
                    alt={t("images.trucks")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/image2.jpg"
                    alt={t("images.warehouse")}
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
                  {t("people.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  {t("people.subtitle")}
                </p>
                <ul className="space-y-3">
                  {peopleBullets.map((item) => (
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
                    alt={t("images.team")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/image3.webp"
                    alt={t("images.staff")}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 col-span-2 border border-gray-200 dark:border-white/10 overflow-hidden">
                  <Image
                    src="/image1.jpg"
                    alt={t("images.port")}
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
                {t("coverage.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("coverage.subtitle")}
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

                      <Link
                        href="/contact"
                        className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 border border-[#0024ff] text-[#0024ff] hover:bg-[#0024ff] hover:text-white font-semibold text-sm transition-colors"
                      >
                        {t("getQuote")} <ArrowRight size={14} weight="bold" />
                      </Link>
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
                {t("brokerageClaims.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("brokerageClaims.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              <div className="relative h-72 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/man-meeting.jpg"
                  alt={t("images.claimsTeam")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-72 border border-gray-200 dark:border-white/10 overflow-hidden">
                <Image
                  src="/cargoman.jpg"
                  alt={t("images.surveyor")}
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
                    {t("brokerage.title")}
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
                    {t("claims.title")}
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
                {t("why.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("why.subtitle")}
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
                  {t("benefitsBand.title")}
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  {t("benefitsBand.subtitle")}
                </p>
                <Button variant="secondary" size="lg" href="/contact">
                  {t("benefitsBand.cta")}
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
                {t("howItWorks.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("howItWorks.subtitle")}
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
                {t("comparison.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {t("comparison.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <ShieldCheck size={24} weight="bold" className="text-[#0024ff]" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t("comparison.cargo.title")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cargoInsuranceItems.map((item, i) => (
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
                    {t("comparison.carrier.title")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {carrierLiabilityItems.map((item, i) => (
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
                  alt={t("images.specialist")}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Users size={36} weight="bold" className="text-[#0024ff] mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("finalCta.title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {t("finalCta.subtitle")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="/contact">
                    {t("finalCta.cta1")}
                  </Button>
                  <Button variant="outline" size="lg" href="#coverage">
                    {t("finalCta.cta2")}
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