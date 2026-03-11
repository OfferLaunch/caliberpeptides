import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms of Service | Caliber Peptides',
  description: 'Terms of Service for Caliber Peptides research chemicals',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-5xl font-normal text-espresso mb-3">
              Terms of Service
            </h1>
            <p className="font-body text-lg text-espresso/70">
              Last Updated: March 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none font-body text-espresso/80 space-y-6">
            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Caliber Peptides ("Company") operates under the understanding that all products sold through this website are intended for research, laboratory, and analytical purposes only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Caliber Peptides' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Use these materials for any purpose other than authorized research</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                3. Research Use Only
              </h2>
              <p>
                All products sold by Caliber Peptides are strictly for research and development use only. Products are NOT for human consumption of any kind. By purchasing from Caliber Peptides, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You will not use products for human consumption</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>You are a qualified researcher or authorized representative of a research institution</li>
                <li>You understand the research nature of all products</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                4. Disclaimer of Warranties
              </h2>
              <p>
                The materials on Caliber Peptides' website are provided on an 'as is' basis. Caliber Peptides makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                5. Limitations of Liability
              </h2>
              <p>
                In no event shall Caliber Peptides or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Caliber Peptides' website, even if Caliber Peptides or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                6. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on Caliber Peptides' website could include technical, typographical, or photographic errors. Caliber Peptides does not warrant that any of the materials on its website are accurate, complete, or current. Caliber Peptides may make changes to the materials contained on its website at any time without notice. However, Caliber Peptides does not make any commitment to update the materials.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                7. Links
              </h2>
              <p>
                Caliber Peptides has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Caliber Peptides of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                8. Modifications
              </h2>
              <p>
                Caliber Peptides may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                9. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                10. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="font-semibold">
                Caliber Peptides<br />
                Email: support@caliberpeptides.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
