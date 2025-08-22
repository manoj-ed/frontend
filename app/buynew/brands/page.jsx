"use client";

import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/logo.png";

const brands = [
  { id: 1, name: "Adidas", logo: "/brand1.png" },
  { id: 2, name: "Apple", logo: "/brand2.png" },
  { id: 3, name: "Amazon", logo: "/brand3.png" },
  { id: 4, name: "Bata", logo: "/brand4.png" },
  { id: 5, name: "Canon", logo: "/brand5.png" },
  { id: 6, name: "Coca-Cola", logo: "/brand6.png" },
  { id: 7, name: "Dell", logo: "/brand7.png" },
  { id: 8, name: "Disney", logo: "/brand8.png" },
  { id: 9, name: "Gucci", logo: "/brand9.png" },
  { id: 10, name: "H&M", logo: "/brand10.png" },
  { id: 11, name: "Honda", logo: "/brand11.png" },
  { id: 12, name: "IKEA", logo: "/brand12.png" },
  { id: 13, name: "Intel", logo: "/brand13.png" },
  { id: 14, name: "LG", logo: "/brand14.png" },
  { id: 15, name: "Louis Vuitton", logo: "/brand15.png" },
  { id: 16, name: "Mercedes-Benz", logo: "/brand16.png" },
  { id: 17, name: "Microsoft", logo: "/brand17.png" },
  { id: 18, name: "Nestle", logo: "/brand18.png" },
  { id: 19, name: "Nike", logo: "/brand19.png" },
  { id: 20, name: "Nintendo", logo: "/brand20.png" },
  { id: 21, name: "Panasonic", logo: "/brand21.png" },
  { id: 22, name: "Pepsi", logo: "/brand22.png" },
  { id: 23, name: "Puma", logo: "/brand23.png" },
  { id: 24, name: "Reebok", logo: "/brand24.png" },
  { id: 25, name: "Rolex", logo: "/brand25.png" },
  { id: 26, name: "Samsung", logo: "/brand26.png" },
  { id: 27, name: "Sony", logo: "/brand27.png" },
  { id: 28, name: "Starbucks", logo: "/brand28.png" },
  { id: 29, name: "Tesla", logo: "/brand29.png" },
  { id: 30, name: "Toyota", logo: "/brand30.png" },
  { id: 31, name: "Under Armour", logo: "/brand31.png" },
  { id: 32, name: "Uniqlo", logo: "/brand32.png" },
  { id: 33, name: "Versace", logo: "/brand33.png" },
  { id: 34, name: "Volkswagen", logo: "/brand34.png" },
  { id: 35, name: "Xiaomi", logo: "/brand35.png" },
  { id: 36, name: "Zara", logo: "/brand36.png" },
  { id: 37, name: "Lenovo", logo: "/brand37.png" },
  { id: 38, name: "Philips", logo: "/brand38.png" },
  { id: 39, name: "Oppo", logo: "/brand39.png" },
  { id: 40, name: "Vivo", logo: "/brand40.png" },
  { id: 41, name: "OnePlus", logo: "/brand41.png" },
  { id: 42, name: "HP", logo: "/brand42.png" },
  { id: 43, name: "Asus", logo: "/brand43.png" },
  { id: 44, name: "Acer", logo: "/brand44.png" },
  { id: 45, name: "Porsche", logo: "/brand45.png" },
  { id: 46, name: "Jaguar", logo: "/brand46.png" },
  { id: 47, name: "Ferrari", logo: "/brand47.png" },
  { id: 48, name: "Lamborghini", logo: "/brand48.png" },
  { id: 49, name: "Chanel", logo: "/brand49.png" },
  { id: 50, name: "Prada", logo: "/brand50.png" },
  { id: 51, name: "Hermès", logo: "/brand51.png" },
  { id: 52, name: "Burberry", logo: "/brand52.png" },
  { id: 53, name: "Balenciaga", logo: "/brand53.png" },
  { id: 54, name: "Ray-Ban", logo: "/brand54.png" },
  { id: 55, name: "Levi’s", logo: "/brand55.png" },
  { id: 56, name: "KFC", logo: "/brand56.png" },
  { id: 57, name: "McDonald’s", logo: "/brand57.png" },
  { id: 58, name: "Subway", logo: "/brand58.png" },
  { id: 59, name: "Domino’s", logo: "/brand59.png" },
  { id: 60, name: "Burger King", logo: "/brand60.png" },
  { id: 61, name: "Westside", logo: "/brand60.png" },
];

export default function ExploreBrands() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value) {
      setSelectedLetter(null); // reset alphabet filter when searching
    }
  };

  const filteredBrands = brands.filter((b) => {
    const matchesLetter = selectedLetter
      ? b.name.startsWith(selectedLetter)
      : true;
    const matchesSearch = searchQuery
      ? b.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesLetter && matchesSearch;
  });

  const visibleBrands = filteredBrands.slice(0, visibleCount);

  return (
    <section className="py-10 px-6 md:px-12">
      {/* Title */}
      <h2 className="relative text-3xl md:text-4xl font-extrabold text-center mb-6 
        bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
        Explore Brands
      </h2>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-lg"
        >
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 rounded-full border border-gray-200 shadow-sm
              focus:outline-none focus:ring-2 focus:ring-orange-400/70 focus:border-orange-400
              hover:shadow-md hover:border-orange-300
              transition-all duration-300 text-gray-700
              placeholder:text-gray-400 text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 
                transition duration-200 text-sm font-semibold"
            >
              ✖
            </button>
          )}
        </motion.div>
      </div>

      {/* 🔠 Alphabet Filter - only show if no search query */}
      {!searchQuery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 mb-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedLetter(null);
              setVisibleCount(24);
            }}
            className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm
              ${
                selectedLetter === null
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-105"
                  : "bg-white text-gray-700 border hover:bg-orange-50 hover:shadow-md hover:shadow-orange-200 hover:scale-105"
              }`}
          >
            All
          </motion.button>

          {alphabet.map((letter) => (
            <motion.button
              key={letter}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setSelectedLetter(letter);
                setVisibleCount(24);
              }}
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm
                ${
                  selectedLetter === letter
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md scale-105"
                    : "bg-white text-gray-600 border hover:bg-orange-50 hover:shadow-md hover:shadow-orange-200 hover:scale-105"
                }`}
            >
              {letter}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* 🏷️ Brands Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <AnimatePresence>
          {visibleBrands.length > 0 ? (
            visibleBrands.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer 
                  hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center h-24 p-4 relative">
                  <Image
                    src={logo}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition">
                    {brand.name}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-gray-500"
            >
              No brands found for "{selectedLetter || searchQuery}"
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* View More */}
      {visibleCount < filteredBrands.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white 
              font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            View More
          </motion.button>
        </div>
      )}
    </section>
  );
}
