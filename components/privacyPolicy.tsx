import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className=" min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-900 ">
        <header className="">
          <h1 className="text-3xl font-semibold text-blue-600">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: December 21, 2024</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p>
            When you use CutLite s URL shortening service, we collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The original URL you wish to shorten</li>
            <li>The IP address from which the request was made</li>
            <li>The date and time of the request</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain the CutLite URL shortening service</li>
            <li>Monitor and prevent any potential misuse of the service</li>
            <li>Improve our service based on usage patterns</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">3. Data Retention</h2>
          <p>
            We retain the shortened URLs and associated original URLs indefinitely to ensure the functionality of our service. However, we regularly review and delete any personal data that is no longer necessary for the provision of our service.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">4. Data Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">5. Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. While we make efforts to ensure the security of your data, please be aware that no method of transmitting data over the internet or storing data electronically is 100% secure.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the last updated date at the top of this Privacy Policy.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@cutlite.com" className="text-blue-600">privacy@cutlite.com</a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;


