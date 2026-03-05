'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { blogPosts } from '@/lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment text-center mb-2">
            Research Library
          </h2>
          <p className="font-body text-lg text-parchment/70 text-center max-w-2xl mx-auto">
            Stay informed with expert insights and research updates
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-glass/10 rounded-xl overflow-hidden border border-glass/20 hover:border-sage transition-all h-full flex flex-col group cursor-pointer">
                  {/* Placeholder Image */}
                  <div className="h-40 bg-gradient-to-br from-sage/30 to-glass/30 flex items-center justify-center">
                    <span className="text-parchment/40 text-sm">Article</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="sage">{post.category}</Badge>
                      <span className="flex items-center gap-1 font-body text-xs text-parchment/60">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="font-body font-semibold text-lg text-parchment mb-3 group-hover:text-sage transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="font-body text-sm text-parchment/70 mb-4 flex-1 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sage opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#7d8f78] text-[#7d8f78] font-body font-medium rounded-lg hover:bg-[#7d8f78] hover:text-espresso transition-all">
              View All Articles
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
