"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { NavigationOptions, PaginationOptions } from "swiper/types";

const Hero = () => {
  const slides = [
    { image: "/images/hero-slider.png" },
    { image: "/images/hero-slider.png" },
    { image: "/images/hero-slider.png" },
  ];

  return (
    <div className="relative hero container z-10">

      <div className="relative! sm:py-8 py-6">

        {/* Pagination Div INSIDE the same wrapper */}
        <div className="custom-pagination flex justify-center absolute! bottom-1 left-1/2! -translate-x-1/2! z-999"></div>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          navigation={{ enabled: true }}
          pagination={{ clickable: true }}

          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation as NavigationOptions;
            const pag = swiper.params.pagination as PaginationOptions;

            nav.prevEl = ".prev-btn";
            nav.nextEl = ".next-btn";
            pag.el = ".custom-pagination";
          }}

          className="w-full h-[100px] sm:h-[200px] md:h-[250px] lg:h-[316px]"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Image
                src={slide.image}
                alt={`Slide ${i}`}
                width={1600}
                height={600}
                unoptimized
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Buttons */}
      <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-999 bg-primary text-white h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center">
        <FiArrowLeft />
      </button>

      <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-999 bg-primary text-white h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center">
        <FiArrowRight />
      </button>

    </div>
  );
};

export default Hero;
