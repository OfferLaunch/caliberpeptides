'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { PillButton } from '@/components/ui/PillButton';
import AddToCartModal from '@/components/cart/AddToCartModal';

interface ProductCatalogCardProps {
  product: Product;
}

const catalogImagePath = (slug: string) => `/images/catalog/${slug}.png`;

export default function ProductCatalogCard({ product }: ProductCatalogCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-[#E8E0D5] rounded-xl border border-glass overflow-hidden flex flex-col aspect-[4/5] w-full shadow-md">
        {/* Top: name, compound name, from price, Learn More - all centered */}
        <div className="flex flex-col flex-1 min-h-0 p-4 items-center text-center">
          {/* Clean name at top */}
          <h3 className="font-body font-bold text-lg text-espresso mb-0.5 shrink-0">
            {product.name}
          </h3>
          {/* Single line below name: custom subtitle or category */}
          <p className="font-body text-sm font-medium text-espresso/80 mb-0 shrink-0">
            {product.catalogSubtitle ?? product.category}
          </p>
          {/* from $pricing - no gap above */}
          <span className="font-body text-base font-semibold text-espresso shrink-0">
            from ${product.price.toFixed(2)}
          </span>
          <Link href={`/products/${product.slug}`} className="shrink-0 mt-2">
            <PillButton variant="solid" size="default" className="font-bold w-fit">
              Learn More
            </PillButton>
          </Link>
        </div>

        {/* Product PNG - consistent frame like Epitalon: padded, bottom-aligned */}
        <Link
          href={`/products/${product.slug}`}
          className="relative w-full flex-1 min-h-0 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer block flex items-end justify-center px-4 pb-2 pt-1"
        >
          <Image
            src={catalogImagePath(product.slug)}
            alt={product.name}
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal
        product={product}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
