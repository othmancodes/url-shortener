import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  // Smooth Scroll Handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Array of images with src and alt text
  const images = [
    { src: '/pex1.jpg', alt: 'Image 1', width: 900, height: 900 },
    { src: '/pex2.jpg', alt: 'Image 2', width: 900, height: 900 },
  ];

  return (
    <section className="bg-blue-500" id="aboutSection">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Section - Text Information */}
          <div className="flex-1 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-left">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                CutLite: Where Smart Links Meet Seamless Sharing
              </h2>
              <p className="text-white/90 mt-4 sm:mt-4 block">
                {/* About CutLite description */}
                CutLite is a powerful URL shortener designed to streamline links and boost engagement. Whether you re a content creator, business owner, or need easy link management, CutLite makes sharing faster and smarter.
                With CutLite, you create smart links that open directly in relevant apps like YouTube, Instagram, or TikTok, providing a seamless experience for your audience. This increases engagement, helping followers subscribe, like, or comment with ease.
                Perfect for content creators, CutLite ensures your audience can access your content quickly on any platform, from YouTube to Twitter. Plus, it s simple to use—no sign-ups required. Just paste your URL, click, and share your smart, short link instantly.
              </p>
              <div
                className="mt-4 md:mt-8 cursor-pointer"
                // Smooth scroll on "Get Started" button click
                onClick={() => handleScroll('heroSection')}
              >
                <a
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4">
            {/* Map through the images array to display each image dynamically */}
            {images.map((image, index) => (
              <div key={index} className="flex-1">
                <Image
                  alt={image.alt}
                  src={image.src}
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

