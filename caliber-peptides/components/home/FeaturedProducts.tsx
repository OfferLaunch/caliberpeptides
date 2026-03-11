'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCatalogCard from '@/components/products/ProductCatalogCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { products } from '@/lib/products';

const ROTATE_INTERVAL_MS = 5000;
const featured = products.filter((p) => p.slug !== 'bac-water');

function buildSlides(perSlide: number) {
  const slides: typeof featured[] = [];
  for (let i = 0; i < featured.length; i += perSlide) {
    slides.push(featured.slice(i, i + perSlide));
  }
  return slides;
}

const mobileSlides = buildSlides(2); // 2 per slide -> 6 slides for 11 products
const desktopSlides = buildSlides(3); // 3 per slide -> 4 slides

export default function FeaturedProducts() {
  const [mobilePage, setMobilePage] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setMobilePage((p) => (p + 1) % mobileSlides.length);
      setDesktopPage((p) => (p + 1) % desktopSlides.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            title="Featured Products"
            subtitle="Lab-verified peptides for research applications"
          />
        </div>

        {/* Mobile only: 2 columns, 6 slides cycling through 11 products */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobilePage}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 gap-4 w-full"
            >
              {mobileSlides[mobilePage]?.map((product) => (
                <ProductCatalogCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-6">
            {mobileSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setMobilePage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === mobilePage ? 'w-6 bg-sage' : 'w-2 bg-sage/40 hover:bg-sage/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3 columns (or 2 on sm), 4 slides */}
        <div className="hidden md:block relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={desktopPage}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {desktopSlides[desktopPage]?.map((product) => (
                <ProductCatalogCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {desktopSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setDesktopPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === desktopPage ? 'w-6 bg-sage' : 'w-2 bg-sage/40 hover:bg-sage/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
