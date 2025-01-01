import React, { useState } from "react";
import { CircleX } from "lucide-react"; // Import the CircleX icon
import TermsConditions from "./termsConditions";
import PrivacyPolicy from "./privacyPolicy";

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "Product", id: "heroSection" },
    { name: "Features", id: "featuresSection" },
    { name: "About", id: "aboutSection" },
    { name: "How it Works", id: "faqSection" },
    { name: "Terms & Conditions", href: "/termsConditions" },
    { name: "Privacy Policy", href: "/privacyPolicy" },
  ];

  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Customize Your Links with CutLite
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-500">
              Easily shorten and personalize your URLs to fit your needs.
            </p>
            <a
              onClick={() => handleScroll("heroSection")}
              className="mt-8 inline-block rounded-full cursor-pointer border border-blue-500 px-12 py-3 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Get Started
            </a>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-start">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  © 2024 CutLite.
                </a>
              </li>
            </ul>
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.href === "/termsConditions" ? (
                    <button
                      onClick={() => setShowTerms(true)}
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {link.name}
                    </button>
                  ) : link.href === "/privacyPolicy" ? (
                    <button
                      onClick={() => setShowPolicy(true)}
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleScroll(link.id!)}
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      {/* Modal for Terms and Conditions */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-auto">
          <div className="relative bg-white rounded-lg w-full max-w-3xl p-6 max-h-full">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <CircleX size={36} />
            </button>
            <TermsConditions />
          </div>
        </div>
      )}

      {/* Modal for Privacy Policy */}
      {showPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-auto">
          <div className="relative bg-white rounded-lg w-full max-w-3xl p-6 max-h-full">
            <button
              onClick={() => setShowPolicy(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <CircleX size={36} />
            </button>
            <PrivacyPolicy />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
