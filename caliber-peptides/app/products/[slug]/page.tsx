'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PillButton } from '@/components/ui/PillButton';
import Badge from '@/components/ui/Badge';
import ProductCatalogCard from '@/components/products/ProductCatalogCard';
import QuantitySelector from '@/components/products/QuantitySelector';
import ProductTrustBadges from '@/components/products/ProductTrustBadges';
import ProductAccordions from '@/components/products/ProductAccordions';
import { getProductBySlug, products } from '@/lib/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  // State
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [relatedIndex, setRelatedIndex] = useState(0);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-espresso mb-4">
              Product Not Found
            </h1>
            <Link href="/products">
              <PillButton variant="solid">Back to Products</PillButton>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Same category first, then fill to 3 from rest so we always show 3
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const others = products.filter((p) => p.id !== product.id && !sameCategory.some((s) => s.id === p.id));
  const relatedProducts = [...sameCategory, ...others].slice(0, 3);

  // Reset related carousel when product changes
  useEffect(() => {
    setRelatedIndex(0);
  }, [slug]);

  // Mobile related products: auto-advance every 5s
  useEffect(() => {
    if (relatedProducts.length <= 1) return;
    const id = setInterval(() => {
      setRelatedIndex((i) => (i + 1) % relatedProducts.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slug, relatedProducts.length]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile-only disclaimer */}
          <p className="lg:hidden font-body text-sm text-espresso/80 mb-6 py-3 px-4 rounded-lg bg-parchment/60 border border-glass">
            Research Use Only: All products currently listed on this site are for research purposes ONLY.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-espresso/70 mb-8">
            <Link href="/products" className="hover:text-espresso transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-espresso transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-espresso font-medium">{product.name}</span>
          </div>

          {/* Hero Section - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            {/* Left: Image Card */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-3xl bg-white shadow-sm border border-glass/60 p-6 aspect-square flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Right: Product Info & Purchase */}
            <div className="flex flex-col justify-center">
              {/* Category & Form */}
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="sage">{product.category}</Badge>
                <Badge variant="espresso">{product.form}</Badge>
              </div>

              {/* Product Name */}
              <h1 className="font-display text-4xl font-normal text-espresso mb-4">
                {product.name}
              </h1>

              {/* Description */}
              <p className="font-body text-lg text-espresso/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="font-body text-3xl font-semibold text-espresso">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Vial size: MG value + Single Vial (IBM bold, sage outline) */}
              <div className="mb-8 flex flex-wrap items-center gap-3">
                {product.vialMg && (
                  <span className="font-body text-lg font-semibold text-espresso">
                    {product.vialMg}
                  </span>
                )}
                <span className="font-mono font-bold text-espresso border-2 border-sage rounded-full px-4 py-2 inline-block">
                  Single Vial
                </span>
              </div>

              {/* Quantity Selector & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  size="default"
                />
                <PillButton
                  variant="solid"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  {added ? '✓ Added to Cart' : 'Add to Cart'}
                </PillButton>
              </div>

              {/* Trust Badges */}
              <ProductTrustBadges />
            </div>
          </div>

          {/* Accordions Section */}
          <div className="mb-16">
            <ProductAccordions product={product} />
          </div>

          {/* Related Products - mobile: 1 card, auto-rotate every 5s; desktop: 3-column grid */}
          <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
            <h2 className="font-display text-3xl font-normal text-espresso mb-8">
              Related Products
            </h2>
            {/* Mobile: single card carousel with 5s interval */}
            <div className="lg:hidden overflow-hidden">
              {relatedProducts.length > 0 && (
                <div className="relative">
                  <ProductCatalogCard product={relatedProducts[relatedIndex]} />
                  {relatedProducts.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {relatedProducts.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`View related product ${i + 1}`}
                          onClick={() => setRelatedIndex(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === relatedIndex ? 'w-6 bg-sage' : 'w-2 bg-sage/40'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* Desktop: 3-column grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCatalogCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
