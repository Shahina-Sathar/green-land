"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Badge } from "@/components/ui/badge";
import { products } from "@/constants/products";

export function FeaturedProducts() {
  return (
    <SectionWrapper id="products" bg="surface">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-600 font-semibold text-sm uppercase tracking-wider"
        >
          Featured Products
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
        >
          Popular Items This Week
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-neutral-500 max-w-2xl mx-auto"
        >
          Check out some of our most-loved products, always fresh and in stock.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-square overflow-hidden bg-neutral-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-medium text-neutral-900 text-sm leading-snug">
                  {product.name}
                </h3>
              </div>
              <p className="text-brand-700 font-semibold text-sm mb-3">
                {product.price}
              </p>
              <Badge variant="default" className="text-[11px]">
                Available In Store
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
