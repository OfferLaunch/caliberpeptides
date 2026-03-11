'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { PillButton } from '@/components/ui/PillButton';

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsSubmitting(true);
    // Simulate order submission — replace with WooCommerce or your payment flow when ready
    await new Promise((r) => setTimeout(r, 800));
    setOrderComplete(true);
    clearCart();
    setIsSubmitting(false);
  };

  if (orderComplete) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-sage">✓</span>
            </div>
            <h1 className="font-display text-3xl font-normal text-espresso mb-2">
              Thank you
            </h1>
            <p className="font-body text-espresso/70 mb-8">
              Your order has been received. This is a demo — connect WooCommerce or your payment provider to process real orders.
            </p>
            <Link href="/products">
              <PillButton variant="solid" size="lg">
                Continue shopping
              </PillButton>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-md w-full text-center">
            <ShoppingCart className="w-16 h-16 text-espresso/30 mx-auto mb-6" />
            <h1 className="font-display text-3xl font-normal text-espresso mb-2">
              Your cart is empty
            </h1>
            <p className="font-body text-espresso/70 mb-8">
              Add products from the catalog to checkout.
            </p>
            <Link href="/products">
              <PillButton variant="solid" size="lg">
                View products
              </PillButton>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-normal text-espresso mb-1">
              Checkout
            </h1>
            <p className="font-body text-espresso/70">
              Review your order and complete your purchase
            </p>
          </div>

          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Cart items + form */}
            <div className="lg:col-span-3 space-y-8">
              {/* Order items */}
              <div className="border border-glass rounded-xl overflow-hidden">
                <div className="px-4 py-3 bg-parchment/50 border-b border-glass font-body font-semibold text-espresso">
                  Order items
                </div>
                <ul className="divide-y divide-glass">
                  {cart.map((item) => (
                    <li key={item.id} className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${item.slug}`}
                          className="font-body font-semibold text-espresso hover:text-sage transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="font-mono text-sm text-espresso/70 mt-0.5">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-glass rounded-full bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center rounded-l-full hover:bg-parchment/50 text-espresso"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-mono text-sm font-semibold text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center rounded-r-full hover:bg-parchment/50 text-espresso"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-body font-semibold text-sage w-16 text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-espresso/50 hover:text-espresso transition-colors"
                          aria-label="Remove"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact / notes */}
              <div className="border border-glass rounded-xl p-6">
                <h2 className="font-body font-semibold text-espresso mb-4">
                  Contact & notes
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="checkout-email" className="block font-body text-sm font-medium text-espresso mb-1">
                      Email
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@lab.org"
                      className="w-full px-4 py-2.5 rounded-lg border border-glass font-body text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout-notes" className="block font-body text-sm font-medium text-espresso mb-1">
                      Order notes (optional)
                    </label>
                    <textarea
                      id="checkout-notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Research institution, PO number, special instructions..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-glass font-body text-espresso placeholder:text-espresso/40 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:border-sage resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary sidebar */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 border border-glass rounded-xl p-6 bg-parchment/30">
                <h2 className="font-body font-semibold text-espresso mb-4">
                  Order summary
                </h2>
                <div className="space-y-2 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between font-body text-sm text-espresso/80">
                      <span className="truncate pr-2">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-mono font-semibold text-espresso shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-glass pt-4 space-y-2">
                  <div className="flex justify-between font-body text-espresso">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-mono font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <p className="font-body text-xs text-espresso/60 mt-4">
                  Research use only. Payment and shipping will be completed via your configured provider (e.g. WooCommerce).
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <PillButton
                    type="submit"
                    variant="solid"
                    size="lg"
                    className="w-full font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing…' : 'Place order'}
                  </PillButton>
                  <Link href="/products" className="block text-center font-body text-sm text-espresso/70 hover:text-espresso transition-colors">
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
