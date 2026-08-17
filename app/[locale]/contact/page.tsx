"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  PaperPlaneRight,
  CheckCircle,
} from "@phosphor-icons/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "quote",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "quote",
        message: "",
      });
    }, 1500);
  };


  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-white">
      <Header />

      <main className="flex-grow pt-16">
        {/* 2-Column Layout: Image+Details on Left, Form on Right */}
        <section className="py-16 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Left Column: Image + Contact Details */}
              <div className="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-white/10 flex flex-col">
                {/* Image */}
                <div className="relative h-80 border-b border-gray-200 dark:border-white/10">
                  <Image
                    src="/personOffice.jpg"
                    alt="Get in touch with Kovasure"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Contact Info */}
                <div className="p-8 flex-grow space-y-8">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      Get in Touch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Questions about cargo insurance? Our team is here to help.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] flex-shrink-0">
                        <MapPin size={20} weight="bold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Headquarters</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          4 Etage, Bonaberi, Douala, Cameroon
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] flex-shrink-0">
                        <Phone size={20} weight="bold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Phone</h4>
                        <a
                          href="tel:+237677777777"
                          className="text-sm text-[#0024ff] hover:underline block"
                        >
                          +237 677 77 77 77
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] flex-shrink-0">
                        <EnvelopeSimple size={20} weight="bold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Email</h4>
                        <a
                          href="mailto:support@kovasure.com"
                          className="text-sm text-[#0024ff] hover:underline block"
                        >
                          support@kovasure.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0024ff]/10 flex items-center justify-center text-[#0024ff] flex-shrink-0">
                        <Clock size={20} weight="bold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Business Hours</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Mon - Fri, 9:00 AM - 6:00 PM GMT
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="bg-white dark:bg-gray-900 border-t lg:border-t-0 lg:border-l border-b border-r border-gray-200 dark:border-white/10 p-8 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Fill out the form and we'll get back to you soon.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="text-center py-10 space-y-4 flex-grow flex flex-col justify-center">
                    <CheckCircle size={48} weight="fill" className="text-green-500 mx-auto" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message Sent Successfully</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We've received your message and will respond shortly.
                    </p>
                    <Button variant="primary" size="default" onClick={() => setStatus("idle")}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Subject *
                      </label>
                      <Select name="subject" value={formData.subject} onChange={handleChange} required>
                        <option value="quote">Request a Quote</option>
                        <option value="claim">Claims Support</option>
                        <option value="coverage">Coverage Inquiry</option>
                        <option value="support">General Support</option>
                        <option value="partnership">Partnership</option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="flex w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0024ff] focus:border-[#0024ff] resize-none"
                        placeholder="Tell us about your cargo, route, and what you need covered..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <PaperPlaneRight size={18} weight="bold" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}