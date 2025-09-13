"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import cat from "../../public/CAT.png";
import jcb from "../../public/JCB.png";
import { getAllBrands } from "../utils/userAPI";

// const brands = [
//   {
//     id: 1,
//     name: "Cat",
//     logo: cat,
//   },
//   {
//     id: 2,
//     name: "JCB  ",
//     logo: jcb,
//   },
//   {
//     id: 3,
//     name: "Amazon",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   },
//   {
//     id: 4,
//     name: "Bata",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Bata_Shoe_Logo.svg",
//   },
//   {
//     id: 5,
//     name: "Canon",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Canon_logo.svg",
//   },
//   {
//     id: 6,
//     name: "Coca-Cola",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
//   },
//   {
//     id: 7,
//     name: "Dell",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
//   },
//   {
//     id: 8,
//     name: "Disney",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_Logo.svg",
//   },
//   {
//     id: 9,
//     name: "Gucci",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Gucci_Logo.svg",
//   },
//   {
//     id: 10,
//     name: "H&M",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
//   },
//   {
//     id: 11,
//     name: "Honda",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Honda-logo.svg",
//   },
//   {
//     id: 12,
//     name: "IKEA",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Ikea_logo.svg",
//   },
//   {
//     id: 13,
//     name: "Intel",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
//   },
//   {
//     id: 14,
//     name: "LG",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
//   },
//   {
//     id: 15,
//     name: "Louis Vuitton",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Louis_Vuitton_logo_and_wordmark.svg",
//   },
//   {
//     id: 16,
//     name: "Mercedes-Benz",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
//   },
//   {
//     id: 17,
//     name: "Microsoft",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
//   },
//   {
//     id: 18,
//     name: "Nestle",
//     logo: "https://upload.wikimedia.org/wikipedia/en/5/57/Nestle_textlogo.svg",
//   },
//   {
//     id: 19,
//     name: "Nike",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//   },
//   {
//     id: 20,
//     name: "Nintendo",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg",
//   },
//   {
//     id: 21,
//     name: "Panasonic",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Panasonic_logo.svg",
//   },
//   {
//     id: 22,
//     name: "Pepsi",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pepsi_logo_2014.svg",
//   },
//   {
//     id: 23,
//     name: "Puma",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
//   },
//   {
//     id: 24,
//     name: "Reebok",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Reebok_2019_logo.svg",
//   },
//   {
//     id: 25,
//     name: "Rolex",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Rolex_logo.svg",
//   },
//   {
//     id: 26,
//     name: "Samsung",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
//   },
//   {
//     id: 27,
//     name: "Sony",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Sony_Logo.svg",
//   },
//   {
//     id: 28,
//     name: "Starbucks",
//     logo: "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Coffee_Logo.svg",
//   },
//   {
//     id: 29,
//     name: "Tesla",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
//   },
//   {
//     id: 30,
//     name: "Toyota",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
//   },
//   {
//     id: 31,
//     name: "Under Armour",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Under_armour_logo.svg",
//   },
//   {
//     id: 32,
//     name: "Uniqlo",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Uniqlo_logo_Japan.svg",
//   },
//   {
//     id: 33,
//     name: "Versace",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Versace_logo.svg",
//   },
//   {
//     id: 34,
//     name: "Volkswagen",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/VW_logo.svg",
//   },
//   {
//     id: 35,
//     name: "Xiaomi",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
//   },
//   {
//     id: 36,
//     name: "Zara",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
//   },
//   {
//     id: 37,
//     name: "Lenovo",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lenovo_logo_2015.svg",
//   },
//   {
//     id: 38,
//     name: "Philips",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Philips_logo.svg",
//   },
//   {
//     id: 39,
//     name: "Oppo",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/OPPO_Logo_2019.svg",
//   },
//   {
//     id: 40,
//     name: "Vivo",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Vivo_logo.svg",
//   },
//   {
//     id: 41,
//     name: "OnePlus",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/OnePlus_logo.svg",
//   },
//   {
//     id: 42,
//     name: "HP",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/HP_logo_2012.svg",
//   },
//   {
//     id: 43,
//     name: "Asus",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/AsusTek_logo.svg",
//   },
//   {
//     id: 44,
//     name: "Acer",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Acer_logo.svg",
//   },
//   {
//     id: 45,
//     name: "Porsche",
//     logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Porsche_logo.svg",
//   },
//   {
//     id: 46,
//     name: "Jaguar",
//     logo: "https://upload.wikimedia.org/wikipedia/en/6/6f/Jaguar_logo.svg",
//   },
//   {
//     id: 47,
//     name: "Ferrari",
//     logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Ferrari-Logo.svg",
//   },
//   {
//     id: 48,
//     name: "Lamborghini",
//     logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/Lamborghini_Logo.svg",
//   },
//   {
//     id: 49,
//     name: "Chanel",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Chanel_logo.svg",
//   },
//   {
//     id: 50,
//     name: "Prada",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Prada-Logo.svg",
//   },
//   {
//     id: 51,
//     name: "Hermès",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hermes.svg",
//   },
//   {
//     id: 52,
//     name: "Burberry",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Burberry_logo.svg",
//   },
//   {
//     id: 53,
//     name: "Balenciaga",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Balenciaga_logo.svg",
//   },
//   {
//     id: 54,
//     name: "Ray-Ban",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Ray-Ban_logo.svg",
//   },
//   {
//     id: 55,
//     name: "Levi’s",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Levi%27s_logo.svg",
//   },
//   {
//     id: 56,
//     name: "KFC",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg",
//   },
//   {
//     id: 57,
//     name: "McDonald’s",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/McDonald%27s_Golden_Arches.svg",
//   },
//   {
//     id: 58,
//     name: "Subway",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Subway_2016_logo.svg",
//   },
//   {
//     id: 59,
//     name: "Domino’s",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
//   },
//   {
//     id: 60,
//     name: "Burger King",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg",
//   },
//   {
//     id: 61,
//     name: "Westside",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Trent_Westside_Logo.png",
//   },
// ];


export default function ExploreBrands() {
  const router = useRouter();

  const [selectedLetter, setSelectedLetter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [brands, setBrands] = useState([]);

  const getBrands = async () => {
    const brands = await getAllBrands();
    console.log("Fetched Brands:", brands);
    setBrands(brands.data);
  };

  useEffect(() => {
    getBrands();
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value) {
      setSelectedLetter(null);
    }
  };

  const filteredBrands = brands.filter((b) => {
    const matchesLetter = selectedLetter
      ? b.brand_name.startsWith(selectedLetter)
      : true;
    const matchesSearch = searchQuery
      ? b.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesLetter && matchesSearch;
  });

  const visibleBrands = filteredBrands.slice(0, visibleCount);

  return (
    <section className="py-10 px-6 md:px-12 ">
      {/* Title */}
      <h2
        className="relative text-3xl md:text-4xl font-extrabold text-center mb-6 
        bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"
      >
        Explore Brands
      </h2>

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

      {/* Alphabet Filter - only show if no search query */}
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
                className="group flex items-center py-2 flex-col justify-evenly relative bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer 
                  hover:shadow-lg transition-all duration-300"
                onClick={() =>
                  router.push(
                    `brands/${brand.id}/?brand=${brand.brand_name}`
                  )
                }
              >
                <div className="flex items-center justify-center h-20 w-20 relative">
                  <Image
                    // src={brand?.logo}
                    src={brand?.brand_image}
                    // src={jcb}
                    alt={brand.brand_name}
                    width={100}
                    height={100}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition">
                    {brand.brand_name}
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
