"use client";

import { Quotes } from "@phosphor-icons/react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Kovasure handled our $2M cargo claim professionally. Settlement in 36 hours. No hassle, no delays.",
    author: "Marcus Chen",
    role: "Operations Director",
    company: "Global Freight Solutions",
    image: "/man-meeting.jpg",
  },
  {
    quote: "Clear policies, transparent pricing, responsive team. Best cargo insurance partner we've worked with.",
    author: "Sarah Williams",
    role: "Supply Chain Manager",
    company: "TransOcean Logistics",
    image: "/man-woman.jpg",
  },
  {
    quote: "We ship 200+ containers monthly. Kovasure's annual policy saved us 40% versus per-shipment insurance.",
    author: "Ahmed Hassan",
    role: "CEO",
    company: "MidEast Cargo Lines",
    image: "/cargoman.jpg",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#030712] border-y border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Logistics<br />Professionals Worldwide
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Real feedback from freight forwarders, importers, and logistics companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-gray-200 dark:border-white/10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 border-r border-b border-gray-200 dark:border-white/10 last:border-r-0 flex flex-col"
            >
              {/* Quote icon */}
              <Quotes size={32} weight="fill" className="text-[#0024ff] mb-6" />

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                <div className="relative w-12 h-12 overflow-hidden border-2 border-[#0024ff]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              98%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Client Satisfaction Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              $2.5k+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Cargo Value Insured
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              12K+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Shipments Protected
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              48hrs
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Claim Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
