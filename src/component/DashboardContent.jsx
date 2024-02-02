import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { AiFillPushpin } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaLongArrowAltUp } from "react-icons/fa";
import image from '../assets/adjustments-clipart-7-PhotoRoom.png-PhotoRoom.png'
const DashboardContent = () => {
  return (
    <>
   
    <div className="grid grid-cols-1">
    <div className='text-2xl font-semibold font-sans text-[#2F345A]'>Dashboard</div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="rounded-lg bg-[#FFEFE7]  p-4 mt-3">
            <div className="flex font-semibold text-xl ">Available&nbsp;Position</div>
            <div className="text-[#121843] text-4xl font-semibold pt-2">24</div>
            <div className="text-[#FF5151] font-medium pt-2">4 Urgenty needed</div>
        </div>
        <div className="rounded-lg bg-[#E8F0FB] block  p-4 mt-3">
            <div className="font-semibold text-xl">Job Board</div>
            <div className="text-[#121843] text-4xl font-semibold  pt-2">10</div>
            <div className="text-[#3786F1] font-medium pt-2 ">4 Active hiring</div>
        </div>
        <div className="rounded-lg bg-[#FDEBF9]  p-4 mt-3">
            <div className="font-semibold text-xl">New Employees</div>
            <div className="text-[#121843] text-4xl font-semibold pt-2">24</div>
            <div className="text-[#F072D4] font-medium pt-2">4 Department</div>
        </div>
    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-1">
    <div className="grid grid-cols-2 rounded-lg bg-[#FFFFFF] border-2 p-1 pt-4 pl-2 ">
        <div className="">
            <div className="text-[#121843] font-bold  text-lg">Total Employees</div>
            <div className=" text-4xl pt-3 text-[#121843] font-semibold">216</div>
            <div className="text-[#7B7B7B] text-xs pt-3 font-regular">120 Men</div>
            <div className="text-[#7B7B7B] text-xs font-regular">96 Women</div>
             </div>

             <div className="">
                <div className="text-[#FF6464] font-semibold ml-8">+2%</div>
                <div className="text-[#FF6464] ml-10"><FaLongArrowAltUp /></div>
                <div className="text-[#FF6464]"><img src={image} alt="" className='h-10 w-28 '/></div>
                <div className="bg-[#FFEFE7] text-[#4A4847] rounded-sm mt-5 px-1">+2% Past month</div>
             </div>


    </div>
    <div className="grid grid-cols-2 rounded-lg bg-[#FFFFFF] border-2 p-4    ">
        <div className="">
            <div className="text-[#121843] font-bold text-lg  ">Talent Request</div>
            <div className=" text-4xl pt-3 text-[#121843] font-semibold">16</div>
            <div className="text-[#7B7B7B] text-xs pt-3 font-regular">120 Men</div>
            <div className="text-[#7B7B7B] text-xs font-regular">96 Women</div>
             </div>

             <div className="">
                <div className="text-[#FF6464] font-semibold ml-8">+5%</div>
                <div className="text-[#FF6464] ml-10"><FaLongArrowAltUp /></div>
                <div className="text-[#FF6464]"><img src={image} alt="" className='h-10 w-28 '/></div>
                <div className="bg-[#FFEFE7] text-[#4A4847] rounded-sm mt-5 px-1">+5% Past month</div>
             </div>


    </div>
  

    </div>




    <div className=" border-2 mt-8 rounded-md p-5">

        <div className="flex flex-row justify-between   ">
        <div className="text-[#2F345A] font-bold text-xl">Announcement</div>
        <div className="flex justify-end border-2 rounded-md p-1">Today,13 Sept 2021<MdOutlineKeyboardArrowDown style={{marginTop:5}}/> </div>
        </div>


      <div className="flex flex-row justify-between bg-[#FAFAFA] p-2 rounded-sm mt-9">
      <div className="grid grid-cols-1  rounded-sm">
        <div className="">Outing schedule for every departement</div>
        <div className="">5 minutes ago</div>
        </div>
        <div className="flex flex-row justify-end p-2">
        <div className="text-[#686868] " style={{fontSize:28}}><AiFillPushpin/></div>
        <div className="text-[#B7B7B7] pl-5 "style={{fontSize:28}} ><BsThreeDots/></div>
        </div>
    </div>

    <div className="flex flex-row justify-between bg-[#FAFAFA] p-2 rounded-sm mt-5">
      <div className="grid grid-cols-1  rounded-sm">
        <div className="">Meeting HR Department</div>
        <div className="">Yesterday, 12:30 PM</div>
        </div>
        <div className="flex flex-row justify-end p-2">
        <div className="text-[#B2B2B2] " style={{fontSize:28}}><AiFillPushpin/></div>
        <div className="text-[#B7B7B7] pl-5 "style={{fontSize:28}} ><BsThreeDots/></div>
        </div>
    </div>

    <div className="flex flex-row justify-between bg-[#FAFAFA] p-2 rounded-sm mt-5">
      <div className="grid grid-cols-1  rounded-sm">
        <div className="">IT Department need two more talents for UX/UI Designer position</div>
        <div className="">Yesterday, 09:15 AM</div>
        </div>
        <div className="flex flex-row justify-end p-2">
        <div className="text-[#B2B2B2] " style={{fontSize:28}}><AiFillPushpin/></div>
        <div className="text-[#B7B7B7] pl-5 "style={{fontSize:28}} ><BsThreeDots/></div>
        </div>
    </div>


  
   
    <hr className='-mx-5'/>
    <div className="text-center text-[#FF5151] font-semibold pt-1 ">See All Announcement</div>
    </div>

    </div>

    </>
  )
}

export default DashboardContent