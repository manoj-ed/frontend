"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    title: "How to Build a Modern Web App",
    desc: "Learn the steps to create a fast, scalable, and user-friendly web application using the latest tools.",
    img: "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1754984903/GN-HON-EU70is_tjhd7b.webp",
    date: "Sep 4, 2025",
  },
  {
    id: 2,
    title: "Top 5 React Best Practices",
    desc: "Discover essential React coding practices that improve performance and maintainability.",
    img: "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1754984903/GN-HON-EU70is_tjhd7b.webp",
    date: "Sep 2, 2025",
  },
  {
    id: 3,
    title: "UI/UX Design Tips",
    desc: "Explore proven UI/UX strategies to enhance user satisfaction and boost conversions.",
    img: "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1754984903/GN-HON-EU70is_tjhd7b.webp",
    date: "Aug 30, 2025",
  },
  {
    id: 4,
    title: "Next.js for Beginners",
    desc: "A beginner-friendly guide to getting started with Next.js and building server-rendered React apps.",
    img: "https://res.cloudinary.com/dqnbzaiu2/image/upload/v1754984903/GN-HON-EU70is_tjhd7b.webp",
    date: "Aug 28, 2025",
  },
];

const BlogCards = ({ blogData }) => {

  const handleBlogClick = (id) => {
    console.log("blog card id", id)
  }

  return (
    <section className="py-3 md:py-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-orange-200">
        <p className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Latest <span className="text-orange-600">Blogs</span>
        </p>
        <button className="relative text-sm font-medium text-gray-700 cursor-pointer group">
          <span className="group-hover:text-orange-600 transition-colors duration-300">
            View All →
          </span>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group relative bg-white rounded-md border border-orange-100 shadow-md transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-2 hover:shadow-2xl hover:border-orange-300 hover:rotate-[0.5deg]"
          >
            {/* Image with overlay + icon */}
            <div className="relative w-full h-32 overflow-hidden cursor-pointer">
              <Image
                src={blog.img}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all"></div>
              {/* Date Badge */}
              <span className="absolute bottom-2 left-2 text-[11px] md:text-xs text-white bg-gradient-to-r from-orange-500 to-orange-600 px-2 py-0.5 rounded shadow-md">
                {blog.date}
              </span>
              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <FiExternalLink className="text-white text-xl drop-shadow-lg" />
              </div>
            </div>

            {/* Content */}
            <div className="px-3 py-2 flex flex-col flex-grow">
              <h3 className="cursor-pointer text-sm md:text-base font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
                {blog.title}
              </h3>
              <p className="text-[12px] md:text-[13px] text-gray-600 flex-grow line-clamp-3 leading-normal">
                {blog.desc}
              </p>
              <button className="py-2 text-sm font-medium text-orange-600 group-hover:text-orange-700 transition-all duration-300 relative w-fit">
                <span className="relative z-10 cursor-pointer"
                onClick={() => handleBlogClick(blog.id)}
                >
                  Read More →
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-4/5 h-[2px] bg-orange-500 transition-all duration-300 rounded-full"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCards;
