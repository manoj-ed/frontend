import React from "react";
import Image from "next/image";
import favorite from "@/public/favorite.svg";
import user from "@/public/user.svg";
import logo from "@/public/logo.png";
import Link from "next/link";
import SideBar from "../common/navbar/sideBar";

const Navbar = () => {
  return (
    <div className="z-50 w-full sticky top-0 bg-white flex flex-col items-center justify-between overflow-x-hidden ">
      <div className="py-5 px-5 flex items-center justify-between w-full">
        {/* Menu */}

        <div className="w-auto md:w-full block md:hidden cursor-pointer">
          <SideBar />
        </div>

        {/* Logo */}
        <div className="w-auto md:w-full flex items-center justify-center md:justify-start">
          <div className="w-[120px] h-auto sm:w-[150px] md:w-[211px]">
            <Link href="/">
              <Image
                src={logo}
                alt="Equipments Dekho Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="font-inter w-full hidden md:block">
          <div className="flex items-center justify-between w-full max-w-md bg-white border border-offWhite rounded-full px-1 py-1">
            <input
              type="text"
              placeholder="Search"
              className="px-2 placehoder-black outline-none bg-transparent "
            />
            <button className="w-7 h-7 bg-orange rounded-full flex items-center justify-center cursor-pointer">
              {/* <svg className=" text-white" fill="currentColor" /> */}
            </button>
          </div>
        </div>

        {/* Account Controll */}
        <div className="w-auto md:w-full flex items-center justify-end gap-4">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={favorite}
              alt="favorite Icons"
              className="w-[39px] h-auto sm:w-[20px] md:w-[39px] cursor-pointer"
              width={0}
              height={0}
              sizes="100vw"
            />

            <Image
              src={user}
              alt="User Icon"
              className="w-[39px] h-auto sm:w-[20px] md:w-[39px] cursor-pointer"
              width={0}
              height={0}
              sizes="100vw"
            />
            
          </div>
        </div>
      </div>

      {/* hr */}
      <div className="bg-[#51D7EC] h-[3] w-full"></div>
    </div>
  );
};

export default Navbar;
