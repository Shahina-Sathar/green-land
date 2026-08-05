"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" bg="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-brand-100 flex items-center justify-center">
                <span className="text-8xl">🛒</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-brand-200/30 -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Your Friendly Neighborhood
            <br />
            <span className="text-brand-700">Supermarket</span>
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed text-lg">
            At <strong>Green Land Super Market</strong>, we believe grocery shopping
            should be a delightful experience. For years, we have been serving our
            community with the freshest produce, finest groceries, and everyday
            essentials.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            We carefully select every product on our shelves, partner with trusted
            brands, and maintain the highest standards of quality and cleanliness. Our
            friendly team is always ready to help with a warm smile, making every visit
            a pleasant one.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            As a proud locally-owned business, we are deeply committed to our community.
            Shopping at Green Land means supporting a business that cares about its
            neighbors and strives to make a positive impact every day.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "1000+", label: "Products" },
              { value: "10+", label: "Years Experience" },
              { value: "5000+", label: "Happy Customers" },
              { value: "50+", label: "Trusted Brands" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-50 rounded-2xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-brand-700">{stat.value}</p>
                <p className="text-sm text-brand-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
