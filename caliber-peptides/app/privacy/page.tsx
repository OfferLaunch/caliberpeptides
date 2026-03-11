import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy | Caliber Peptides',
  description: 'Privacy Policy for Caliber Peptides',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-5xl font-normal text-espresso mb-3">
              Privacy Policy
            </h1>
            <p className="font-body text-lg text-espresso/70">
              Last Updated: March 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none font-body text-espresso/80 space-y-6">
            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                Introduction
              </h2>
              <p>
                Caliber Peptides ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                1. Information We Collect
              </h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <h3 className="font-body font-semibold text-espresso mt-4 mb-2">
                Personal Data
              </h3>
              <p>
                Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site.
              </p>
              <h3 className="font-body font-semibold text-espresso mt-4 mb-2">
                Financial Data
              </h3>
              <p>
                Financial information, such as funds associated with your account, may be collected when necessary to complete a transaction, such as information needed to process payment for an order.
              </p>
              <h3 className="font-body font-semibold text-espresso mt-4 mb-2">
                Data From Cookies
              </h3>
              <p>
                Information collected from you automatically in connection with your access to and use of our website, including device information, pages visited, time and date of visit, and other diagnostic data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                2. Use of Your Information
              </h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create and manage your account</li>
                <li>Process your transactions and send related information</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and deliver orders, and send you related updates</li>
                <li>Generate a personal profile about you for internal marketing and demographic studies</li>
                <li>Increase the efficiency and operation of the site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the site</li>
                <li>Notify you of updates to the site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                3. Disclosure of Your Information
              </h2>
              <p>
                We may share or disclose your information in the following situations:
              </p>
              <h3 className="font-body font-semibold text-espresso mt-4 mb-2">
                By Law or to Protect Rights
              </h3>
              <p>
                If we believe the release of information about you is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, and safety.
              </p>
              <h3 className="font-body font-semibold text-espresso mt-4 mb-2">
                Third-Party Service Providers
              </h3>
              <p>
                We may share your information with third parties that perform services for us, including payment processors, shipping providers, email delivery services, and hosting providers.
              </p>
              <h3 className="font-body font-semibold text-espresso mt-4 mb-2">
                Business Transfers
              </h3>
              <p>
                If Caliber Peptides is involved in a merger, acquisition, bankruptcy, dissolution, reorganization, similar transaction or proceeding, your information may be part of the assets transferred.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                4. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                5. Contact Us
              </h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="font-semibold">
                Caliber Peptides<br />
                Email: support@caliberpeptides.com
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-normal text-espresso mb-3">
                6. Changes to This Privacy Policy
              </h2>
              <p>
                Caliber Peptides may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the site, and you waive the right to receive specific notice of each such change or modification.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
