'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'COA', href: '/coa' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 bg-parchment ${
        isScrolled ? 'shadow-lg border-b border-[#d1dbcb]' : 'border-b border-[#d1dbcb]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/Full Logos/Sage + Brown Full.png"
              alt="Caliber Peptides"
              width={40}
              height={40}
              style={{ width: 'auto', height: '40px' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-espresso hover:text-[#7d8f78] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://shop.example.com"
              className="bg-[#7d8f78] text-white px-4 py-2 rounded-lg font-body text-sm font-medium hover:bg-[#7d8f78]/90 transition-all hover:scale-105"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-espresso p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-parchment border-t border-[#d1dbcb]"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-espresso hover:text-[#7d8f78] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://shop.example.com"
                className="block bg-[#7d8f78] text-white px-4 py-2 rounded-lg font-body text-sm font-medium text-center hover:bg-[#7d8f78]/90 transition-all"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
