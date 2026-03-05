'use client';

import ProductCard from './ProductCard';
import { Product } from '@/lib/products';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="font-body text-lg text-espresso/70">No products found</p>
        </div>
      )}
    </div>
  );
}
