"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./section-wrapper";
import { businessInfo } from "@/constants/business";

export function Contact() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Green%20Land%20Super%20Market`;

  return (
    <SectionWrapper id="contact" bg="white">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-600 font-semibold text-sm uppercase tracking-wider"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
        >
          Visit Us Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-neutral-500 max-w-2xl mx-auto"
        >
          We&apos;d love to see you. Drop by or reach out — we&apos;re here to help.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-surface rounded-2xl p-6 space-y-5">
            {[
              {
                icon: MapPin,
                label: "Our Address",
                value: businessInfo.address,
              },
              {
                icon: Phone,
                label: "Phone",
                value: businessInfo.phone,
                href: `tel:${businessInfo.phone}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: businessInfo.email,
                href: `mailto:${businessInfo.email}`,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-neutral-900 hover:text-brand-700 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-neutral-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Business Hours</p>
              </div>
            </div>
            <div className="space-y-2 ml-[60px]">
              {businessInfo.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-neutral-700">{h.day}</span>
                  <span className="font-medium text-neutral-900">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button size="lg" variant="default" className="w-full gap-3 shadow-md">
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-neutral-100">
            <iframe
              src={businessInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Green Land Super Market Location"
              className="w-full h-full"
            />
          </div>
          <div className="mt-6 bg-brand-800 text-white rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold mb-1">
              We Can&apos;t Wait to Welcome You!
            </p>
            <p className="text-sm text-brand-200">
              Visit Green Land Super Market for the freshest products and friendliest service in town.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
