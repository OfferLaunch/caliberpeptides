'use client';

import { useState } from 'react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Search, Download } from 'lucide-react';

export default function CoaSearch() {
  const [batchNumber, setBatchNumber] = useState('');
  const [searched, setSearched] = useState(false);
  const [found, setFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    // Mock search - in production, this would query a database
    setFound(batchNumber.includes('CP'));
  };

  return (
    <div className="space-y-8">
      {/* Search Form */}
      <div className="bg-white rounded-2xl p-8 border border-[#d1dbcb]">
        <h2 className="font-display text-2xl font-bold text-espresso mb-6">
          Find Certificate of Analysis
        </h2>

        <form onSubmit={handleSearch} className="flex gap-4 flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Enter batch number (e.g., CP-123-2024)"
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-[#d1dbcb] bg-white text-espresso placeholder-espresso/50 focus:outline-none focus:border-[#7d8f78] font-body"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="flex items-center justify-center gap-2"
          >
            <Search size={20} />
            Search
          </Button>
        </form>
      </div>

      {/* Results */}
      {searched && (
        <div>
          {found ? (
            <div className="bg-[#d1dbcb]/20 rounded-2xl p-8 border-2 border-[#d1dbcb]">
              <h3 className="font-display text-xl font-bold text-espresso mb-6">
                Certificate of Analysis
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-mono text-xs text-espresso/60 mb-1">Product</p>
                  <p className="font-body font-semibold text-espresso">Ipamorelin</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-mono text-xs text-espresso/60 mb-1">Batch</p>
                  <p className="font-mono font-semibold text-espresso">{batchNumber}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-mono text-xs text-espresso/60 mb-1">Purity</p>
                  <p className="font-body font-semibold text-espresso">99.2%</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-mono text-xs text-espresso/60 mb-1">Date Tested</p>
                  <p className="font-body font-semibold text-espresso">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-body font-semibold text-espresso mb-4">
                  Test Results
                </h4>
                <div className="space-y-3 font-mono text-sm text-espresso/80">
                  <div className="flex justify-between">
                    <span>HPLC Analysis:</span>
                    <Badge variant="sage">99.2% Pure</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Molecular Weight:</span>
                    <span>Verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Microbial Testing:</span>
                    <Badge variant="sage">Passed</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Solvent Residue:</span>
                    <span>Within Limits</span>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#7d8f78] text-white rounded-lg font-body font-medium hover:bg-[#7d8f78]/90 transition-all">
                <Download size={20} />
                Download PDF Certificate
              </button>
            </div>
          ) : (
            <div className="bg-[#d1dbcb]/20 rounded-2xl p-8 text-center border-2 border-[#d1dbcb]">
              <p className="font-body text-lg text-espresso/70">
                No certificate found for batch number: <strong>{batchNumber}</strong>
              </p>
              <p className="font-body text-sm text-espresso/60 mt-2">
                Please verify the batch number and try again.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Info */}
      <div className="bg-white rounded-lg p-6 border border-[#d1dbcb]">
        <h3 className="font-body font-semibold text-espresso mb-3">
          About Our COAs
        </h3>
        <ul className="space-y-2 font-body text-sm text-espresso/80">
          <li>• Every batch is tested via independent HPLC analysis</li>
          <li>• Certificates include purity, identity, and contaminant testing</li>
          <li>• Results are available for all products</li>
          <li>• Batch numbers are printed on every package</li>
        </ul>
      </div>
    </div>
  );
}
