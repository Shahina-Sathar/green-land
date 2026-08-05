"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { galleryImages } from "@/constants/gallery";

export function Gallery() {
  return (
    <SectionWrapper id="gallery" bg="white">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-600 font-semibold text-sm uppercase tracking-wider"
        >
          Our Store
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
        >
          Take a Look Inside
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-neutral-500 max-w-2xl mx-auto"
        >
          See our clean, well-organized store designed for a pleasant shopping
          experience.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-2xl overflow-hidden shadow-sm group ${
              index === 0 || index === 3 ? "col-span-2" : ""
            }`}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
