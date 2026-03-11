import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoaSearch from '@/components/coa/CoaSearch';
import { getProductBySlug, products } from '@/lib/products';
import { ChevronLeft } from 'lucide-react';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

interface CoaProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoaProductPage({ params }: CoaProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-espresso mb-4">
              Product not found
            </h1>
            <Link
              href="/coa"
              className="inline-block font-body font-semibold text-sage hover:underline"
            >
              ← Back to COA
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/coa"
            className="inline-flex items-center gap-1 font-body text-sm text-espresso/70 hover:text-sage transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to all COAs
          </Link>

          {/* Product header: small square image left + name */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-parchment border-2 border-sage">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-display text-3xl font-normal text-espresso">
                {product.name}
              </h1>
              <p className="font-mono text-sm text-espresso/70 mt-1">
                Certificate of Analysis
              </p>
            </div>
          </div>

          <CoaSearch />
        </div>
      </div>
      <Footer />
    </>
  );
}
