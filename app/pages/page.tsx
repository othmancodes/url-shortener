"use client";

import Footer from "@/components/footer";
import { motion } from 'framer-motion';
import Navbar from "@/components/nav";
import About from "@/components/about";
import Features from "@/components/features";
import Faq from "@/components/faq";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    // Main container for the page with overflow handling and flex layout
    <main className="flex overflow-y-auto ">
      
      {/* Motion div to animate page transitions with framer-motion */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: 20 }} 
        transition={{ duration: 0.5 }} // Animation duration set to 0.5 seconds
      >
        {/* Wrapper div for home section */}
        <div 
          id="home" 
          className="w-full h-auto bg-cover bg-center rounded-b-3xl " 
        > 
        <div className="bg-[url('/bg3.png')] bg-cover bg-center h-screen ">
        <Navbar />
        <HeroSection />
        </div>

          
          <div id="feature">
            <Features />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="faq">
            <Faq />
          </div>

          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
