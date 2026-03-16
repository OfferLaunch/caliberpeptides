import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryGrid from '@/components/home/CategoryGrid';
import AboutStrip from '@/components/home/AboutStrip';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQ from '@/components/home/FAQ';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <CategoryGrid />
      <AboutStrip />
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </div>
  );
}
