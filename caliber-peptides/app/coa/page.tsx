import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoaSearch from '@/components/coa/CoaSearch';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CoaPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SectionHeader
            title="Certificate of Analysis"
            subtitle="Search for your batch's lab test results"
            align="center"
          />

          <div className="mt-12">
            <CoaSearch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
