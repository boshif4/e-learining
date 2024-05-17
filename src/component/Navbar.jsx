import React from "react";
import logo from "../images/logo.svg";
import { IoMdSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className=" container flex-col items-center gap-4 justify-center lg:w-1/1 flex justify-between p-[3rem] sm:flex-row mx-auto">
        <div className="logo flex ">
          <h1 className="max-w-24  font-semibold sm:max-w-44 text-[30px] text-[#10C843]">eLearning</h1>
        </div>
        <div className="links text-white flex justify-center items-center cursor-pointer">
          <ul className="flex gap-[20px]  mx-2">
           
            <button className="search"><IoMdSearch /></button>
            <button className="trial bg-[#10C843] px-7 py-3 rounded-full flex items-center gap-3">Start free Trial <FaArrowRightLong /></button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
