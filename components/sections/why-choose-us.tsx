"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  PiggyBank,
  ShieldCheck,
  Smile,
  ClipboardCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { features } from "@/constants/features";

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  "piggy-bank": PiggyBank,
  "shield-check": ShieldCheck,
  smile: Smile,
  "clipboard-check": ClipboardCheck,
  sparkles: Sparkles,
};

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors duration-300">
        {Icon && <Icon className="w-7 h-7 text-brand-600" />}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" bg="surface">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-600 font-semibold text-sm uppercase tracking-wider"
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
        >
          What Makes Us Different
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-neutral-500 max-w-2xl mx-auto"
        >
          We go the extra mile to ensure your shopping experience is nothing short of
          exceptional.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.icon} {...feature} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
