'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import SectionHeader from '@/components/ui/SectionHeader';
import { products } from '@/lib/products';

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParam || null
  );

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Product Catalog"
            subtitle="Browse our complete collection of research-grade peptides"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            {/* Filters - Desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Filters */}
              <div className="lg:hidden mb-8">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>

              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPageContent />
    </Suspense>
  );
}
