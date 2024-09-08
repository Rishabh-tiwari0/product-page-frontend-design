"use client";
import React from "react";

const Navlist = ({ isNavOpen, setIsNavOpen, toggleNav }) => {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="absolute w-full h-full bg-slate-900/70 left-0 text-black top-0  sm:hidden z-10">
      <div className="w-2/3 bg-white p-3 h-full">
        {/* Close icon that closes the Navlist */}
        <img
          src="images/icon-close.svg"
          alt="close"
          className="h-4 mb-7 cursor-pointer"
          onClick={() => toggleNav()} // Call setIsNavOpen to close the Navlist
        />

        {/* Navigation items */}
        {navItems.map((item, index) => (
          <div key={index} className="font-semibold my-5">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navlist;
