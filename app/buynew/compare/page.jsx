"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "../../../public/test.webp";

const productsDummy = [
  {
    id: 1,
    name: "CAT 320D",
    brand: "CAT",
    operating_weight: "20 ton",
    engine_power: "200 HP",
    max_dig_depth: "6.5 m",
    bucket_capacity: "1.0 m³",
    fuel_tank: "245 L",
    price: "85,00,000",
  },
  {
    id: 2,
    name: "TATA Hitachi EX210",
    brand: "TATA Hitachi",
    operating_weight: "21 ton",
    engine_power: "220 HP",
    max_dig_depth: "6.7 m",
    bucket_capacity: "1.1 m³",
    fuel_tank: "220 L",
    price: "80,00,000",
  },
  {
    id: 3,
    name: "Komatsu PC210",
    brand: "Komatsu",
    operating_weight: "20.5 ton",
    engine_power: "210 HP",
    max_dig_depth: "6.6 m",
    bucket_capacity: "1.05 m³",
    fuel_tank: "230 L",
    price: "83,00,000",
  },
];

const page = () => {
  const [selected, setSelected] = useState([]);

  const toggleCompare = (product) => {
    const exists = selected.find((p) => p.id === product.id);
    if (exists) {
      setSelected((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      if (selected.length < 3) {
        setSelected((prev) => [...prev, product]);
      }
    }
  };

  const removeItem = (id) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  };

  return (

    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Compare Products</h2>
      {/* PRODUCTS LIST */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productsDummy.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded-md shadow-sm flex flex-col items-center space-y-2"
          >
            <Image src={image} alt={p.name} width={100} height={80} className="rounded-md" />
            <p className="font-semibold text-center">{p.name}</p>
            <label className="flex items-center text-sm gap-2">
              <input
                type="checkbox"
                checked={!!selected.find((s) => s.id === p.id)}
                disabled={!selected.find((s) => s.id === p.id) && selected.length >= 3}
                onChange={() => toggleCompare(p)}
              />
              <span>Add to Compare</span>
            </label>
          </div>
        ))}
      </div>

      {/* COMPARISON TABLE */}
      {selected.length >= 2 && (
        <div className="border rounded-xl shadow-lg bg-white overflow-x-auto">
          <table className="min-w-[680px] w-full text-sm border-collapse">
            <thead className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
              <tr>
                <th className="text-left p-3">Specification</th>
                {selected.map((p) => (
                  <th key={p.id} className="p-3 text-center relative">
                    <button
                      onClick={() => removeItem(p.id)}
                      className="absolute top-1 right-1 text-red-500"
                    >
                      ❌
                    </button>
                    <div className="flex flex-col items-center">
                      <Image src={image} alt={p.name} width={80} height={60} />
                      <span className="font-semibold">{p.name}</span>
                      <span className="text-xs">{p.brand}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Operating Weight */}
              <tr className="border-t bg-gray-50">
                <td className="p-3 font-medium">Operating Weight</td>
                {selected.map((p) => (
                  <td key={p.id} className="text-center p-3">{p.operating_weight}</td>
                ))}
              </tr>

              {/* Engine Power */}
              <tr className="border-t">
                <td className="p-3 font-medium">Engine Power</td>
                {selected.map((p) => (
                  <td key={p.id} className="text-center p-3">{p.engine_power}</td>
                ))}
              </tr>

              {/* Max Dig Depth */}
              <tr className="border-t bg-gray-50">
                <td className="p-3 font-medium">Max Dig Depth</td>
                {selected.map((p) => (
                  <td key={p.id} className="text-center p-3">{p.max_dig_depth}</td>
                ))}
              </tr>

              {/* Bucket Capacity */}
              <tr className="border-t">
                <td className="p-3 font-medium">Bucket Capacity</td>
                {selected.map((p) => (
                  <td key={p.id} className="text-center p-3">{p.bucket_capacity}</td>
                ))}
              </tr>

              {/* Fuel Tank */}
              <tr className="border-t bg-gray-50">
                <td className="p-3 font-medium">Fuel Tank</td>
                {selected.map((p) => (
                  <td key={p.id} className="text-center p-3">{p.fuel_tank}</td>
                ))}
              </tr>

              {/* Price */}
              <tr className="border-t">
                <td className="p-3 font-medium">Price</td>
                {selected.map((p) => (
                  <td key={p.id} className="text-center p-3 text-orange-600 font-bold">
                    ₹{p.price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default page;
