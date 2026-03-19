'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Hero from '@/components/home/Hero';
import TrustBadges from '@/components/home/TrustBadges';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryGrid from '@/components/home/CategoryGrid';
import AboutStrip from '@/components/home/AboutStrip';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQ from '@/components/home/FAQ';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessModal from '@/components/AccessModal';

function HomeContent() {
  const searchParams = useSearchParams()
  const showAccess = searchParams.get('access') === 'true'

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
      {showAccess && <AccessModal />}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <HomeContent />
    </Suspense>
  )
}
