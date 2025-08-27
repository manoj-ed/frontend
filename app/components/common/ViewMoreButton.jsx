"use client";
import React from "react";

const ViewMoreButton = ({ text = "View More", onClick }) => {
return (
    <div
      onClick={onClick}
      className="relative group inline-block cursor-pointer px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-white border-2 border-transparent hover:border-orange-500 shadow-md hover:shadow-lg overflow-hidden transform hover:scale-105"
    >
      {/* Button text */}
      <button className="relative z-10 cursor-pointer">{text}</button>

      {/* Animated underline effect */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-4/5"></span>

      {/* Pulse / Glow on hover */}
      <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    </div>
  );
};

export default ViewMoreButton;
