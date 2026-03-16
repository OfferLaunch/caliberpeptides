'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchProducts, products } from '@/lib/products';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCatalogCard from '@/components/products/ProductCatalogCard';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query ? searchProducts(query) : [];
  const hasResults = results.length > 0;

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
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Search Header */}
        <section className="bg-white border-b border-glass py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-sage">
                Search Results
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-espresso mb-2">
              {query ? `Results for "${query}"` : 'Search Products'}
            </h1>
            <p className="font-body text-lg text-espresso/70">
              {hasResults
                ? `Found ${results.length} product${results.length !== 1 ? 's' : ''}`
                : query
                ? 'No products matched your search'
                : 'Enter a search term to find products'}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Matching Products - product cards */}
          {hasResults && (
            <div className="mb-16">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-normal text-espresso mb-2">
                  Matching Products
                </h2>
                <p className="font-body text-espresso/70">
                  Click any product below to view details
                </p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {results.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCatalogCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

        {/* No Results Message */}
        {!hasResults && query && (
          <div className="text-center py-12 mb-16">
            <h2 className="font-display text-2xl font-normal text-espresso mb-4">
              No Results Found
            </h2>
            <p className="font-body text-lg text-espresso/70 mb-6">
              We couldn't find any products matching "{query}". Try a different search term or browse the full catalog below.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-lg font-body font-medium hover:bg-navy/90 transition-all"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Full Product Catalog */}
        <div>
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-2">
              All Products
            </span>
            <h2 className="font-display text-3xl font-normal text-espresso">
              {hasResults ? 'Complete Product Catalog' : 'Browse All Products'}
            </h2>
          </div>

          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex items-center justify-between p-4 rounded-lg bg-white border border-glass hover:border-sage hover:bg-parchment/30 transition-all"
                >
                  <div className="flex-1">
                    <div className="font-body font-semibold text-espresso group-hover:text-sage transition-colors">
                      {product.name}
                    </div>
                    <div className="font-body text-xs text-espresso/60 mt-1">
                      {product.category} • ${product.price.toFixed(2)}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-sage ml-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
