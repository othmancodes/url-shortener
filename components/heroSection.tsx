"use client";

import React from "react";
import UrlShortenerContainer from "./url-shortener-container";

// HeroSection component: This section is the first part of the landing page, introducing the app.
const HeroSection: React.FC = () => {
  return (
    <header  id="heroSection">
      {/* Container to center all content */}
      <div className="container mx-auto flex flex-col items-center justify-center p-12 text-center">
        
        {/* Exciting announcement banner */}
        <p className="antialiased font-sans leading-relaxed inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
          Exciting News! Introducing our latest innovation
        </p>

        {/* Main heading with the brand name and a catchy tagline */}
        <h1 className="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mx-auto my-6 leading-snug text-2xl lg:max-w-3xl lg:text-5xl">
          <span className="text-blue-500">CutLite</span> Simplify Your Links & Amplify Your Performance
        </h1>

        {/* Subheading: A call to action that describes the purpose of the product */}
        <p className="block antialiased font-sans font-normal leading-relaxed text-gray-500 mx-auto text-base lg:text-lg">
          Be a bright color in a sea of gray. Simplify your links, elevate your impact.
        </p>
      </div>

      {/* Container for the URL shortener component */}
      <div className="mx-auto max-w-xl py-4 md:py-8 space-y-6">
        {/* URL Shortener container for user interaction */}
        <UrlShortenerContainer />
      </div>
    </header>
  );
};

export default HeroSection;



