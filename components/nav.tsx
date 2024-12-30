"use client";

import React, { useState } from "react";
import { Menu, ScissorsLineDashed } from "lucide-react"; // Importing icons for the navbar

// Menu items for the navigation links
const menuItems = [
  { name: "Product", id: "heroSection" },
  { name: "Features", id: "featuresSection" },
  { name: "About", id: "aboutSection" },
  { name: "How it Works", id: "faqSection" },
];

// Navbar component
const Navbar: React.FC = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Smooth scroll to the section when a menu item is clicked
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full max-w-screen-2xl rounded-xl bg-transparent py-4 px-8 text-black">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section: Clicking logo scrolls to the hero section */}
        <a
          onClick={() => handleScroll("heroSection")}
          className="cursor-pointer font-sans text-3xl font-bold leading-relaxed text-black flex items-center gap-2"
        >
          <ScissorsLineDashed size={42} color="black" /> {/* Scissors icon */}
          CutLite
        </a>

        {/* Desktop Menu: Visible on larger screens (lg and up) */}
        <ul className="hidden lg:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              {/* Button to scroll to the respective section */}
              <button
                onClick={() => handleScroll(item.id)}
                className="font-medium text-base p-1 text-black transition hover:text-gray-400"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle: Button to open/close the mobile menu */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-black hover:bg-gray-200 transition"
        >
          <Menu size={32} /> {/* Menu icon for mobile */}
        </button>
      </div>

      {/* Mobile Menu: Visible only on smaller screens */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden  mt-2 rounded-xl  py-2 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              {/* Button to scroll to the respective section and close the mobile menu */}
              <button
                onClick={() => {
                  handleScroll(item.id);
                  setIsOpen(false); // Close the menu after item click on mobile
                }}
                className="block p-1 font-medium text-black transition hover:text-gray-600"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        {/* "Get Started" button */}
        <button
          onClick={() => handleScroll("heroSection")}
          className="block w-full mt-4 rounded-lg border bg-transparent py-3 px-6 text-xs font-bold uppercase text-black transition hover:text-gray-600"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


