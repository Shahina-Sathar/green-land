"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { categories } from "@/constants/categories";

export function Categories() {
  return (
    <SectionWrapper id="categories" bg="white">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-600 font-semibold text-sm uppercase tracking-wider"
        >
          Shop by Category
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
        >
          Everything You Need
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-neutral-500 max-w-2xl mx-auto"
        >
          From fresh produce to household essentials, we have it all under one roof.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm cursor-pointer"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-white font-semibold text-lg sm:text-xl">
                {category.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
