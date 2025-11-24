import React from "react";
import { FiTruck, FiHeadphones, FiRefreshCw } from "react-icons/fi";

const features = [
  {
    icon: <FiTruck size={28} />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <FiHeadphones size={28} />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: <FiRefreshCw size={28} />,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

export default function Features() {
  return (
    <section className="lg:py-12 py-10 bg-gray-50 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="
                  w-16 h-16 rounded-full bg-black text-white flex items-center justify-center
                  group-hover:bg-gray-800 transition-all duration-300 shadow-md
                ">
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="mt-4 font-semibold text-sm group-hover:text-black">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-xs mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
