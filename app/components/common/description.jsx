import React, { useState } from "react";

const Description = ({ logo, name, description }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  console.log("logo", logo);

  return (
    <div>
      {/* Category Description */}
      {logo ? (
        <section className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-start md:gap-4 border-l-4 border-orange-500">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-gray-400 text-xs">Logo</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800 md:hidden">
              {name}
            </h1>
          </div>
          <div>
            <h1 className="hidden md:block text-xl font-semibold text-gray-800">
              {name}
            </h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-2xl">
              {showFullDesc ? (
                <>
                  {name} is known for durable and reliable equipment trusted by
                  businesses worldwide. With a legacy of quality, the company
                  delivers products that combine innovation, functionality, and
                  long-lasting performance. Customers across industries prefer
                  this brand because of its consistency and customer-first
                  approach. Each product goes through rigorous testing and
                  quality checks to ensure the highest standards.
                  <br />
                  Their commitment to sustainability and innovation makes them a
                  trusted choice globally.
                </>
              ) : (
                <>
                  {name} is known for durable and reliable equipment trusted by
                  businesses worldwide. With a legacy of quality, the company
                  delivers products that combine innovation, functionality, and
                  long-lasting performance...
                </>
              )}
            </p>
            {!showFullDesc && (
              <button
                onClick={() => setShowFullDesc(true)}
                className="mt-3 text-sm bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition"
              >
                View More
              </button>
            )}
          </div>
        </section>
      ) : (
        <section className="bg-white w-full rounded-lg shadow-sm px-3 md:px-4 py-3 md:py-2 flex flex-col md:flex-row items-start md:gap-4 border-l-4 border-orange-500">
          <div className="flex gap-2 flex-col">
            <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              {showFullDesc ? (
                <>
                  {name} is known for durable and reliable equipment trusted by
                  businesses worldwide. With a legacy of quality, the company
                  delivers products that combine innovation, functionality, and
                  long-lasting performance. Customers across industries prefer
                  this brand because of its consistency and customer-first
                  approach. Each product goes through rigorous testing and
                  quality checks to ensure the highest standards.
                  <br />
                  Their commitment to sustainability and innovation makes them a
                  trusted choice globally.
                </>
              ) : (
                <>
                  <span className="line-clamp-2">
                    {name} is known for durable and reliable equipment trusted
                    by businesses worldwide. With a legacy of quality, the
                    company delivers products that combine innovation,
                    functionality, and long-lasting performance...
                  </span>
                </>
              )}
            </p>
            <div className="">
              {!showFullDesc && (
                <button
                  onClick={() => setShowFullDesc(true)}
                  className=" text-sm bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition"
                >
                  View More
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Description;
