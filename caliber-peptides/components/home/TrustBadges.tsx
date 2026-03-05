'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import { CheckCircle, Beaker, Truck, FileText } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: Beaker, label: 'HPLC Verified' },
    { icon: CheckCircle, label: '99%+ Purity' },
    { icon: Truck, label: 'USA Warehouse' },
    { icon: FileText, label: 'COA Included' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-parchment py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {badges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center justify-center gap-3 p-4 bg-[#d1dbcb]/40 rounded-lg border border-[#d1dbcb]"
              >
                <Icon size={20} className="text-[#7d8f78] flex-shrink-0" />
                <span className="font-mono text-sm font-semibold text-espresso">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
