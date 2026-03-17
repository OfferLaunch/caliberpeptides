'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/products';
import QuantitySelector from './QuantitySelector';
import { PillButton } from '@/components/ui/PillButton';

interface StickyPurchaseBarProps {
  product: Product;
  quantity: number;
  onQuantityChange: (n: number) => void;
  onAddToCart: () => void;
  added: boolean;
  visible: boolean;
}

export default function StickyPurchaseBar({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  added,
  visible,
}: StickyPurchaseBarProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-glass shadow-[0_-4px_24px_rgba(45,36,30,0.08)] px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Product Name & Price */}
            <div className="flex-1 min-w-0">
              <h3 className="font-body font-semibold text-sm sm:text-base text-espresso truncate">
                {product.name}
              </h3>
              <p className="font-body text-sm sm:text-base font-semibold text-espresso">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Center: Quantity Selector */}
            <div className="flex-shrink-0">
              <QuantitySelector
                value={quantity}
                onChange={onQuantityChange}
                size="sm"
              />
            </div>

            {/* Right: Add to Cart Button */}
            <div className="flex-shrink-0">
              <PillButton
                variant="solid"
                size="sm"
                onClick={onAddToCart}
                className="whitespace-nowrap border-2 border-white text-white"
              >
                {added ? '✓ Added' : 'Add to Cart'}
              </PillButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
