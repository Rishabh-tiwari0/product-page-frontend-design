"use client";
import React, { useState } from "react";

const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const ProductDetail = () => {
  // Set initial image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle next image click
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous image click
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle thumbnail image click
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    // container
    <div className="mt-1 sm:h-full sm:flex justify-center sm:mt-12">
      {/* product img container */}
      <div className="h-80 overflow-hidden relative sm:h-full sm:w-1/2 flex flex-col items-center ">
        <img
          src={images[currentImageIndex]}
          alt={`product-image-${currentImageIndex + 1}`}
          className="-z-10 sm:z-0 sm:w-[80%] sm:rounded-xl"
        />
        {/* for mobile view product pic navigation */}
        <div className="absolute top-1/2 w-full -translate-y-[100%] flex justify-between px-3 sm:hidden">
          <button
            className="w-9 h-9 bg-white rounded-full grid place-content-center shadow-lg cursor-pointer"
            onClick={handlePrevClick}
          >
            <img
              src="images/icon-previous.svg"
              alt="previous button"
              className="w-2"
            />
          </button>
          <button
            className="w-9 h-9 bg-white rounded-full grid place-content-center shadow-lg cursor-pointer"
            onClick={handleNextClick}
          >
            <img src="images/icon-next.svg" alt="next button" className="w-2" />
          </button>
        </div>
        {/* for desktop view image thumbnail navigation */}
        <div className="flex mt-6 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index + 1}`}
              className={`w-20 rounded-lg cursor-pointer ${
                currentImageIndex === index
                  ? "border-[2px] border-[#ef640d] opacity-50"
                  : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      {/* product detail section */}
      <div className="p-3 flex-1 sm:max-w-96 sm:h-full sm:my-auto">
        <p className="font-semibold text-sm text-gray-500">SNEAKER COMPANY</p>
        <h1 className="title text-gray-950 mt-2">
          Fall Limited Edition Sneakers{" "}
        </h1>
        <p className="text-gray-500 font-[400] mt-3 sm:mt-9 sm:font-[500]">
          These low-profile sneakers are your perfect casual companion,
          featuring a durable rubber outer sole. They will withstand everything
          the weather can offer.
        </p>
        {/* price and order section */}
        <div className="flex justify-between mt-4">
          <h1 className="text-3xl font-bold content-center">
            {/* price */}
            $125.00{" "}
            <span className="bg-black text-white text-sm rounded-lg px-3 py-1">
              {/* discount */}
              50%
            </span>
          </h1>
          {/* original price */}
          <h3 className="text-gray-500 font-semibold line-through decoration-2">
            $250
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
