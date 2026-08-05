"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { testimonials } from "@/constants/testimonials";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bg="surface">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-600 font-semibold text-sm uppercase tracking-wider"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-neutral-500 max-w-2xl mx-auto"
        >
          Don&apos;t just take our word for it — hear from our happy customers.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-accent text-accent"
                />
              ))}
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              &ldquo;{testimonial.review}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="font-medium text-neutral-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-neutral-400">Regular Customer</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
