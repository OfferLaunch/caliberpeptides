'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import { BlogPost } from '@/lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  post: BlogPost;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group cursor-pointer border border-[#d1dbcb]">
          {/* Placeholder Image */}
          <div className="h-48 bg-gradient-to-br from-sage/30 to-glass/30 flex items-center justify-center">
            <span className="text-espresso/40">Article</span>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="sage">{post.category}</Badge>
              <span className="flex items-center gap-1 font-body text-xs text-espresso/60">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>

            <h3 className="font-body font-bold text-lg text-espresso mb-3 group-hover:text-sage transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="font-body text-sm text-espresso/70 mb-4 flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="font-body text-xs text-espresso/50">
                By {post.author}
              </span>
              <div className="flex items-center text-sage opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
