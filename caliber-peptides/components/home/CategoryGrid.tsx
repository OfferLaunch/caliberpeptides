'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedTabs, type Tab } from '@/components/ui/animated-tabs';
import { ArrowRight } from 'lucide-react';

const categoryCards = [
  { id: 'ghrp', name: 'GHRP', description: 'Growth hormone releasing peptides' },
  { id: 'bpc', name: 'BPC Peptides', description: 'Body protection compounds' },
  { id: 'cognitive', name: 'Cognitive', description: 'Cognitive enhancement peptides' },
  { id: 'recovery', name: 'Recovery Peptides', description: 'Tissue repair and recovery' },
  { id: 'immune', name: 'Immune Support', description: 'Immune system modulation' },
  { id: 'specialty', name: 'Specialty', description: 'Specialized research peptides' },
];

// Placeholder images (Caliber-themed placeholders; replace with real assets when available)
const PLACEHOLDER_IMAGE = 'https://placehold.co/400x240/D1DBCB/F5F2ED?text=Research';
const placeholdersByCategory: Record<string, string> = {
  ghrp: 'https://placehold.co/400x240/7D8F78/F5F2ED?text=GHRP',
  bpc: 'https://placehold.co/400x240/7D8F78/F5F2ED?text=BPC',
  cognitive: 'https://placehold.co/400x240/7D8F78/F5F2ED?text=Cognitive',
  recovery: 'https://placehold.co/400x240/7D8F78/F5F2ED?text=Recovery',
  immune: 'https://placehold.co/400x240/7D8F78/F5F2ED?text=Immune',
  specialty: 'https://placehold.co/400x240/7D8F78/F5F2ED?text=Specialty',
};

const tabs: Tab[] = categoryCards.map((card) => ({
  id: card.id,
  label: card.name,
  content: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <img
        src={placeholdersByCategory[card.id] ?? PLACEHOLDER_IMAGE}
        alt={card.name}
        className="rounded-lg w-full h-52 object-cover border border-glass shadow-sm"
      />
      <div className="flex flex-col gap-3 justify-center">
        <h2 className="font-display text-2xl font-bold text-espresso">
          {card.name}
        </h2>
        <p className="font-body text-espresso/80">
          {card.description}
        </p>
        <Link
          href={`/products?category=${encodeURIComponent(card.name)}`}
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-sage hover:text-sage/80 transition-colors mt-2"
        >
          Browse products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  ),
}));

export default function CategoryGrid() {
  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso text-center mb-2">
            Browse by Category
          </h2>
          <p className="font-body text-lg text-espresso/70 text-center max-w-2xl mx-auto">
            Find the right peptides for your research
          </p>
        </motion.div>

        <AnimatedTabs tabs={tabs} defaultTab={tabs[0]?.id} />
      </div>
    </section>
  );
}
