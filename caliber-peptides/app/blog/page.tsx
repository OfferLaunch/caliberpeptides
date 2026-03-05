'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { blogPosts } from '@/lib/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(blogPosts.map((p) => p.category))
  ).sort();

  const filteredPosts = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

  const featured = filteredPosts.filter((p) => p.featured)[0];
  const others = filteredPosts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Research Library"
            subtitle="Insights and updates from the Caliber team"
            align="center"
          />

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mt-8 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-body font-medium transition-all ${
                !selectedCategory
                  ? 'bg-sage text-white'
                  : 'bg-glass text-espresso hover:bg-glass/70'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-body font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-sage text-white'
                    : 'bg-glass text-espresso hover:bg-glass/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {featured && (
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <ArticleCard post={featured} />
                </div>
                <div className="bg-glass/30 rounded-lg p-6 h-fit">
                  <h3 className="font-body font-semibold text-lg text-espresso mb-4">
                    Featured Article
                  </h3>
                  <p className="font-body text-sm text-espresso/70">
                    This month's most important research and insights
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          {others.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-espresso mb-6">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-lg text-espresso/70">
                No articles found
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
