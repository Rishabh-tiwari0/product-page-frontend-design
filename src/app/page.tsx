import Image from "next/image";
import ProductDetail from "./Components/ProductDetail";

import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="w-[100vw] sm:w-[60vw] mx-auto pb-6 sm:pb-2">
      <Navbar />
      <ProductDetail />
    </div>
  );
}
