import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryGrid from '@/components/home/CategoryGrid';
import AboutStrip from '@/components/home/AboutStrip';
import BlogPreview from '@/components/home/BlogPreview';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <CategoryGrid />
      <AboutStrip />
      <BlogPreview />
      <Footer />
    </div>
  );
}
