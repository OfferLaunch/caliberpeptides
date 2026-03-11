'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductSidebar from '@/components/products/ProductSidebar';
import ProductCatalogCard from '@/components/products/ProductCatalogCard';
import { products, categories } from '@/lib/products';

export default function ProductsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const productFromUrl = searchParams.get('product');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Sync state from URL on load and when URL changes (e.g. from nav dropdown)
  useEffect(() => {
    if (categoryFromUrl !== null) {
      const valid = categories.includes(categoryFromUrl);
      setSelectedCategory(valid ? categoryFromUrl : null);
      setSelectedProduct(null);
    } else if (productFromUrl !== null) {
      const product = products.find((p) => p.slug === productFromUrl);
      if (product) {
        setSelectedCategory(product.category);
        setSelectedProduct(product.slug);
      } else {
        setSelectedCategory(null);
        setSelectedProduct(null);
      }
    } else {
      setSelectedCategory(null);
      setSelectedProduct(null);
    }
  }, [categoryFromUrl, productFromUrl]);

  const updateUrl = useCallback(
    (category: string | null, product: string | null) => {
      const params = new URLSearchParams();
      if (product) params.set('product', product);
      if (category) params.set('category', category);
      router.replace(`/products${params.toString() ? `?${params.toString()}` : ''}`);
    },
    [router]
  );

  const handleCategorySelect = useCallback(
    (cat: string | null) => {
      setSelectedCategory(cat);
      setSelectedProduct(null);
      updateUrl(cat, null);
    },
    [updateUrl]
  );

  const handleProductSelect = useCallback(
    (slug: string | null) => {
      setSelectedProduct(slug);
      const product = products.find((p) => p.slug === slug);
      setSelectedCategory(product?.category ?? null);
      updateUrl(product?.category ?? null, slug);
    },
    [updateUrl]
  );

  // When a specific product is selected, show only that product; otherwise filter by category
  const displayedProducts = selectedProduct
    ? products.filter((p) => p.slug === selectedProduct)
    : selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-sage block mb-2">
              Research Products
            </span>
            <h1 className="font-display text-5xl font-normal text-espresso mb-3">
              Product Catalog
            </h1>
            <p className="font-body text-lg text-espresso/70">
              Browse our complete collection of research-grade peptides
            </p>
          </div>

          {/* Main Layout: Sidebar + Grid */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="sticky top-24 w-64 border border-glass rounded-lg overflow-hidden">
                <ProductSidebar
                  selectedCategory={selectedCategory}
                  selectedProduct={selectedProduct}
                  onCategorySelect={handleCategorySelect}
                  onProductSelect={handleProductSelect}
                />
              </div>
            </div>

            {/* Right Content - Products Grid */}
            <div className="flex-1 min-w-0">
              {/* Mobile Sidebar */}
              <div className="lg:hidden mb-8 border border-glass rounded-lg overflow-hidden">
                <ProductSidebar
                  selectedCategory={selectedCategory}
                  selectedProduct={selectedProduct}
                  onCategorySelect={handleCategorySelect}
                  onProductSelect={handleProductSelect}
                />
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCatalogCard key={product.id} product={product} />
                ))}
              </div>

              {displayedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="font-body text-lg text-espresso/70">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
