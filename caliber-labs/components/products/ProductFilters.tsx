'use client';

import { categories } from '@/lib/products';

interface ProductFiltersProps {
  selectedCategory?: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-lg text-espresso mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-all border ${
              !selectedCategory
                ? 'bg-[#7d8f78] text-white border-[#7d8f78]'
                : 'bg-[#d1dbcb]/30 text-espresso hover:bg-[#d1dbcb]/50 border-[#d1dbcb]'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#7d8f78] text-white border-[#7d8f78]'
                  : 'bg-[#d1dbcb]/30 text-espresso hover:bg-[#d1dbcb]/50 border-[#d1dbcb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
