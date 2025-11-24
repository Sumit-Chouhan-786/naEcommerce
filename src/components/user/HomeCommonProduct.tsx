import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
}

interface Props {
  title: string;
  products: Product[];
}

export default function CategorySection({ title, products }: Props) {
  return (
    <div className=" bg-gray-50 py-10 lg:py-12">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-xl font-semibold">{title}</h2>
         <Link href="/" className="text-sm text-blue-600 font-medium">
            <button className="bg-black cursor-pointer text-white px-4 py-1 rounded-md">
            View all
          </button>
          </Link>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-white shadow-sm border hover:shadow-md transition cursor-pointer"
            >
              {/* Image + Badges */}
              <div className="relative bg-gray-100 rounded-xl p-4 sm:h-44 flex items-center justify-center">
                {/* Discount Badge */}
                <span className="absolute left-2 top-2 bg-[#2B2D42] text-white text-xs px-3 py-1 rounded-md">
                  -40%
                </span>
                {/* Wishlist Icon */}
                <button className="absolute right-2 top-2 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow">
                  <AiOutlineHeart size={18} className="text-gray-600" />
                </button>
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              {/* Product Name */}
              <p className="font-semibold mt-3 text-sm">{item.name}</p>
              {/* Prices */}
              <div className="flex gap-2 mt-1">
                <span className="text-red-500 font-bold">₹{item.price}</span>
                <span className="line-through text-gray-400 text-sm">
                  ₹{item.oldPrice}
                </span>
              </div>
              {/* Rating */}
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} size={14} className="text-yellow-400" />
                ))}
                <span className="text-gray-600 text-sm">(88)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
