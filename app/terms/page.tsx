"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scroll, Clock, ArrowLeft } from "@phosphor-icons/react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white antialiased">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#0024ff] dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={16} weight="bold" />
              Back to Home
            </a>
          </div>

          {/* Page Header */}
          <div className="space-y-4 mb-12 border-b border-gray-100 dark:border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0024ff]/15 rounded-full text-xs font-semibold text-[#0024ff] dark:text-blue-400">
              <Scroll size={16} weight="bold" />
              <span>Terms of Use</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <Clock size={14} weight="bold" />
              <span>Last updated: February 1, 2026</span>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-blue dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Welcome to Kovasure</h2>
              <p>
                We hope you find our website and services useful. By accessing Kovasure Cargo Insurance Brokers' and all its affiliates and subsidiaries (collectively, <strong>"Kovasure"</strong>) servers, websites, application tools, or content, you are agreeing to these Terms of Service. Please read them carefully. The Terms of Service of Kovasure's websites are as follows:
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Use</h2>
              <p>
                Accessing Kovasure's servers, websites, or application tools does not give you ownership of any intellectual property rights in the content you access. You may not use such content unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any of our branding or logos. Do not remove, obscure, or alter any legal notices displayed in or along with such content.
              </p>
              <p>
                If you do not wish to be bound by these Terms of Service, you may not access or use the information on our websites. Should you get dissatisfied with any web page or with any of these Terms of Service, your sole and exclusive remedy is to discontinue accessing the respective web page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Copyright</h2>
              <p>
                This website is owned by Kovasure and contains material protected by copyright laws which may not be reproduced in any form without advanced written consent of an authorized officer of Kovasure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trademarks</h2>
              <p>
                The Kovasure name and logo are registered trademarks. All related product and service names, designs and slogans are the registered trademarks or service marks of Kovasure or of other wholly-owned subsidiaries of Kovasure. You may not use our trademarks without advanced written consent of an authorized officer of Kovasure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Accuracy of this site</h2>
              <p>
                The content on Kovasure's websites, including news articles and other content set forth in the sites, is compiled from a number of public sources that, to the best of Kovasure's knowledge, is true and correct. It is our intent to present only accurate information. Other than as expressly set out in these Terms of Service, Kovasure does not make any specific promises or commitments about the content and information on these websites, or their reliability, availability, or ability to meet your needs.
              </p>
              <p>
                In the event any information contained herein is erroneous, however, Kovasure accepts no liability or responsibility. Accordingly, all information provided on this site is provided <strong>"as-is."</strong> The information contained on Kovasure's websites is provided for informational purposes only and should not be construed as legal or definitive underwriting advice. Kovasure reserves the right to make changes in any way, at any time, for any reason without prior notice, to the contents and information on these websites.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Third Party Links</h2>
              <p>
                Links to other websites are provided for informational purposes only. While we believe the information to be accurate, we are not making any representations or warranties, nor do we accept liability or responsibility, as to the accuracy of the information contained on them.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Viruses</h2>
              <p>
                Kovasure makes every reasonable effort to ensure that our network is error- and virus-free, but does not warrant that any content and information available for downloading from our websites will be free from infection, viruses and/or other code that has contaminating or destructive properties. You are responsible for implementing sufficient procedures and virus checks (including anti-virus and other security checks) to satisfy your particular requirements for the accuracy of data input and output.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Disclaimer of Warranties</h2>
              <p>
                Some jurisdictions provide for certain warranties, like the implied warranty of merchantability, fitness for a particular purpose and non-infringement. To the extent permitted by law, we exclude all such warranties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
              <p>
                When permitted by law, Kovasure will not be responsible for any incidental, indirect, exemplary, punitive and consequential damages, lost profits, or damages resulting from lost data or business interruption resulting from the use of or inability to use these websites and Kovasure's systems, services, content or information whether based on warranty, contract, tort, or any other legal theory, and whether or not Kovasure has been advised of the possibility of such damages.
              </p>
              <p>
                To the extent permitted by applicable law, you agree that the total liability of Kovasure for any claims under these Terms of Service, including for any implied warranties, is limited to <strong>USD 100.00</strong>. In all cases, Kovasure will not be liable for any loss or damage that is not reasonably foreseeable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Governing Law</h2>
              <p>
                The applicable law governing the content and use of this site and any disputes arising from the use of this site is the law of England and Wales, and all disputes will be subject to the exclusive jurisdiction of the competent courts in London, United Kingdom.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
