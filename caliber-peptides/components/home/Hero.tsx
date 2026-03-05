'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="bg-espresso text-parchment py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso to-espresso/95 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <Image
              src="/logos/Full Logos/All Oatmeal Full.png"
              alt="Caliber Peptides"
              width={56}
              height={56}
              style={{ width: 'auto', height: '56px' }}
              priority
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Precision. Purity. Research.
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-body text-lg md:text-xl text-parchment/90 mb-8 max-w-2xl mx-auto">
              Lab-verified peptides for serious researchers. HPLC tested, 99%+ purity,
              shipped same-day from our USA warehouse.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
            <a href="https://shop.example.com" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                View Catalog
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
