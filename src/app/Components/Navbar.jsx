"use client";
import { useState } from "react";
import Image from "next/image";
import Navlist from "./Navlist";

const Navbar = () => {
  // State to manage the visibility of the Navlist component
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the visibility of the Navlist
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Array of navigation items
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  // Array of icons with their respective paths, alt text, and class names
  const icons = [
    {
      src: "images/icon-menu.svg",
      alt: "menu",
      className: "sm:hidden cursor-pointer", // Hidden on small screens
      onClick: toggleNav, // Add the toggle function to the menu icon's onClick
    },
    {
      src: "images/iconCart.svg",
      alt: "cart",
      className: "w-7 h-7 cursor-pointer",
    },
    {
      src: "/images/image-avatar.png",
      alt: "profile picture",
      className: "w-8 h-8 sm:w-10 sm:h-10 cursor-pointer",
    },
  ];

  return (
    <div>
      {/* Navbar container: Flexbox used to align items horizontally */}
      <div className="flex justify-between p-2">
        {/* Left side of the navbar containing the menu icon, brand title, and navigation links */}
        <div className="flex items-center flex-wrap sm:h-16 gap-12">
          {/* Render the menu icon for mobile view */}
          {icons.slice(0, 1).map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className={icon.className}
              onClick={icon.onClick} // Handle the click to toggle Navlist visibility
            />
          ))}

          {/* Conditionally render the Navlist component */}
          {isNavOpen && (
            <Navlist
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              toggleNav={toggleNav}
            />
          )}

          {/* Brand title */}
          <h3 className="title">sneakers</h3>

          {/* Navigation links: Only visible on small screens and up (sm breakpoint) */}
          <div className="sm:items-center sm:translate-y-[12.5%] sm:gap-8 hidden sm:flex sm:flex-wrap">
            {/* Map over the navItems array to create a list of navigation links */}
            {navItems.map((item, index) => (
              <h4
                key={index}
                className="text-gray-500 cursor-pointer hover:text-blue-950"
              >
                {item}
              </h4>
            ))}
          </div>
        </div>

        {/* Right side of the navbar containing the cart icon and profile picture */}
        <div className="flex gap-5 sm:gap-8 items-center">
          {/* Render the cart and profile icons */}
          {icons.slice(1).map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className={icon.className}
            />
          ))}
        </div>
      </div>

      {/* Horizontal divider: Only visible on small screens and up */}
      <hr className="border-gray-400 mt-2 hidden sm:block" />
    </div>
  );
};

export default Navbar;
