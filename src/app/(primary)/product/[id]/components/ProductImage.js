"use client";
import Image from "next/image";
import ProductImg from "../../../../../../public/assets/gallery/power_tools_01.webp"

const ProductImage = ({ imageUrl, altText }) => {
    return (
      <div className="w-full md:w-1/2">
        <img src="./assets/flat_bits.jpg" alt={altText} className="rounded-lg shadow-md w-full md:w-72" />
      </div>
    );
  };
  
  export default ProductImage;
  