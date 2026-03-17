'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What makes Caliber Labs different?',
      answer:
        'We test every lot by HPLC and Mass Spectrometry, provide lot-specific documentation with every order, and hold every product to a ≥99% purity standard. No guesswork, no shortcuts.',
    },
    {
      question: 'Are your products intended for human or veterinary use?',
      answer:
        'No. All lyophilized chemicals are for research use only and must not be consumed or administered in any form.',
    },
    {
      question: 'Who is eligible to purchase from Caliber Labs?',
      answer:
        'Our products are available exclusively to qualified researchers, institutions, and laboratories conducting lawful scientific research. By placing an order, customers affirm they are purchasing for research purposes only and understand that our lyophilized chemicals are not approved by the FDA for clinical or personal use.',
    },
    {
      question: 'Do you require verification for orders?',
      answer:
        'We reserve the right to request documentation confirming affiliation with a research organisation, educational institution, or laboratory. Orders to residential addresses may be reviewed manually to ensure compliance with our Terms of Sale.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-espresso mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-espresso/80">
            Everything you need to know about Caliber Labs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-glass rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === idx ? null : idx)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#d1dbcb]/30 transition-colors"
              >
                <span className="font-body font-semibold text-espresso text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expanded === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    size={20}
                    className="text-sage"
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 bg-[#d1dbcb]/10 border-t border-glass">
                      <p className="font-body text-espresso/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
