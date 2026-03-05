'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Product } from '@/lib/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col border border-[#d1dbcb]"
    >
      {/* Image */}
      <div className="relative h-48 bg-espresso/5 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-glass to-parchment flex items-center justify-center">
          <span className="text-espresso/40 text-center text-sm">
            {product.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-body font-bold text-lg text-espresso hover:text-sage transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="font-body text-sm text-espresso/70 mb-4 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <Badge variant="sage">{product.purity}% Purity</Badge>
          <Badge variant="default">{product.form}</Badge>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-2xl font-bold text-espresso">
            ${product.price.toFixed(2)}
          </span>
          <span className="font-body text-xs text-espresso/50">{product.category}</span>
        </div>

        <Link href={`/products/${product.slug}`} className="block">
          <Button variant="primary" size="md" className="w-full">
            View Product
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
