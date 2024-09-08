"use client";
import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Button = () => {
  return (
    <button className="bg-orange-400 hover:bg-orange-500 w-full py-3 px-3 rounded-lg font-semibold flex gap-2 justify-center items-center mt-5">
      <LuShoppingCart size={20} />
      <span>Add to cart</span>{" "}
    </button>
  );
};

export default Button;
