'use client';

import { motion } from 'framer-motion';

export default function AboutStrip() {
  const features = [
    {
      number: '01',
      title: '≥99% Purity',
      description: 'Verified by HPLC and Mass Spectrometry on every single lot.',
    },
    {
      number: '02',
      title: 'Third-Party Tested',
      description: 'Each batch is independently validated for purity, identity, and consistency before it ships.',
    },
    {
      number: '03',
      title: 'Lot-Specific Documentation',
      description: 'Full COA included with every order. Know exactly what you\'re working with.',
    },
    {
      number: '04',
      title: 'Fast, Reliable Fulfillment',
      description: 'Clear communication and dependable shipping — so your research doesn\'t wait.',
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
    <section className="bg-white py-16 md:py-24 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-3">
              Why Caliber Labs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-espresso mb-4">
              Quality You Can Trust
            </h2>
            <p className="font-body text-lg text-espresso/80 mb-6">
              Every lyophilized chemical we ship is produced to remove variables and let your data speak for itself.
            </p>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-l-2 border-sage pl-6"
              >
                <span className="font-mono text-2xl font-semibold text-sage/60 block mb-2">
                  {feature.number}
                </span>
                <h3 className="font-body font-semibold text-espresso mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-espresso/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
