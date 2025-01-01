import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <section className=" min-h-screen  items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-900 ">
        <header className="">
          <h1 className="text-3xl font-semibold text-blue-600">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: December 21, 2024</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p>
            By accessing and using CutLite (the Service), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">2. Description of Service</h2>
          <p>
            CutLite provides a URL shortening service for social media and video platform links. We do not allow shortening of links from other websites.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">3. Proper Use</h2>
          <p>
            You agree to use the Service only to shorten URLs for legitimate purposes and in compliance with all applicable laws and regulations.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">4. Prohibited Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Distribute malware, viruses, or any other malicious code</li>
            <li>Spam or send unsolicited messages</li>
            <li>Impersonate others or provide false information</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">5. Termination of Service</h2>
          <p>
            We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">6. Limitation of Liability</h2>
          <p>
            In no event shall CutLite, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. It is your responsibility to check this page periodically for changes.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:terms@urlw.com" className="text-blue-600">terms@cutlite.com</a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default TermsConditions;
