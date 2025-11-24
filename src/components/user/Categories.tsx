"use client";

import React from "react";
import {
  FiSmartphone,
  FiMonitor,
  FiWatch,
  FiCamera,
  FiHeadphones,
  FiCpu,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const iconMap: any = {
  Phones: <FiSmartphone size={28} />,
  Computers: <FiMonitor size={28} />,
  SmartWatch: <FiWatch size={28} />,
  Camera: <FiCamera size={28} />,
  HeadPhones: <FiHeadphones size={28} />,
  Gaming: <FiCpu size={28} />,
};

// 👉 Add only names — icons will come automatically
const categories = [
  "Phones",
  "Computers",
  "SmartWatch",
  "Camera",
  "HeadPhones",
  "Gaming",
  "Accessories",
  "More",
];

export default function Categories() {
  return (
    <section className="py-10 lg:py-12">
        <div className="container relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Browse By Category</h2>
            <div className="flex gap-3">
              <button className="prev-categories bg-primary text-white h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center">
                <FiArrowLeft />
              </button>
              <button className="next-categories bg-primary text-white h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center">
                <FiArrowRight />
              </button>
            </div>
          </div>
          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={15}
            navigation={{
              prevEl: ".prev-categories",
              nextEl: ".next-categories",
            }}
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            className="py-2"
          >
            {categories.map((name, index) => (
           <SwiperSlide key={index}>
          <div
        className="
          group w-full h-32 rounded-xl flex flex-col justify-center items-center gap-3 cursor-pointer
          border border-gray-200 bg-white shadow-sm
          transition-all duration-300 ease-out
          hover:border-primary hover:shadow-lg
        "
          >
        {/* Icon */}
        <div
          className="
            text-gray-600 transition-all duration-300
            group-hover:text-primary group-hover:scale-125
          "
        >
          {iconMap[name] || <FiCpu size={28} />}
        </div>
        {/* Name */}
        <p className="text-sm font-medium transition-all duration-300">
          {name}
        </p>
          </div>
        </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
}
