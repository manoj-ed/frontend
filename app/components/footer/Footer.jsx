"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange text-white">
      <div className="w-full">
        <div className="h-auto w-full flex flex-col md:flex-row justify-start md:justify-center gap-6 py-10 px-6">
          <div className="grid w-full grid-cols-1 md:grid-cols-4 lg:mx-10 gap-10">
            {/* Column 1: Logo */}
            <div>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Equipments Dekho Logo"
                  width={150}
                  height={80}
                  className="cursor-pointer"
                />
              </Link>
              <p className="text-sm mt-2">
                Your trusted partner for industrial equipment.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/buynew" className="hover:underline">
                    Buy Now
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:underline">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FaPhone /> +91-9876543210
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> info@equipmentsdekho.com
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4 text-xl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="hover:text-gray-200" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-gray-200" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-gray-200" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-300 text-center py-4 text-sm">
          © {new Date().getFullYear()} Equipments Dekho. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
