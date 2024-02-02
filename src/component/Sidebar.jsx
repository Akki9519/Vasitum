import React from "react";
import image from "../assets/blue.png";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillSchedule } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { IoMdMan } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";
const Sidebar = (props) => {
  return (
    <>
      <div className="bg-[#FAFAFA] p-6 h-full">
        <div className="flex flex-row lg:justify-center md:justify-center">
          <div className="">
            <img src={image} alt="" className="h-10 w-10" />
          </div>
          <div className="pl-2 font-bold text-2xl text-[#0A337A] lg:block md:hidden">
            Vasitum
          </div>
        </div>

        <div className="text-[#C3C3C3]  text-sm font-semibold pt-12  ">
          MAIN MENU
        </div>

        <div
          className="flex flex-row  mt-5"
          style={{ color: props.component === "Dashboard" ? "red" : "black" }}
        >
          <div className="" style={{ fontSize: 28 }}>
            <BiSolidDashboard sx={{ fontSize: "60px" }} />
          </div>
          <div
            className="pl-5 font-medium lg:block md:hidden cursor-pointer "
            onClick={() => {
              props.setComponent("Dashboard");
            }}
          >
            Dashboard
          </div>
        </div>

        <div
          className="flex flex-row  mt-8 cursor-pointer"
          style={{ color: props.component === "Recruitment" ? "red" : "black" }}
        >
          <div className="" style={{ fontSize: 28 }}>
            <BsFillPersonPlusFill />
          </div>
          <div
            className=" pl-5 font-medium lg:block md:hidden cursor-pointer"
            onClick={() => {
              props.setComponent("Recruitment");
            }}
          >
            Recruitment
          </div>
        </div>

        <div
          className="flex flex-row mt-8"
          style={{ color: props.component === "Schedule" ? "red" : "black" }}
        >
          <div className="" style={{ fontSize: 28 }}>
            <AiFillSchedule />
          </div>
          <div
            className=" pl-5 font-medium  lg:block md:hidden cursor-pointer"
            onClick={() => {
              props.setComponent("Schedule");
            }}
          >
            Schedule
          </div>
        </div>

        <div
          className="flex flex-row  mt-8"
          style={{ color: props.component === "Employee" ? "red" : "black" }}
        >
          <div className="" style={{ fontSize: 28 }}>
            <IoMdMan />
          </div>
          <div
            className=" pl-5 font-medium lg:block md:hidden cursor-pointer"
            onClick={() => {
              props.setComponent("Employee");
            }}
          >
            Employee
          </div>
        </div>
        <div
          className="flex flex-row mt-8"
          style={{ color: props.component === "Department" ? "red" : "black" }}
        >
          <div className="" style={{ fontSize: 28 }}>
            <MdLocalFireDepartment />
          </div>
          <div
            className=" pl-5 font-medium lg:block md:hidden cursor-pointer"
            onClick={() => {
              props.setComponent("Department");
            }}
          >
            Department
          </div>
        </div>
        <div className="text-[#C3C3C3]  text-sm font-semibold pt-14">OTHER</div>
        <div className="flex flex-row mt-10">
          <div className="" style={{ fontSize: 28 }}>
            <BiSupport />
          </div>
          <div className="text-[#686868] pl-5 font-medium lg:block md:hidden">
            Support
          </div>
        </div>
        <div className="flex flex-row mt-8 ">
          <div className="" style={{ fontSize: 28 }}>
            <FiSettings />
          </div>
          <div className="text-[#686868] pl-5 font-medium lg:block md:hidden">
            Setting
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
