import { Gauge, Sparkles, ShieldCheck, SquareArrowOutUpRight } from "lucide-react";

export function Features() {
  // Smooth Scroll Handler: Scrolls the page smoothly to the section with the given id
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Features data array with icons, titles, descriptions, and links
  const features = [
    {
      icon: <Gauge />,
      title: "Fast & Reliable Shortening",
      description:
        "Shorten your URLs instantly with lightning speed. Our tool ensures your links are always accessible and reliable, providing an optimal user experience for you and your audience.",
      linkText: "Let's Get Started for free",
      href: "#",
      targetId: "heroSection", // Add a target section ID for smooth scrolling
    },
    {
      icon: <Sparkles />,
      title: "Customizable Links",
      description:
        "Create custom short URLs that are easy to remember and share. Personalize your links with meaningful slugs to enhance your brand visibility or simplify sharing.",
      linkText: "Let's Get Started for free",
      href: "#",
      targetId: "heroSection", // Same target section for all features
    },
    {
      icon: <ShieldCheck />,
      title: "Secure & Private",
      description:
        "Your privacy and security are our top priority. All shortened links are encrypted to protect your data, ensuring safe and secure sharing without compromising confidentiality.",
      linkText: "Let's Get Started for free",
      href: "#",
      targetId: "heroSection", // Same target section for all features
    },
  ];

  return (
    <div className="w-full flex flex-col gap-16 pt-60 pb-32" id="featuresSection">

        {/* Introductory Section */}
        <div className="w-full flex flex-col md:flex-row  px-6 md:px-8 lg:px-12 gap-x-0 md:gap-x-6 lg:gap-x-10 gap-y-6 md:gap-y-4 lg:gap-y-0">
          {/* Main Title */}
          <div className="w-full flex justify-start">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              In today’s fast-paced digital world, speed matters. With CutLite, sharing your content is faster and more efficient than ever.
            </h3>
          </div>

          {/* Subheading with Call to Action */}
          <div className="w-full flex flex-col justify-start items-start gap-y-4 md:gap-y-5 lg:gap-y-6">
            <p className="text-sm md:text-base lg:text-lg">
              You want your audience to access your content instantly, without any obstacles. That’s where CutLite comes in. Our smart, shortened links are designed to provide the best possible experience – fast, simple, and without any distractions.
            </p>
            <span
              className="border border-blue-500 text-blue-500 px-9 py-2 rounded-full text-sm md:text-base lg:text-sm cursor-pointer hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 hover:before:w-2/4 hover:before:bg-blue-400 hover:after:w-2/4 hover:after:bg-blue-400 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 after:absolute after:right-0 after:top-0 after:h-full after:w-0 duration-500"
              onClick={() => handleScroll("heroSection")}
            >
              Get Started
            </span>
          </div>
      </div>

      {/* Features List: Map through the features array to dynamically generate feature cards */}
      <div className="flex w-full items-center justify-around flex-wrap gap-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="max-w-sm p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="mb-4">{feature.icon}</div>
            {/* Title */}
            <a href={feature.href}>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {feature.title}
              </h5>
            </a>
            {/* Description */}
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
            {/* Link to get started */}
            <span
              className="inline-flex font-medium items-center  text-blue-600 hover:underline cursor-pointer gap-1	"
              onClick={() => handleScroll(feature.targetId)} // Scroll to the target section
            >
              {feature.linkText}
              {/* SquareArrowOutUpRight Icon */}
              <SquareArrowOutUpRight size={14} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;

