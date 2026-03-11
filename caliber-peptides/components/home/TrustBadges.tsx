'use client';

import { motion } from 'framer-motion';

export default function TrustBadges() {
  const words = [
    'LABORATORY GRADE',
    'THIRD-PARTY TESTED',
    'RESEARCHER TRUSTED',
    'PURITY VERIFIED',
    'SCIENCE-BACKED',
    'TRANSPARENT SOURCING',
  ];

  // Create a duplicated array for seamless infinite scroll
  const scrollWords = [...words, ...words];

  return (
    <section className="bg-espresso py-12 overflow-hidden">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: 'max-content' }}
        >
          {scrollWords.map((word, idx) => (
            <span
              key={idx}
              className="font-display text-lg md:text-xl font-normal text-parchment tracking-wide flex-shrink-0"
            >
              {word}
              {idx !== scrollWords.length - 1 && (
                <span className="mx-8 text-sage">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
