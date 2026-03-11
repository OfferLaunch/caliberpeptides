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
      <div className="relative aspect-square bg-espresso/5 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-body font-semibold text-lg text-espresso hover:text-sage transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="font-body text-sm text-espresso/70 mb-4 flex-1">
          {product.description}
        </p>

        <div className="mb-4">
          <Badge variant="default">{product.form}</Badge>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="font-body text-xl font-semibold text-espresso">
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
