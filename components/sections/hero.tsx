"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/constants/business";

export function Hero() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Green%20Land%20Super%20Market`;

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-white to-surface/60" />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-6"
            >
              {businessInfo.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 leading-tight tracking-tight"
            >
              {businessInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {businessInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a href={`tel:${businessInfo.phone}`}>
                <Button size="lg" variant="default" className="gap-2 shadow-md hover:shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" className="gap-2">
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1543168256-418811576931?w=800&h=600&fit=crop"
                  alt="Green Land Super Market"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0px, 600px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-200/30 rounded-full blur-xl" />
            </motion.div>

            <div className="flex justify-center gap-4 mt-8">
              {["🥬", "🍎", "🧀", "🥛"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
