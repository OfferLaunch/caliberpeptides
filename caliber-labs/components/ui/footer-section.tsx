"use client"

import * as React from "react"
import Image from "next/image"
import { ShadcnButton as Button } from "@/components/ui/shadcn-button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Send } from "lucide-react"
import Link from "next/link"

function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage text-white">
      {/* Top divider */}
      <div className="h-px w-full bg-white/20" aria-hidden />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Link href="/" className="relative z-10 inline-block mb-6 flex items-center min-h-[2.5rem]">
              <Image
                src="/logos/Full%20Logos/All%20White%20Full.png"
                alt="Caliber Labs"
                width={200}
                height={64}
                className="h-12 w-auto max-w-[200px] object-contain object-left"
                priority
              />
            </Link>
            <h2 className="relative z-10 mb-4 text-xl font-display tracking-tight drop-shadow-md">
              Stay Connected
            </h2>
            <p className="mb-6 font-body text-sm text-white/80">
              Join our research community for the latest research insights and updates.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-white text-sage transition-transform hover:scale-105 hover:bg-white/90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="border-t border-white/20 pt-8 md:border-t-0 md:pt-0 md:border-l md:border-l-white/20 md:pl-8">
            <h3 className="mb-4 font-body text-lg font-semibold drop-shadow-md">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-espresso">
                Home
              </Link>
              <Link
                href="/products"
                className="block transition-colors hover:text-espresso"
              >
                Products
              </Link>
              <Link href="/coa" className="block transition-colors hover:text-espresso">
                Certificates of Analysis
              </Link>
              <Link href="/privacy" className="block transition-colors hover:text-espresso">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block transition-colors hover:text-espresso">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="border-t border-white/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-l-white/20 lg:pl-8">
            <h3 className="mb-4 font-body text-lg font-semibold drop-shadow-md">Resources</h3>
            <address className="space-y-2 text-sm not-italic font-body">
              <p className="text-white/90">Research-Grade Compounds</p>
              <p className="text-white/80">
                Email:{" "}
                <a
                  href="mailto:support@caliberlabs.com"
                  className="hover:text-espresso transition-colors"
                >
                  support@caliberlabs.com
                </a>
              </p>
              <p className="text-white/80">
                Phone:{" "}
                <a
                  href="tel:1-800-7358433"
                  className="hover:text-espresso transition-colors"
                >
                  1-800-PEPTIDES
                </a>
              </p>
            </address>
          </div>

          <div className="relative border-t border-white/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-l-white/20 lg:pl-8">
            <h3 className="mb-4 font-body text-lg font-semibold drop-shadow-md">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/30 text-white hover:bg-sage/20"
                      asChild
                    >
                      <a
                        href="https://www.facebook.com/caliberlabs/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/30 text-white hover:bg-sage/20"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/caliberlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Payment methods - one row, small icons */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <p className="font-body text-xs text-white/60 text-center mb-3">
            We accept
          </p>
          <div className="w-[75%] max-w-4xl mx-auto flex items-center justify-between">
            {[
              { src: '/images/payment/visa-card.svg', alt: 'Visa' },
              { src: '/images/payment/mastercard-card.svg', alt: 'Mastercard' },
              { src: '/images/payment/amex-card.svg', alt: 'American Express' },
              { src: '/images/payment/paypal-card.svg', alt: 'PayPal' },
              { src: '/images/payment/applepay-card.svg', alt: 'Apple Pay' },
            ].map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={56}
                height={40}
                className="h-8 w-auto object-contain opacity-90"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 text-center border-t border-white/20">
          <p className="font-body text-sm text-white/80">
            © {currentYear} Caliber Labs. All rights reserved.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 text-center font-body text-xs text-white/70 space-y-4 border-t border-white/20">
          <p>
            <strong>Research Use Only Disclaimer:</strong> All products on this site are for research and development use only. Products are not for human consumption of any kind.
          </p>

          <p>
            <strong>FDA Statement:</strong> The statements made on this website have not been evaluated by the US Food and Drug Administration. The statements and the products of this company are not intended to diagnose, treat, cure, or prevent any disease.
          </p>

          <p>
            <strong>Chemical Supplier Classification:</strong> Caliber Labs is a chemical supplier. Caliber Labs is not a compounding pharmacy or chemical compounding facility as defined under 503A of the Federal Food, Drug, and Cosmetic Act. Caliber Labs is not an outsourcing facility as defined under 503B of the Federal Food, Drug, and Cosmetic Act.
          </p>

          <p>
            All products are sold for research, laboratory, or analytical purposes only, and are not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }
