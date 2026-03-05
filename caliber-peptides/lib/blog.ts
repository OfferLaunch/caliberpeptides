export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-peptide-purity',
    title: 'Understanding Peptide Purity Standards',
    excerpt: 'A comprehensive guide to HPLC testing, purity percentages, and what they mean for your research.',
    author: 'Dr. Sarah Chen',
    date: '2024-02-28',
    category: 'Research',
    featured: true,
  },
  {
    id: '2',
    slug: 'growth-hormone-releasing-peptides-overview',
    title: 'The Complete Guide to GHRPs',
    excerpt: 'Explore different GHRP variants, their mechanisms, and applications in research protocols.',
    author: 'Dr. Marcus Reed',
    date: '2024-02-20',
    category: 'Educational',
    featured: true,
  },
  {
    id: '3',
    slug: 'peptide-storage-best-practices',
    title: 'Peptide Storage & Handling Best Practices',
    excerpt: 'Learn how to properly store, reconstitute, and handle peptides to maintain integrity and efficacy.',
    author: 'Dr. Lisa Wong',
    date: '2024-02-10',
    category: 'Technical',
    featured: false,
  },
  {
    id: '4',
    slug: 'bpc-157-research-applications',
    title: 'BPC-157: Applications & Research Insights',
    excerpt: 'Deep dive into Body Protection Compound-157 and emerging research possibilities.',
    author: 'Dr. James Mitchell',
    date: '2024-01-30',
    category: 'Research',
    featured: false,
  },
  {
    id: '5',
    slug: 'cognitive-peptides-nootropic-research',
    title: 'Cognitive Peptides in Nootropic Research',
    excerpt: 'Examining the role of peptides like Semax and Selank in cognitive enhancement studies.',
    author: 'Dr. Elena Vasquez',
    date: '2024-01-20',
    category: 'Educational',
    featured: false,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured).slice(0, 3);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
