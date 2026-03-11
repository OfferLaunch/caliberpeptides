'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCatalogCard from '@/components/products/ProductCatalogCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { products } from '@/lib/products';

const ROTATE_INTERVAL_MS = 5000;

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.slug !== 'bac-water');
  const size = 3;
  const slides: typeof featured[] = [];
  for (let i = 0; i < featured.length; i += size) {
    const chunk = featured.slice(i, i + size);
    if (chunk.length < size && featured.length >= size) {
      chunk.push(...featured.slice(0, size - chunk.length));
    }
    slides.push(chunk);
  }
  const [page, setPage] = useState(0);
  const currentSlide = slides[page % slides.length] ?? slides[0];

  useEffect(() => {
    const t = setInterval(() => {
      setPage((p) => (p + 1) % slides.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            title="Featured Products"
            subtitle="Lab-verified peptides for research applications"
          />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {currentSlide.map((product) => (
                <ProductCatalogCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page % slides.length
                  ? 'w-6 bg-sage'
                  : 'w-2 bg-sage/40 hover:bg-sage/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
