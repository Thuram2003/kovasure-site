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
  ChatCenteredText,
  Globe,
  ShieldCheck,
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

    // Simulate API call
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

  const contactReasons = [
    {
      icon: <ShieldCheck size={24} weight="bold" />,
      title: "Get a Quote",
      description: "Receive a customized insurance quote for your cargo",
    },
    {
      icon: <ChatCenteredText size={24} weight="bold" />,
      title: "Claims Support",
      description: "Get assistance with existing claims or file a new one",
    },
    {
      icon: <Globe size={24} weight="bold" />,
      title: "Coverage Inquiry",
      description: "Learn about our insurance solutions and coverage options",
    },
    {
      icon: <Phone size={24} weight="bold" />,
      title: "General Support",
      description: "Questions about policies, billing, or account management",
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
                  Get in Touch <br />
                  <span className="text-[#0024ff] dark:text-blue-500">with Kovasure</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Have questions about cargo insurance or onboarding? Our expert desk is available to assist you.
                </p>
              </div>
              <div className="md:col-span-5 relative">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/meeting.jpg"
                    alt="Corporate meeting at Kovasure office"
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

        {/* Simplified Contact Reasons */}
        <section className="py-16 px-6 md:px-8 bg-gray-50 dark:bg-gray-900/30 border-b border-gray-100 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactReasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-soft hover:shadow-[0_15px_40px_rgba(0,36,255,0.05)] hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0024ff] to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white shadow-soft">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office info split */}
        <section className="py-24 px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Simplified Contact Form */}
              <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5 shadow-soft relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0024ff] to-[#ffb41d]" />
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">Send Us a Message</h2>
                  <p className="text-gray-500 dark:text-gray-400">Fill out the form and we'll get back to you within 24 hours.</p>
                </div>

                {status === "success" ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-green-50 dark:bg-green-950/20 rounded-full flex items-center justify-center mx-auto border border-green-200 dark:border-green-800">
                      <CheckCircle size={32} weight="fill" className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                      Thank you for contacting us. We'll respond to your inquiry within 24 hours.
                    </p>
                    <Button variant="primary" size="default" onClick={() => setStatus("idle")} className="mt-4">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Full Name *</label>
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
                        <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Email Address *</label>
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

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Company Name</label>
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
                      <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Subject *</label>
                      <Select name="subject" value={formData.subject} onChange={handleChange} required>
                        <option value="quote">Request a Quote</option>
                        <option value="claim">Claims Support</option>
                        <option value="coverage">Coverage Inquiry</option>
                        <option value="support">General Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="flex w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-white/5 rounded-xl text-gray-900 dark:text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0024ff] focus:border-[#0024ff] transition-all disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        placeholder="Tell us about your insurance needs..."
                        rows={4}
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
                        <>Processing...</>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <PaperPlaneRight size={20} weight="bold" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Simplified Contact channels info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Contact Information</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Prefer direct channels? Reach out to our global headquarters directly.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 rounded-3xl p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0024ff]/10 rounded-2xl flex items-center justify-center text-[#0024ff] dark:text-blue-400 flex-shrink-0">
                      <MapPin size={24} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Global Headquarters</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        4 Etage, Bonaberi, Douala, Cameroon
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0024ff]/10 rounded-2xl flex items-center justify-center text-[#0024ff] dark:text-blue-400 flex-shrink-0">
                      <Phone size={24} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Phone Support</h4>
                      <a href="tel:+442071234567" className="text-sm text-[#0024ff] dark:text-blue-400 hover:underline mt-1 block font-semibold">
                        +237 677 77 77 77
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0024ff]/10 rounded-2xl flex items-center justify-center text-[#0024ff] dark:text-blue-400 flex-shrink-0">
                      <EnvelopeSimple size={24} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Email Address</h4>
                      <a href="mailto:support@kovasure.com" className="text-sm text-[#0024ff] dark:text-blue-400 hover:underline mt-1 block font-semibold">
                        support@kovasure.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0024ff]/10 rounded-2xl flex items-center justify-center text-[#0024ff] dark:text-blue-400 flex-shrink-0">
                      <Clock size={24} weight="bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Operating Hours</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM GMT
                      </p>
                    </div>
                  </div>
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
