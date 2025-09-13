import React, { useState } from "react";
import Image from "next/image";

const Description = ({ logo, name, description, image }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);


  return (
    <div className="w-full">
      <section
        className={`bg-white w-full rounded-lg shadow-sm p-3 md:p-6 flex flex-col md:flex-row items-start md:gap-4 border-l-4 border-orange-500`}
      >
        {/* Logo Section */}
        {logo && (
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              {/* Render logo if provided, else fallback text */}
              {typeof logo === "string" ? (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="object-contain w-full h-full"
                />
              ) : (
                <span className="text-gray-400 text-xs">Logo</span>
              )}
            </div>
            {/* Mobile Title */}
            <h1 className="text-xl font-semibold text-gray-800 md:hidden">
              {name}
            </h1>
          </div>
        )}

        {/* Content Section */}
        <div className="w-full">
          {/* Desktop Title */}
          <h1 className=" text-xl font-semibold text-gray-800">{name}</h1>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {showFullDesc ? description : description?.slice(0, 150) + "..."}
          </p>

          {/* Toggle Button */}
          {!showFullDesc && description?.length > 150 && (
            <button
              onClick={() => setShowFullDesc(true)}
              className="mt-3 cursor-pointer text-sm bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition"
            >
              View More
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Description;
