import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoaSearch from '@/components/coa/CoaSearch';
import SectionHeader from '@/components/ui/SectionHeader';
import { products } from '@/lib/products';
import { ChevronRight } from 'lucide-react';

export default function CoaPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Certificate of Analysis"
            subtitle="View lab test results by product"
            align="center"
          />

          {/* Product list: image (small square) + name + VIEW COA */}
          <div className="mt-10 space-y-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/coa/${product.slug}`}
                className="flex items-center gap-4 w-full rounded-xl border border-glass bg-white p-4 hover:border-sage hover:bg-parchment/30 transition-all group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-parchment border border-glass">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-body font-semibold text-espresso flex-1">
                  {product.name}
                </span>
                <span className="font-mono text-sm font-semibold text-sage group-hover:underline flex items-center gap-1">
                  VIEW COA
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <CoaSearch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
