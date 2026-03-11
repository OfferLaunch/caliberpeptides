'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchProducts } from '@/lib/products';

export default function ProductSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Search as user types
  useEffect(() => {
    if (query.trim()) {
      const matches = searchProducts(query);
      setResults(matches.slice(0, 5)); // Show top 5 results
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  const handleSelectProduct = (slug: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setQuery('');
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelectProduct(results[selectedIndex].slug);
        } else {
          handleSearch(e as any);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center gap-1 rounded-lg border border-glass bg-white/80 focus-within:border-sage focus-within:ring-1 focus-within:ring-sage transition-all relative"
      >
        <Search className="w-4 h-4 text-espresso/50 shrink-0 ml-3" aria-hidden />
        <input
          type="text"
          role="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search products..."
          className="w-36 lg:w-44 py-2 px-2 pr-3 bg-transparent border-0 outline-none font-body text-sm text-espresso placeholder:text-espresso/50"
          aria-label="Search products"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="mr-2 text-espresso/50 hover:text-espresso transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Autocomplete Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-glass rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <ul className="max-h-80 overflow-y-auto">
              {results.map((product, idx) => (
                <motion.li
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => handleSelectProduct(product.slug)}
                    className={`w-full px-4 py-3 flex items-center justify-between gap-3 text-left transition-colors border-b border-glass/30 last:border-b-0 hover:bg-parchment ${
                      selectedIndex === idx ? 'bg-parchment' : ''
                    }`}
                  >
                    <span className="font-body font-semibold text-espresso text-sm truncate">
                      {product.name}
                    </span>
                    <span className="text-sm font-semibold text-sage flex-shrink-0">
                      ${product.price.toFixed(2)}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* View All Results Link */}
            <div className="border-t border-glass bg-parchment/50 p-3">
              <button
                type="button"
                onClick={handleSearch}
                className="w-full text-center font-body text-sm font-medium text-sage hover:text-sage/80 transition-colors"
              >
                View all results for "{query}"
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
