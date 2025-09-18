"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css"; // optional custom CSS

import { Scrollbar, Autoplay } from "swiper/modules";

export default function App({ image }) {
  console.log("images", image);

    const validImages = image?.filter((img) => img && img !== "-") || [];


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
      {validImages?.map((img, key) => (
        <SwiperSlide key={key}>
          <Image
            src={img}
            // src={img && img !== "-" ? img : "/fallback.png"}
            alt={`Product Image ${key + 1}`}
            className="w-[228px] h-[180px]"
            width={550}
            height={180}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
