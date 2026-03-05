import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logos/Full Logos/All White Full.png"
                alt="Caliber Peptides"
                width={240}
                height={80}
                style={{ width: 'auto', height: '40px' }}
                sizes="120px"
                quality={95}
              />
            </div>
            <p className="font-body text-sm text-white/80 mb-4">
              Research-grade peptides with uncompromising quality standards.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <Mail size={16} className="text-white/80 shrink-0" />
                <span>support@caliberpeptides.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Phone size={16} className="text-white/80 shrink-0" />
                <span>1-800-PEPTIDES</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  GHRPs
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  BPC Peptides
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  Cognitive Enhancers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Research Blog
                </Link>
              </li>
              <li>
                <Link href="/coa" className="text-white/80 hover:text-white transition-colors">
                  Certificates of Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Safety Data
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-body font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D1DBCB] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
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
