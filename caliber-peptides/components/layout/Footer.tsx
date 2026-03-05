import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-parchment py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logos/Full Logos/All Oatmeal Full.png"
                alt="Caliber Peptides"
                width={40}
                height={40}
                style={{ width: 'auto', height: '40px' }}
              />
            </div>
            <p className="font-body text-sm text-parchment/80 mb-4">
              Research-grade peptides with uncompromising quality standards.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-sage" />
                <span>support@caliberpeptides.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-sage" />
                <span>1-800-PEPTIDES</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-sage mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-sage transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sage transition-colors">
                  GHRPs
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sage transition-colors">
                  BPC Peptides
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sage transition-colors">
                  Cognitive Enhancers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body font-semibold text-sage mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-sage transition-colors">
                  Research Blog
                </Link>
              </li>
              <li>
                <Link href="/coa" className="hover:text-sage transition-colors">
                  Certificates of Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Safety Data
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-semibold text-sage mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sage transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-parchment/70">
            <p>&copy; {currentYear} Caliber Peptides. All rights reserved.</p>
            <p>
              For research purposes only. Not for human consumption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
