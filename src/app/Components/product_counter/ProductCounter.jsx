"use client";
import React, { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 shadow-sm mx-auto mt-4 py-2 px-3 flex justify-between rounded-lg items-center sm:min-w-40">
      <span
        className="minus cursor-pointer text-orange-500 text-2xl font-bold"
        onClick={() => {
          setCount((value) => (value > 0 ? value - 1 : 0)); // Proper decrement logic
        }}
      >
        -
      </span>
      <span className="num font-bold">{count < 10 ? "0" + count : count}</span>
      <span
        className="plus cursor-pointer text-orange-500 text-2xl font-bold"
        onClick={() => {
          setCount((value) => value + 1); // Proper increment logic
        }}
      >
        +
      </span>
    </div>
  );
};

export default ProductCounter;
