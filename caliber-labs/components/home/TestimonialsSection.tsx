'use client';

import { motion } from 'framer-motion';
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-column';

const testimonials: Testimonial[] = [
  {
    text: 'Consistent quality and clear COAs. Every order has been exactly as specified. This is our go-to source for research-grade compounds.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Sarah Chen',
    role: 'Research Scientist',
  },
  {
    text: 'Fast shipping and responsive support. The documentation and batch verification make our lab workflows much simpler.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    name: 'James Mitchell',
    role: 'Lab Director',
  },
  {
    text: 'Purity matches the certificates. We’ve run our own assays and the results align with the COAs. Trustworthy supplier.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Elena Vasquez',
    role: 'Principal Investigator',
  },
  {
    text: 'Ordering and reordering is straightforward. Same-day dispatch and discreet packaging. Professional experience end to end.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
    name: 'David Park',
    role: 'Operations Manager',
  },
  {
    text: 'We rely on Caliber for critical research batches. Quality has been consistent and the team is easy to work with.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Rachel Torres',
    role: 'Biotech R&D',
  },
  {
    text: 'Clear labeling, reliable purity, and fast turnaround. Has become our default source for research materials.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    name: 'Michael Foster',
    role: 'Senior Research Associate',
  },
  {
    text: 'Documentation is excellent. Every batch comes with full traceability. That level of rigor is hard to find elsewhere.',
    image: 'https://images.unsplash.com/photo-1534521782772-a37ba192ab82?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Amanda Wright',
    role: 'Quality Assurance',
  },
  {
    text: 'We switched to Caliber last year and haven’t looked back. Reliable purity and on-time delivery every time.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face',
    name: 'Robert Kim',
    role: 'Procurement Lead',
  },
  {
    text: 'The COA lookup and batch info make compliance and record-keeping much easier. A serious partner for research.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
    name: 'Dr. Lisa Nguyen',
    role: 'Regulatory Affairs',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="bg-espresso py-16 md:py-20 relative">
      <div className="container z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-sage block text-center mb-3">
            From the Community
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-parchment">
            What researchers say
          </h2>
          <p className="font-body text-center mt-5 text-parchment/80 text-lg">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
