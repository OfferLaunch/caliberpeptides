'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ProductCard from '@/components/products/ProductCard';
import { getProductBySlug, products } from '@/lib/products';
import { ArrowLeft, Download } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [activeTab, setActiveTab] = useState<'overview' | 'research' | 'coa'>(
    'overview'
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-parchment flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-espresso mb-4">
              Product Not Found
            </h1>
            <Link href="/products">
              <Button variant="primary">Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link href="/products" className="inline-flex items-center gap-2 text-sage hover:text-espresso transition-colors mb-8">
            <ArrowLeft size={20} />
            <span className="font-body font-medium">Back to Products</span>
          </Link>

          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="h-80 bg-glass/50 rounded-2xl flex items-center justify-center">
              <span className="text-espresso/40 text-center">
                {product.name}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="sage">{product.category}</Badge>
                <Badge variant="espresso">{product.form}</Badge>
              </div>

              <h1 className="font-display text-4xl font-bold text-espresso mb-4">
                {product.name}
              </h1>

              <p className="font-body text-lg text-espresso/80 mb-6">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-4xl font-bold text-espresso">
                  ${product.price.toFixed(2)}
                </span>
                <Badge variant="sage">{product.purity}% Purity</Badge>
              </div>

              <div className="space-y-3 mb-8">
                <p className="font-body text-sm text-espresso/70">
                  <strong>Specifications:</strong> {product.specs}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="flex-1">
                  <Button variant="primary" size="lg" className="w-full">
                    Buy Now
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="flex-1">
                  Download COA
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-12">
            <div className="flex border-b border-glass mb-8">
              {(['overview', 'research', 'coa'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-body font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-sage border-b-2 border-sage'
                      : 'text-espresso/70 hover:text-espresso'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-glass/30 rounded-xl p-8">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <h3 className="font-body font-bold text-lg text-espresso">
                    Product Overview
                  </h3>
                  <p className="font-body text-espresso/80">
                    This is a research-grade peptide, lab-verified and tested for purity
                    and quality. Suitable for research purposes only.
                  </p>
                  <p className="font-body text-espresso/80">
                    Each batch includes a Certificate of Analysis with full HPLC testing
                    results.
                  </p>
                </div>
              )}

              {activeTab === 'research' && (
                <div className="space-y-4">
                  <h3 className="font-body font-bold text-lg text-espresso">
                    Research Notes
                  </h3>
                  <p className="font-body text-espresso/80">
                    Research into {product.name} continues to show promising applications
                    in various scientific fields. Consult the included documentation for
                    detailed technical specifications.
                  </p>
                </div>
              )}

              {activeTab === 'coa' && (
                <div className="space-y-4">
                  <h3 className="font-body font-bold text-lg text-espresso mb-4">
                    Certificate of Analysis
                  </h3>
                  <div className="bg-parchment rounded-lg p-6 border border-glass">
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between">
                        <span>Purity:</span>
                        <strong>{product.purity}%</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Form:</span>
                        <strong>{product.form}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Batch:</span>
                        <strong>CP-{product.id}-2024</strong>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-sage hover:text-espresso transition-colors font-body font-medium mt-4">
                    <Download size={20} />
                    Download PDF
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-bold text-espresso mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
