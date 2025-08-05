"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// your reviews array with rating included
const reviews = [
  {
    title: "Amazing product!",
    body: "I loved the quality and the fast delivery!",
    name: "Priya Sharma",
    date: "Aug 1, 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    title: "Highly Recommended",
    body: "Very useful and easy to use. Will buy again.",
    name: "Amit Singh",
    date: "Jul 28, 2025",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
  },
  {
    title: "Good Value for Money",
    body: "Affordable and works as described. Worth it.",
    name: "Rina Das",
    date: "Jul 20, 2025",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 3,
  },
  {
    title: "Worth every penny",
    body: "Excellent quality, highly satisfied.",
    name: "Raj Kumar",
    date: "Jul 15, 2025",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className="bg-[#e5e1e164] p-5 rounded-md border border-[#B3B3B3]">
      <h2 className="text-lg font-semibold text-orange-500 mb-6">Latest Reviews</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full grid grid-cols-3"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white w-full p-4 rounded-md border border-orange-400 flex flex-col items-start h-full">
              <div className="flex mb-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-5 h-5 ${
                        review.rating >= star ? "text-orange-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{review.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{review.body}</p>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 ">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full w-8 h-8"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
