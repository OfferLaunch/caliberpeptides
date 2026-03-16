'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { categories } from '@/lib/products';
import ProductSearch from '@/components/ProductSearch';
import CartDropdown from '@/components/cart/CartDropdown';

const productLinks = categories.map((cat) => ({
  title: cat,
  href: `/products?category=${encodeURIComponent(cat)}`,
  description: `Browse ${cat} compounds`,
}));

const NavListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string; href: string }
>(({ className, title, href, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        href={href}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-glass/50 hover:text-sage focus:bg-glass/50 focus:text-sage font-body text-sm text-espresso',
          className
        )}
        {...props}
      >
        <div className="font-medium leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-sm leading-snug text-espresso/70">
            {children}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  </li>
));
NavListItem.displayName = 'NavListItem';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'COA', href: '/coa' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 bg-white border-b',
        isScrolled ? 'shadow-lg border-glass' : 'border-glass/50'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/Full%20Logos/Sage%20%2BNavy%20Full.png"
              alt="Caliber Labs"
              width={240}
              height={80}
              style={{ width: 'auto', height: '40px' }}
              sizes="120px"
              quality={95}
              priority
            />
          </Link>

          {/* Desktop: Radix Navigation Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'font-body text-espresso'
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-body text-espresso bg-transparent hover:bg-glass/50 hover:text-sage">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-1 p-3 md:w-[380px] md:grid-cols-2 max-h-[70vh] overflow-y-auto">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-glass/30 to-glass p-6 no-underline outline-none focus:shadow-md"
                            href="/products"
                          >
                            <div className="mb-2 mt-4 font-body text-lg font-medium text-espresso">
                              All Products
                            </div>
                            <p className="text-sm leading-tight text-espresso/70">
                              Research-grade compounds. HPLC verified, 99%+ purity.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {productLinks.map((item) => (
                        <NavListItem
                          key={item.href}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </NavListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/coa"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'font-body text-espresso'
                      )}
                    >
                      COA
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/#about"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'font-body text-espresso'
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ProductSearch />
            <CartDropdown />
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-sage text-white px-6 py-2 font-body text-sm font-bold hover:bg-sage/90 transition-all hover:scale-105 shrink-0 border border-sage"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-espresso p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-glass"
          >
            <div className="px-4 py-4 space-y-4">
              <form onSubmit={handleSearch} className="flex items-center gap-2 rounded-lg border border-glass bg-white p-2">
                <Search className="w-4 h-4 text-espresso/50 shrink-0" aria-hidden />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 min-w-0 py-1.5 px-2 bg-transparent border-0 outline-none font-body text-sm text-espresso placeholder:text-espresso/50"
                  aria-label="Search products"
                />
              </form>
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-espresso hover:text-sage transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-sage text-white px-6 py-2 font-body text-sm font-bold hover:bg-sage/90 transition-all w-fit"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
