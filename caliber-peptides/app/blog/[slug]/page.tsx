'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ArticleCard from '@/components/blog/ArticleCard';
import { getBlogBySlug, blogPosts } from '@/lib/blog';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-parchment flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-espresso mb-4">
              Article Not Found
            </h1>
            <Link href="/blog">
              <Button variant="primary">Back to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-parchment">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sage hover:text-espresso transition-colors mb-8">
            <ArrowLeft size={20} />
            <span className="font-body font-medium">Back to Blog</span>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="sage">{post.category}</Badge>
              <span className="flex items-center gap-2 font-body text-sm text-espresso/60">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-espresso mb-4">
              {post.title}
            </h1>

            <p className="font-body text-lg text-espresso/70">By {post.author}</p>
          </div>

          {/* Featured Image Placeholder */}
          <div className="h-96 bg-gradient-to-br from-sage/20 to-glass/20 rounded-2xl mb-12 flex items-center justify-center">
            <span className="text-espresso/40">Article Featured Image</span>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div className="bg-glass/30 rounded-lg p-8">
              <div className="font-body text-espresso/90 space-y-6">
                <p>
                  {post.excerpt}
                </p>

                <p>
                  This is a sample article content section. In a production environment, this would
                  be replaced with full MDX-powered or database-driven content. The content would
                  include detailed information, research data, references, and citations.
                </p>

                <h2 className="font-display text-2xl font-bold text-espresso mt-8">
                  Key Takeaways
                </h2>

                <ul className="list-disc list-inside space-y-2 text-espresso/80">
                  <li>Research-backed insights and data</li>
                  <li>Practical applications for your research</li>
                  <li>Expert perspectives and analysis</li>
                </ul>

                <p>
                  For more information about specific peptides or research applications, visit our
                  product catalog or contact our research team.
                </p>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-glass">
              <h2 className="font-display text-2xl font-bold text-espresso mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <ArticleCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
