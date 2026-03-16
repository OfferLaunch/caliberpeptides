'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PillButton } from '@/components/ui/PillButton';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full bg-white text-espresso py-12 lg:py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-sage/5 via-transparent to-transparent pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(125, 143, 120, 0.08), transparent 70%)',
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-4 lg:py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: copy + CTA */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <span className="font-mono text-xs uppercase tracking-widest text-sage">
                Research-Grade Compounds
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-xl tracking-tight font-normal leading-tight mx-auto lg:mx-0">
                Your research is only as good as your source.
              </h1>

              <p className="font-body text-base md:text-lg leading-relaxed tracking-tight text-espresso/80 max-w-2xl mx-auto lg:mx-0">
                Every compound in the Caliber Labs catalog is independently tested, fully documented, and produced under strict quality controls. Because serious research demands serious materials.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/products">
                <PillButton variant="solid" size="lg" className="font-bold">
                  Shop Now
                </PillButton>
              </Link>
            </motion.div>
          </div>

          {/* Right: lab image */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] rounded-2xl overflow-hidden border border-glass/60 shadow-lg order-1 lg:order-2"
          >
            <Image
              src="/images/hero-lab.png"
              alt="Lab research and quality control at Caliber Labs"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
