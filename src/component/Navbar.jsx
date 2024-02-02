import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import image from '../assets/young-adults-graduation-gowns-smiling-proudly-generated-by-ai.jpg'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row pt-2 p-5">

<div className="lg:hidden text-[#B2B2B2]  "><FaBars className="m-2 mr-3 " style={{fontSize:24}}
/> </div>
        <div className="h-10 w-80 bg-[#FAFAFA]  rounded-md sm:flex flex-row justify-around hidden ">
          <input type="search" placeholder="Search" className="bg-[#FAFAFA] w-full pl-3 outline-none"/>
          <div className="p-2.5 text-[#B2B2B2]">
            <BiSearch style={{fontSize:"20px"}}/>
          </div>
        </div>
        <div className="p-2.5 sm:hidden text-[#B2B2B2]">
            <BiSearch style={{fontSize:"20px"}}/>
        </div>
        
        <div className="flex justify-end flex-grow">
          <div className="p-3 ml-8   text-[#B2B2B2] relative">
          <div className="h-2 w-2 bg-red-600 rounded-full absolute mt-1 ml-3.5"></div>
            <IoMdNotifications style={{fontSize:"25px"}} />
          </div>
          <div className="p-3 px-2 text-[#B2B2B2]">
            <RiMessage2Line style={{fontSize:"25px"}}/>
          </div>
   
          <img src={image} alt="" className="h-10 w-10 rounded-3xl mx-2 " />
          <div className="text-sm font-medium p-2 font-sans hidden sm:block ">Admirra John</div>
          <div className="mt-2 sm:mr-8 text-[#B2B2B2]">
            <MdOutlineKeyboardArrowDown style={{fontSize:24}}/>
          </div>
        </div>
      </div>
      <hr className="mx-4"/>
    </>
  );
};

export default Navbar;
