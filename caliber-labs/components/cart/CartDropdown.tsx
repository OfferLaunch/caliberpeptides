'use client';

import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { PillButton } from '@/components/ui/PillButton';

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { cart, cartCount, removeFromCart, updateQuantity, clearCart } = useCart();

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceedToCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !email.trim()) return;
    setIsSubmitting(true);
    setError(null);

    const res = await fetch('/api/woocommerce/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.trim(),
        cart: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok && data.payment_url) {
      clearCart();
      setIsOpen(false);
      window.location.href = data.payment_url;
      return;
    }

    if (res.status === 503) {
      setError('Checkout not configured. Add WOOCOMMERCE_URL, WOOCOMMERCE_CONSUMER_KEY, and WOOCOMMERCE_CONSUMER_SECRET to .env.local (local) or your host’s env vars (deploy), then restart.');
    } else {
      const msg = data.details || data.error || 'Could not proceed. Please try again.';
      setError(msg);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      {/* Cart Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-espresso hover:text-sage transition-colors"
        aria-label="Shopping cart"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-sage text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30"
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-glass z-40"
            >
              {cart.length === 0 ? (
                <div className="p-6 text-center">
                  <ShoppingCart size={32} className="mx-auto mb-3 text-espresso/30" />
                  <p className="font-body text-espresso/70">Your cart is empty</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="max-h-80 overflow-y-auto border-b border-glass">
                    {cart.map((item) => (
                      <div key={item.id} className="p-4 border-b border-glass/50 last:border-b-0">
                        <div className="flex justify-between items-start mb-3">
                          <Link
                            href={`/products/${item.slug}`}
                            className="flex-1 font-body font-semibold text-espresso hover:text-sage transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-espresso/50 hover:text-espresso transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-body text-sm font-semibold text-sage">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded hover:bg-glass/50 transition-colors"
                            >
                              <Minus size={14} className="text-espresso" />
                            </button>
                            <span className="w-6 text-center font-mono text-sm font-bold text-espresso">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded hover:bg-glass/50 transition-colors"
                            >
                              <Plus size={14} className="text-espresso" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals and Checkout */}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-glass">
                      <span className="font-body font-semibold text-espresso">Subtotal:</span>
                      <span className="font-mono text-lg font-bold text-espresso">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>

                    <form onSubmit={handleProceedToCheckout} className="space-y-3 mb-2">
                      <label htmlFor="cart-email" className="block font-body text-sm font-medium text-espresso">
                        Email
                      </label>
                      <input
                        id="cart-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-glass font-body text-espresso text-sm placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
                      />
                      {error && (
                        <p className="font-body text-xs text-red-600" role="alert">
                          {error}
                        </p>
                      )}
                      <PillButton
                        type="submit"
                        variant="solid"
                        size="default"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Taking you to checkout…' : 'Proceed to Checkout'}
                      </PillButton>
                    </form>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full py-2 font-body text-sm text-espresso/70 hover:text-espresso transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
