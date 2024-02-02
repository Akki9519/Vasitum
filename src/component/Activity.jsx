import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Activity = () => {
  return (
    <>
      <div className="flex lg:flex-col md:flex-row flex-col mt-12 gap-5 h-full">
        <div className="rounded-lg">
          <div className="text-white font-semibold p-3 pl-7 bg-[#1B204A] rounded-t-lg">
            Recent Activity
          </div>
          <div className="grid grid-cols-1 bg-[#121843] p-4 rounded-b-lg ">
            <div className="text-[white] text-xs pt-2 pl-3">
              10.40 AM, Fri 10 Sept 2021
            </div>
            <div className="text-[white] text-xl pt-2 pl-3">
              You Posted a New Job
            </div>
            <div className="text-[white] text-sm pt-2 pl-3">
              Kindly check the requirements and terms of work and 
              make sure everything is right.
            </div>

            <div className="lg:flex flex-row sm:grid-cols-1 mb-5 pt-6">
              <div className="text-[white] font-semibold pt-6 ml-3 ">
                Today you makes 12 Activity
              </div>
              <div className="bg-[#FF5151] rounded-sm p-1.5  px-5 lg:ml-14 md:mt-5 sm:mt-5 text-center  text-white  ">
                See All Activity
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 p-4 pt-7 lg:mt-5">
          <div className="flex flex-row justify-between">
            <div className="text-[#2F345A] font-semibold text-xl">
              Upcoming Schedule
            </div>
           
            <div className="flex   border-2 rounded-md p-1 text-sm">
              Today,13&nbsp;Sep&nbsp;2021
              <MdOutlineKeyboardArrowDown style={{ marginTop: 5 }} />{" "}
            </div>
          </div>

         <div className="overflow-auto h-auto">
          <div className="text-[#686868] pt-5">Priority</div>
          <div className="flex flex-row justify-between bg-[#FAFAFA] p-3 rounded-sm ">
            <div className="grid grid-cols-1  rounded-sm flex-grow">
              <div className="">Review&nbsp;candidate&nbsp;applications</div>
              <div className="">Today - 11.30 AM</div>
            </div>
            <div className="flex flex-row justify-end p-2">
              <div className="text-[#B7B7B7] pl-5 " style={{ fontSize: 28 }}>
                <BsThreeDots />
              </div>
            </div>
          </div>

          <div className="text-[#686868] pt-3">Other</div>

          <div className="flex flex-row justify-between bg-[#FAFAFA] p-3 rounded-sm ">
            <div className="grid grid-cols-1  rounded-sm flex-grow">
              <div className="">Interview with candidates</div>
              <div className="">Today - 10.30 AM</div>
            </div>
            <div className="flex flex-row justify-end p-2">
              <div className="text-[#B7B7B7] pl-5 " style={{ fontSize: 28 }}>
                <BsThreeDots />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between bg-[#FAFAFA] p-3 rounded-sm mt-3 ">
            <div className="grid grid-cols-1  rounded-sm flex-grow">
              <div className="">Short meeting with product designer from IT Departement</div>
              <div className="">Today - 09:15.30 AM</div>
            </div>
            <div className="flex flex-row justify-end p-2">
              <div className="text-[#B7B7B7] pl-5 " style={{ fontSize: 28 }}>
                <BsThreeDots />
              </div>
            </div>
          </div>

          

          </div>
          
          <div className="h-5 bg-[#FAFAFA] p-2 rounded-t-md mt-5"></div>
          <hr className="-mx-4" />
          <div className="text-center text-[#FF6767] font-semibold pt-2">
            Creat a New Schedule
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
