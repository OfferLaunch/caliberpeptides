'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { CheckCircle, Beaker, Shield, Zap } from 'lucide-react';

export default function AboutStrip() {
  const features = [
    {
      icon: Beaker,
      title: 'Lab Verified',
      description: 'Every batch tested via HPLC',
    },
    {
      icon: CheckCircle,
      title: '99%+ Purity',
      description: 'Consistent quality standards',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Discreet packaging & shipping',
    },
    {
      icon: Zap,
      title: 'Fast Shipping',
      description: 'Same-day processing available',
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
    <section className="bg-parchment py-16 md:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso mb-4">
              Why Choose Caliber?
            </h2>
            <p className="font-body text-lg text-espresso/80 mb-6">
              We're committed to providing researchers with the highest quality peptides
              on the market. Every product is rigorously tested and comes with complete
              documentation.
            </p>
            <p className="font-body text-base text-espresso/70">
              Our team of biochemists ensures consistency, purity, and reliability on every order.
              Founded by researchers, for researchers.
            </p>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#d1dbcb]/20 rounded-lg p-6 border border-[#d1dbcb]"
                >
                  <Icon size={32} className="text-[#7d8f78] mb-4" />
                  <h3 className="font-body font-semibold text-espresso mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-espresso/70">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
