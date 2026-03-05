export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  purity: number;
  price: number;
  form: string;
  image: string;
  description: string;
  specs?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ipamorelin',
    slug: 'ipamorelin',
    category: 'GHRP',
    purity: 99.2,
    price: 49.99,
    form: 'Lyophilized Powder',
    image: '/images/ipamorelin.jpg',
    description: 'Growth hormone releasing peptide with minimal cortisol effects.',
    specs: '10mg vial',
  },
  {
    id: '2',
    name: 'BPC-157',
    slug: 'bpc-157',
    category: 'BPC Peptides',
    purity: 99.5,
    price: 59.99,
    form: 'Lyophilized Powder',
    image: '/images/bpc157.jpg',
    description: 'Body Protection Compound for research applications.',
    specs: '5mg vial',
  },
  {
    id: '3',
    name: 'TB-500',
    slug: 'tb-500',
    category: 'Recovery Peptides',
    purity: 99.1,
    price: 54.99,
    form: 'Lyophilized Powder',
    image: '/images/tb500.jpg',
    description: 'Thymosin Beta-4 analog for tissue repair studies.',
    specs: '2mg vial',
  },
  {
    id: '4',
    name: 'Semax',
    slug: 'semax',
    category: 'Cognitive',
    purity: 99.3,
    price: 64.99,
    form: 'Solution',
    image: '/images/semax.jpg',
    description: 'Nootropic peptide for cognitive research.',
    specs: '10ml solution',
  },
  {
    id: '5',
    name: 'Selank',
    slug: 'selank',
    category: 'Cognitive',
    purity: 99.2,
    price: 54.99,
    form: 'Solution',
    image: '/images/selank.jpg',
    description: 'Immunomodulatory and anxiolytic peptide.',
    specs: '10ml solution',
  },
  {
    id: '6',
    name: 'PT-141',
    slug: 'pt-141',
    category: 'Specialty',
    purity: 99.4,
    price: 69.99,
    form: 'Lyophilized Powder',
    image: '/images/pt141.jpg',
    description: 'Melanocortin analog for research.',
    specs: '10mg vial',
  },
  {
    id: '7',
    name: 'GHRP-6',
    slug: 'ghrp-6',
    category: 'GHRP',
    purity: 99.0,
    price: 44.99,
    form: 'Lyophilized Powder',
    image: '/images/ghrp6.jpg',
    description: 'Classic growth hormone releasing peptide.',
    specs: '5mg vial',
  },
  {
    id: '8',
    name: 'Tymogen',
    slug: 'tymogen',
    category: 'Immune Support',
    purity: 99.1,
    price: 49.99,
    form: 'Lyophilized Powder',
    image: '/images/tymogen.jpg',
    description: 'Thymic peptide for immune research.',
    specs: '5mg vial',
  },
];

export const categories = Array.from(
  new Set(products.map((p) => p.category))
).sort();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
