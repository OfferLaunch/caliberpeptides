'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';

interface AddToCartModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function AddToCartModal({
  product,
  isOpen,
  onClose,
}: AddToCartModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      slug: product.slug,
    });
    setQuantity(1);
    onClose();
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/70 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-espresso/50 hover:text-espresso transition-colors"
              >
                <X size={24} />
              </button>

              {/* Product Info */}
              <h2 className="font-display text-2xl font-normal text-espresso mb-2">
                {product.name}
              </h2>
              <p className="font-body text-lg text-sage font-semibold mb-6">
                ${product.price.toFixed(2)} each
              </p>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="font-body text-sm font-medium text-espresso block mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 rounded-lg border border-glass hover:bg-glass/50 transition-colors"
                  >
                    <Minus size={18} className="text-espresso" />
                  </button>

                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val > 0) setQuantity(val);
                    }}
                    className="w-20 text-center font-mono text-xl font-bold text-espresso border border-glass rounded-lg py-2"
                  />

                  <button
                    onClick={incrementQuantity}
                    className="p-2 rounded-lg border border-glass hover:bg-glass/50 transition-colors"
                  >
                    <Plus size={18} className="text-espresso" />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mb-8 p-4 bg-glass/30 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-espresso/70">Total:</span>
                  <span className="font-body text-xl font-semibold text-espresso">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <PillButton
                  variant="outline"
                  size="default"
                  className="flex-1"
                  onClick={onClose}
                >
                  Cancel
                </PillButton>
                <PillButton
                  variant="solid"
                  size="default"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </PillButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
