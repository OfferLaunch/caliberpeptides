'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { categories } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

export default function CategoryGrid() {
  const categoryCards = [
    {
      name: 'GHRP',
      description: 'Growth hormone releasing peptides',
      emoji: '📈',
    },
    {
      name: 'BPC Peptides',
      description: 'Body protection compounds',
      emoji: '🛡️',
    },
    {
      name: 'Cognitive',
      description: 'Cognitive enhancement peptides',
      emoji: '🧠',
    },
    {
      name: 'Recovery Peptides',
      description: 'Tissue repair and recovery',
      emoji: '💪',
    },
    {
      name: 'Immune Support',
      description: 'Immune system modulation',
      emoji: '⚡',
    },
    {
      name: 'Specialty',
      description: 'Specialized research peptides',
      emoji: '🔬',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment text-center mb-2">
            Browse by Category
          </h2>
          <p className="font-body text-lg text-parchment/70 text-center max-w-2xl mx-auto">
            Find the right peptides for your research
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categoryCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/products?category=${card.name}`}>
                <div className="bg-[#d1dbcb]/20 rounded-xl p-6 border border-[#d1dbcb] hover:border-[#7d8f78] transition-all h-full group cursor-pointer hover:bg-[#d1dbcb]/30">
                  <div className="text-4xl mb-4">{card.emoji}</div>
                  <h3 className="font-body font-semibold text-lg text-parchment mb-2 group-hover:text-[#7d8f78] transition-colors">
                    {card.name}
                  </h3>
                  <p className="font-body text-sm text-parchment/70 mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center text-[#7d8f78] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Browse</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
