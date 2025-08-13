import React from "react";

const Button = ({ style, text }) => {
  return (
    <div>
      <button
        className={`${style} cursor-pointer rounded px-6 py-2 relative overflow-hidden group transition-all duration-300 
  bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-[1.03] shadow-md hover:shadow-lg`}
      >
        {/* Text */}
        <span className="relative font-semibold tracking-wide transition-colors duration-300 group-hover:text-white">
          {text}
        </span>

        {/* Underline Animation */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-4/5"></span>

        {/* Glow Effect on Hover */}
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
};

export default Button;
