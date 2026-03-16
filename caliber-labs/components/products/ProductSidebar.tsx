'use client';

import { categories, products } from '@/lib/products';
import { cn } from '@/lib/utils';

interface ProductSidebarProps {
  selectedCategory: string | null;
  selectedProduct: string | null;
  onCategorySelect: (category: string | null) => void;
  onProductSelect: (productSlug: string | null) => void;
}

export default function ProductSidebar({
  selectedCategory,
  selectedProduct,
  onCategorySelect,
  onProductSelect,
}: ProductSidebarProps) {
  const categorizedProducts = categories.map((cat) => ({
    category: cat,
    items: products.filter((p) => p.category === cat),
  }));

  return (
    <div className="w-full lg:w-64 bg-white">
      {/* All Products */}
      <button
        onClick={() => {
          onCategorySelect(null);
          onProductSelect(null);
        }}
        className={cn(
          'w-full text-left px-4 py-3 font-body text-sm transition-colors border-b border-glass',
          selectedCategory === null && selectedProduct === null
            ? 'text-sage font-bold'
            : 'text-espresso/60 hover:text-espresso'
        )}
      >
        All Products
      </button>

      {/* Categories - Always Expanded */}
      <div className="space-y-0">
        {categorizedProducts.map((cat) => (
          <div key={cat.category} className="border-b border-glass">
            {/* Category Header */}
            <button
              onClick={() => {
                onCategorySelect(cat.category);
                onProductSelect(null);
              }}
              className={cn(
                'w-full text-left px-4 py-3 font-body text-sm transition-colors',
                selectedCategory === cat.category && selectedProduct === null
                  ? 'text-sage font-bold'
                  : 'text-espresso font-semibold'
              )}
            >
              {cat.category}
            </button>

            {/* Products in Category - Always Visible */}
            <div className="bg-espresso/2 space-y-0">
              {cat.items.map((product) => (
                <button
                  key={product.slug}
                  onClick={() => {
                    onCategorySelect(cat.category);
                    onProductSelect(product.slug);
                  }}
                  className={cn(
                    'w-full text-left px-6 py-2 font-body text-xs transition-colors border-l-2',
                    selectedProduct === product.slug
                      ? 'border-l-sage text-sage font-bold bg-sage/5'
                      : 'border-l-transparent text-espresso/60 hover:text-espresso'
                  )}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
