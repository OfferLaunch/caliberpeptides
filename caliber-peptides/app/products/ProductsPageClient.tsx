'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductSidebar from '@/components/products/ProductSidebar';
import ProductCatalogCard from '@/components/products/ProductCatalogCard';
import { products, categories, searchProducts } from '@/lib/products';

export default function ProductsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const productFromUrl = searchParams.get('product');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [mobileSearch, setMobileSearch] = useState('');

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

  // Desktop: sidebar/URL filtering
  const displayedProductsDesktop = selectedProduct
    ? products.filter((p) => p.slug === selectedProduct)
    : selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products;

  // Mobile: search by product name or type (category)
  const displayedProductsMobile = mobileSearch.trim()
    ? searchProducts(mobileSearch)
    : products;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
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

          {/* Mobile: search bar only (no sidebar list) */}
          <div className="lg:hidden mb-6">
            <input
              type="text"
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              placeholder="Search by product name or type"
              className="w-full px-4 py-3 rounded-lg border border-glass font-body text-espresso placeholder:text-espresso/50 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
              aria-label="Search by product name or type"
            />
          </div>

          {/* Desktop: Main Layout Sidebar + Grid */}
          <div className="hidden lg:flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="sticky top-24 w-64 border border-glass rounded-lg overflow-hidden">
                <ProductSidebar
                  selectedCategory={selectedCategory}
                  selectedProduct={selectedProduct}
                  onCategorySelect={handleCategorySelect}
                  onProductSelect={handleProductSelect}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-3 gap-6">
                {displayedProductsDesktop.map((product) => (
                  <ProductCatalogCard key={product.id} product={product} />
                ))}
              </div>
              {displayedProductsDesktop.length === 0 && (
                <div className="text-center py-12">
                  <p className="font-body text-lg text-espresso/70">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: 2-column grid only */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {displayedProductsMobile.map((product) => (
                <ProductCatalogCard key={product.id} product={product} />
              ))}
            </div>
            {displayedProductsMobile.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-lg text-espresso/70">
                  No products match your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
