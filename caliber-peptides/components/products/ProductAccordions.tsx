'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductAccordionsProps {
  product: Product;
}

export default function ProductAccordions({
  product,
}: ProductAccordionsProps) {
  const [open, setOpen] = useState<string[]>(['overview']);

  const toggleSection = (section: string) => {
    setOpen((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      {/* Overview Section */}
      <div className="border border-glass rounded-xl overflow-hidden">
        <button
          onClick={() => toggleSection('overview')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-parchment/30 transition-colors"
        >
          <span className="font-body font-semibold text-lg text-espresso">
            Overview
          </span>
          <motion.div
            animate={{ rotate: open.includes('overview') ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown size={20} className="text-sage" />
          </motion.div>
        </button>

        <AnimatePresence>
          {open.includes('overview') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 bg-white border-t border-glass/50">
                <p className="font-body text-espresso/80 leading-relaxed">
                  {product.overview
                    ? product.overview
                    : 'This is a research-grade peptide, lab-verified and tested for purity and quality. Suitable for research purposes only. Each batch includes a Certificate of Analysis with full HPLC testing results.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Research Section */}
      {(product.researchEffects || product.researchFindings) && (
        <div className="border border-glass rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection('research')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-parchment/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="font-body font-semibold text-lg text-espresso">
                Research
              </span>
              {product.researchFindings && (
                <span className="font-mono text-xs font-bold text-sage bg-parchment px-2 py-1 rounded-full">
                  {product.researchFindings.length} studies
                </span>
              )}
            </div>
            <motion.div
              animate={{ rotate: open.includes('research') ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown size={20} className="text-sage" />
            </motion.div>
          </button>

          <AnimatePresence>
            {open.includes('research') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-6 bg-white border-t border-glass/50 space-y-6">
                  {/* Research Effects */}
                  {product.researchEffects && product.researchEffects.length > 0 && (
                    <div>
                      <h3 className="font-body font-semibold text-base text-espresso mb-4">
                        Research Observed Effects
                      </h3>
                      <ul className="space-y-3">
                        {product.researchEffects.map((effect, idx) => (
                          <li key={idx} className="flex gap-3 font-body text-espresso/80">
                            <span className="text-sage font-semibold shrink-0">•</span>
                            <span>{effect}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research Findings */}
                  {product.researchFindings &&
                    product.researchFindings.length > 0 && (
                      <div>
                        <h3 className="font-body font-semibold text-base text-espresso mb-4">
                          Research Findings
                        </h3>
                        <div className="space-y-5">
                          {product.researchFindings.map((finding, idx) => (
                            <div
                              key={idx}
                              className="bg-parchment/50 rounded-xl border border-glass p-5"
                            >
                              <h4 className="font-body font-semibold text-espresso mb-4">
                                {finding.title}
                              </h4>
                              <div className="space-y-3">
                                <div>
                                  <p className="font-body text-xs uppercase tracking-widest text-sage mb-1">
                                    Research Protocol
                                  </p>
                                  <p className="font-body text-sm text-espresso/80">
                                    {finding.protocol}
                                  </p>
                                </div>
                                <div>
                                  <p className="font-body text-xs uppercase tracking-widest text-sage mb-1">
                                    Observed Effects
                                  </p>
                                  <p className="font-body text-sm text-espresso/80">
                                    {finding.effects}
                                  </p>
                                </div>
                                <div>
                                  <p className="font-body text-xs uppercase tracking-widest text-sage mb-1">
                                    Citation
                                  </p>
                                  {finding.citationUrl ? (
                                    <a
                                      href={finding.citationUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-body text-sm text-sage hover:text-espresso transition-colors underline"
                                    >
                                      {finding.citation}
                                    </a>
                                  ) : (
                                    <p className="font-body text-sm text-espresso/80">
                                      {finding.citation}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {!product.researchEffects && !product.researchFindings && (
                    <p className="font-body text-espresso/80">
                      Research into {product.name} continues to show promising
                      applications in various scientific fields. Consult the
                      included documentation for detailed technical
                      specifications.
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* COA Section */}
      <div className="border border-glass rounded-xl overflow-hidden">
        <button
          onClick={() => toggleSection('coa')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-parchment/30 transition-colors"
        >
          <span className="font-body font-semibold text-lg text-espresso">
            Certificate of Analysis
          </span>
          <motion.div
            animate={{ rotate: open.includes('coa') ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown size={20} className="text-sage" />
          </motion.div>
        </button>

        <AnimatePresence>
          {open.includes('coa') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-6 bg-white border-t border-glass/50">
                <Link
                  href={`/coa/${product.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full px-6 py-2.5 border border-sage/50 bg-transparent font-body font-medium text-sage hover:bg-sage/10 hover:border-sage transition-all"
                >
                  <ExternalLink size={18} />
                  View Certificate of Analysis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FAQ Section - below COA */}
      {product.faq && product.faq.length > 0 && (
        <div className="border border-glass rounded-xl overflow-hidden">
          <button
            onClick={() => toggleSection('faq')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-parchment/30 transition-colors"
          >
            <span className="font-body font-semibold text-lg text-espresso">
              Frequently Asked Questions
            </span>
            <motion.div
              animate={{ rotate: open.includes('faq') ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown size={20} className="text-sage" />
            </motion.div>
          </button>

          <AnimatePresence>
            {open.includes('faq') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 py-6 bg-white border-t border-glass/50 space-y-3">
                  {product.faq.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-glass/40 rounded-lg p-4 bg-parchment/30"
                    >
                      <p className="font-body font-semibold text-espresso mb-2">
                        {item.question}
                      </p>
                      <p className="font-body text-sm text-espresso/80">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
