'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MoveRight, FileText } from 'lucide-react';
import Button from '@/components/ui/Button';

const ROTATE_INTERVAL_MS = 2000;

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ['Verified', 'Pure', 'Research-Grade', 'Trusted', 'Precise'],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, ROTATE_INTERVAL_MS);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  return (
    <section className="w-full bg-parchment text-espresso py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 py-8 lg:py-16 items-center justify-center text-center">
          {/* Top CTA */}
          <div>
            <Link href="/blog">
              <Button
                variant="secondary"
                size="sm"
                className="inline-flex items-center gap-2"
              >
                Read our research <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logos/Text Only/brown text only.png"
              alt="Caliber Peptides"
              width={336}
              height={168}
              style={{ width: 'auto', height: '56px' }}
              sizes="(min-width: 768px) 168px, 120px"
              quality={95}
              priority
            />
          </div>

          {/* Headline with rotating word */}
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl max-w-3xl tracking-tight font-normal leading-tight mx-auto">
              <span className="text-espresso">Precision. </span>
              <span className="relative inline-block min-w-[8ch] min-h-[1.2em] align-middle overflow-hidden text-left md:text-center">
                {titles.map((title, index) => (
                  <motion.span
                    key={title}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 font-semibold text-sage"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-espresso">. Research.</span>
            </h1>

            <p className="font-body text-lg md:text-xl leading-relaxed tracking-tight text-espresso/80 max-w-2xl mx-auto">
              Lab-verified peptides for serious researchers. HPLC tested, 99%+
              purity, shipped same-day from our USA warehouse.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/coa">
              <Button
                variant="secondary"
                size="lg"
                className="inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View COA <FileText className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                className="inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Shop Now <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
