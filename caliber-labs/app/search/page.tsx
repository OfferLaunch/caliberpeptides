import { Suspense } from 'react';
import SearchResults from '@/components/SearchResults';

export const metadata = {
  title: 'Search Products | Caliber Labs',
  description: 'Search for research-grade lyophilized chemicals',
};

function SearchLoading() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-glass rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-glass rounded w-32 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchResults />
    </Suspense>
  );
}
