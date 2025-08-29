"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Reviews = ({ relatedRatings }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#e5e1e164] p-5 rounded-md border border-[#B3B3B3]">
      <h2 className="text-lg font-semibold text-orange-500 mb-6">
        Latest Reviews
      </h2>

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
        {relatedRatings.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white w-full p-4 rounded-md border border-orange-400 flex flex-col items-start h-full transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg animate-fadeUp">
              <div className="flex mb-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-5 h-5 ${
                        review.rating >= star
                          ? "text-orange-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-start text-sm">
                {review.title}
              </h3>
              <div className="flex flex-col justify-start items-start flex-grow w-full pb-1">
                <p
                  className={`${
                    expanded ? "" : "line-clamp-2"
                  } text-gray-600 text-start text-xs`}
                >
                  {review.review}
                </p>

                {/* Show More / Show Less */}
                {review.review.length > 60 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-orange text-xs font-medium hover:underline cursor-pointer"
                  >
                    {expanded ? "View Less" : "View More"}
                  </button>
                )}
              </div>

              <div className="flex items-start">
                {/* <div className="w-8 h-8">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full w-8 h-8"
                  />
                </div> */}
                <div className="flex flex-col items-start">
                  <p className="text-sm items-start font-semibold text-black">
                    {review.name}
                  </p>
                  <p className="text-xs items-start text-gray-400">
                    {review.date}
                  </p>
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
