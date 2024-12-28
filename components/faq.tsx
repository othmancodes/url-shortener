import React from "react";
import { CircleCheck } from "lucide-react";

// FAQ Data - Stores the questions and answers for each step
const faqItems = [
  {
    question: "Step 1: Put In Your Link",
    answer:
      "Copy your long link from YouTube, Instagram, or any other platform and paste it in our tool. It's that simple - no need to create an account or log in.",
  },
  {
    question: "Step 2: Make It Short",
    answer:
      "Click 'Shorten' to get your new, smart link. Our system will automatically create a link that's not only shorter but also designed to open the right app when clicked.",
  },
  {
    question: "Step 3: Share It",
    answer:
      "Use your new CutLite link anywhere you want - in your social media bios, YouTube video descriptions, Instagram stories, or wherever you share your content. When people click it, they'll be taken straight to your content in the app, making it easier for them to engage.",
  },
];

const Faq: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="faqSection">
      {/* Title Section */}
      <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Simplify Your Links in 3 Easy Steps!
        </h2>
      </div>
      {/* End Title Section */}

      {/* FAQ Items List */}
      <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
        {faqItems.map((item, index) => (
          <div key={index} className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              {/* Step Icon */}
              <CircleCheck className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" />
              {/* End Step Icon */}

              {/* Step Content */}
              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  {item.question}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End FAQ Items List */}
    </div>
  );
};


export default Faq;



