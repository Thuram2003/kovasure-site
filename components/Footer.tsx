"use client";

import { EnvelopeSimple, FacebookLogo, XLogo, LinkedinLogo, Phone, MapPin } from "@phosphor-icons/react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090b14] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/kovasure.svg"
                alt="Kovasure"
                width={140}
                height={38}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-2">
              {[FacebookLogo, XLogo, LinkedinLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#0024ff] flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/10"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Coverage / Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider border-b border-white/10 pb-3">
              {t("coverage")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/services#ocean" className="hover:text-white transition-colors">
                  {t("oceanFreight")}
                </Link>
              </li>
              <li>
                <Link href="/services#air" className="hover:text-white transition-colors">
                  {t("airCargo")}
                </Link>
              </li>
              <li>
                <Link href="/services#land" className="hover:text-white transition-colors">
                  {t("landTransport")}
                </Link>
              </li>
              <li>
                <Link href="/services#warehouse" className="hover:text-white transition-colors">
                  {t("warehousing")}
                </Link>
              </li>
              <li>
                <Link href="/services#multimodal" className="hover:text-white transition-colors">
                  {t("multimodal")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider border-b border-white/10 pb-3">
              {t("company")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider border-b border-white/10 pb-3">
              {t("getInTouch")}
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone size={18} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">{t("support")}</div>
                  <a href="tel:+237677777777" className="hover:text-white transition-colors">
                    +237 6 77 77 77 77
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <EnvelopeSimple size={18} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">{t("email")}</div>
                  <a href="mailto:info@kovasure.com" className="hover:text-white transition-colors">
                    info@kovasure.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} weight="bold" className="text-[#0024ff] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">{t("office")}</div>
                  <span>G4 Etage, Bonaberi, Douala, Cameroon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Kovasure. {t("rights")}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t("privacy")}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t("terms")}
              </Link>
              <Link href="/about#compliance" className="hover:text-white transition-colors">
                {t("compliance")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}