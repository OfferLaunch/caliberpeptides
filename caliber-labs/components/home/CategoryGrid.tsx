'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedTabs, type Tab } from '@/components/ui/animated-tabs';
import { ArrowRight } from 'lucide-react';

const categoryCards = [
  { id: 'ghrp', name: 'GHRP', description: 'Growth hormone releasing compounds', image: '/images/categories/ghrp.png' },
  { id: 'bpc', name: 'BPC Compounds', description: 'Body protection compounds', image: '/images/categories/bpc.png' },
  { id: 'cognitive', name: 'Cognitive', description: 'Cognitive enhancement compounds', image: '/images/categories/cognitive.png' },
  { id: 'recovery', name: 'Recovery', description: 'Tissue repair and recovery', image: '/images/categories/recovery.png' },
  { id: 'immune', name: 'Immune Support', description: 'Immune system modulation', image: '/images/categories/immune.png' },
  { id: 'specialty', name: 'Specialty', description: 'Specialized research compounds', image: '/images/categories/specialty.png' },
];

const gradientsByCategory: Record<string, string> = {
  ghrp: 'bg-gradient-to-br from-sage/30 to-glass/40',
  bpc: 'bg-gradient-to-br from-sage/30 to-glass/40',
  cognitive: 'bg-gradient-to-br from-sage/30 to-glass/40',
  recovery: 'bg-gradient-to-br from-sage/30 to-glass/40',
  immune: 'bg-gradient-to-br from-sage/30 to-glass/40',
  specialty: 'bg-gradient-to-br from-sage/30 to-glass/40',
};

function CategoryTabContent({ card }: { card: (typeof categoryCards)[0] }) {
  const gradientClass = gradientsByCategory[card.id] ?? 'bg-gradient-to-br from-sage/30 to-glass/40';
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full min-w-0">
      <div
        className={`relative rounded-lg w-full min-w-0 aspect-[5/4] border border-glass shadow-sm overflow-hidden flex items-center justify-center ${gradientClass}`}
      >
        {card.image && (
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 justify-center min-w-0">
        <h2 className="font-display text-2xl sm:text-3xl font-normal text-espresso break-words">
          {card.name}
        </h2>
        <p className="font-body text-base sm:text-lg text-espresso/80 leading-relaxed break-words">
          {card.description}
        </p>
        <Link
          href={`/products?category=${encodeURIComponent(card.name)}`}
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-sage hover:text-sage/80 transition-colors mt-2 w-fit"
        >
          Browse products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

const tabs: Tab[] = categoryCards.map((card) => ({
  id: card.id,
  label: card.name,
  content: <CategoryTabContent card={card} />,
}));

export default function CategoryGrid() {
  return (
    <section className="bg-[#F5F2ED] py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-sage block text-center mb-3">
            Browse by Category
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-espresso text-center">
            Find the Right Compounds
          </h2>
        </motion.div>

        {/* Tabs in 3+3 grid, centered, not full width */}
        <div className="max-w-5xl mx-auto">
          <AnimatedTabs tabs={tabs} defaultTab={tabs[0]?.id} tabStripLayout="grid" />
        </div>
      </div>
    </section>
  );
}
