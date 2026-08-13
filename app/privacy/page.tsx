"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Clock, ArrowLeft } from "@phosphor-icons/react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white antialiased">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">

          {/* Page Header */}
          <div className="space-y-4 mb-12 border-b border-gray-100 dark:border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0024ff]/15 rounded-full text-xs font-semibold text-[#0024ff] dark:text-blue-400">
              <Shield size={16} weight="bold" />
              <span>Legal Protection</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Privacy Statement
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <Clock size={14} weight="bold" />
              <span>Effective Date: March 2, 2026</span>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-blue dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <section className="space-y-4">
              <p>
                Kovasure Cargo Insurance Brokers, and its affiliates and subsidiaries (collectively, <strong>"Kovasure"</strong>) respect your privacy. This Privacy Statement:
              </p>
              <ul className="list-decimal pl-6 space-y-2">
                <li>Applies to all public and non-public, online and offline, collected, stored, processed, transferred and disclosed personal data of Kovasure’s customers, service providers, agents, contractors, employees and others who share their personal data with Kovasure; and</li>
                <li>Describes what types of personal data we collect, how we use the information, whom we share it with, and the choices you can make about Kovasure's use of your information.</li>
              </ul>
              <p>
                We also describe the measures we take to protect the security of the information and how you can contact us about our privacy practices. Our privacy practices may vary among the countries in which we operate to reflect local practices and legal requirements. We reserve the right to change this Privacy Statement at any time, and will indicate the date the Privacy Statement was most recently updated.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">What do you collect that can identify me?</h2>
              <p>
                We may collect your name, address, email, phone number, IP address, or geographic location, along with other personal data necessary to provide risk management services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Why do you collect my data?</h2>
              <p>
                If you are a customer, service provider, agent or contractor, we collect and use your personal data to provide the products and services you request; to improve our products and services; send notifications; and protect against, identify and prevent fraud and other criminal activities, claims and other liabilities. If you are an employee or a job applicant, we collect and use your personal data to establish, manage or terminate your employment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">How do you collect my data?</h2>
              <p>
                We collect your data when you provide it to us directly, use our products, services, applications software or website, and through cookies and tracking beacons. We collect data directly from you, or automatically.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Do you share my data?</h2>
              <p>
                Yes, as part of normal business operations, we may share your personal data with third parties (affiliates of Kovasure or third-party providers) to provide products and services you request; to fulfill employment and payroll-related tasks; and to conduct due diligence reviews. We do not sell or rent your personal data to third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Data Transfers</h2>
              <p>
                We may transfer the personal data we collect about you to countries other than the country in which the personal data originally was collected. Those countries may not have the same privacy and data protection laws as the country in which you initially provided the information. When we transfer your personal data to other countries, we will protect that information as described in this Privacy Statement and in accordance with applicable law. We use contractual protections for the transfer of personal data among various jurisdictions (including, e.g., the standard Contractual Clauses).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">What rights do I have over my data?</h2>
              <p>
                You may ask us how we process your data, request to correct or delete your personal data, and may opt out of email messaging and certain data processing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">How Safe is my Data?</h2>
              <p>
                We have in place industry-accepted physical, technical and administrative security measures appropriate to our business to safeguard and secure the personal data we collect from you.
              </p>
            </section>

            <section className="space-y-3 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-white/5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">How can I contact you?</h2>
              <p className="text-sm">
                If you have any questions about this Privacy Statement or any of the above please contact us at:
              </p>
              <address className="not-italic text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <strong>Kovasure Cargo Insurance Brokers</strong><br />
                Legal & compliance Department<br />
                4 Etage, Bonaberi<br />
                Douala, Cameroon<br />
                Email: <a href="mailto:dataprivacy@kovasure.com" className="text-[#0024ff] dark:text-blue-400 hover:underline">dataprivacy@kovasure.com</a>
              </address>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
