import { Suspense } from 'react';
import ProductsPageClient from './ProductsPageClient';

function ProductsCatalogFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="font-body text-espresso/70">Loading catalog…</div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsCatalogFallback />}>
      <ProductsPageClient />
    </Suspense>
  );
}
