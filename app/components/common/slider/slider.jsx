"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css"; // optional custom CSS

import { Scrollbar, Autoplay  } from "swiper/modules";

export default function App({ image }) {

  return (
    <Swiper
      // scrollbar={{ hide: true }}
      modules={[Scrollbar, Autoplay]}
      className="mySwiper border rounded-md border-orange-400 cursor-pointer"
      autoplay={{
        delay: 2000, 
        disableOnInteraction: true, // keeps autoplay even after user interaction
        pauseOnMouseEnter: true, 
      }}
      loop={true}
    >
      {image?.map((img, key) => (
        <SwiperSlide key={key} >
          <Image
            src={img}
            alt={`Product Image ${key + 1}`}
            className="w-[550px] h-auto object-contain "
            width={550}
            height={400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
