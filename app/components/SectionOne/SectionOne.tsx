import React from "react";
import "../../styles/styles.css";
type Props = {};

export default function SectionOne({}: Props) {
  return (
    <div className="h-[32vh] bg-[#212529] ">
      <div className="flex justify-between items-center  h-[120px] ">
        <div className="w-[250px] ml-5 ">
          <p className="text-gray-400 mb-1">Hello Andrew.</p>
          <h1 className="text-2xl">Good Morning</h1>
        </div>
        <div className="mr-5">
          <button className="w-[140px] text-black rounded-3xl bg-purple-400 h-[42px]  active:bg-purple-500">
            Add Employee
          </button>
        </div>
      </div>
      <div className="flex overflow-x-scroll overflow-hidden lg:overflow-hidden lg:flex-nowrap lg:justify-around lg:gap-x-2 w-full">
        <div className=" min-w-[200px] min-h-[200px] lg:w-[16%] lg:h-[25vh] text-black rounded-3xl  bg-white border-1  flex flex-col  border-gray-100 shadow-md pl-5 pt-7 ml-5 lg:ml-0 ">
          <div className="w-[70px] h-[70px] bg-purple-200 rounded-full flex justify-center items-center ">
            M
          </div>
          <div className="flex flex-col">
            <p>Total Employee</p>
            <h1 className="text-xl font-medium ">200/200</h1>
          </div>
        </div>
        <div className=" min-w-[200px]  min-h-[200px] lg:w-[16%] lg:h-[25vh] text-black rounded-3xl ml-5 bg-white border-1  flex flex-col  border-gray-100 shadow-md pl-5 pt-7 ">
          <div className="w-[70px] h-[70px] bg-green-200 rounded-full flex justify-center items-center ">
            M
          </div>
          <div className="flex flex-col">
            <p>On Leave</p>
            <h1 className="text-xl font-medium ">12/200</h1>
          </div>
        </div>
        <div className=" min-w-[200px]  min-h-[200px] lg:w-[16%] lg:h-[25vh] text-black rounded-3xl ml-5 bg-white border-1  flex flex-col  border-gray-100 shadow-md pl-5 pt-7 ">
          <div className="w-[70px] h-[70px] bg-sky-200 rounded-full flex justify-center items-center ">
            M
          </div>
          <div className="flex flex-col">
            <p>New Joinee</p>
            <h1 className="text-xl font-medium ">15/200</h1>
          </div>
        </div>
        <div className=" min-w-[200px]  min-h-[200px] lg:w-[16%] lg:h-[25vh] text-black rounded-3xl ml-5 bg-white border-1  flex flex-col  border-gray-100 shadow-md pl-5 pt-7 ">
          <div className="w-[70px] h-[70px] bg-orange-200 rounded-full flex justify-center items-center ">
            M
          </div>
          <div className="flex flex-col">
            <p>Happiness Rate</p>
            <h1 className="text-xl font-medium ">80%</h1>
          </div>
        </div>
        <div className=" min-w-[200px]  min-h-[200px] lg:w-[16%] lg:h-[25vh] text-black rounded-3xl ml-5 bg-white border-1  flex flex-col  border-gray-100 shadow-md pl-5 pt-7 ">
          <div className="w-[70px] h-[70px] bg-gray-200 rounded-full flex justify-center items-center ">
            M
          </div>
          <div className="flex flex-col">
            <p>Employee Graph</p>
            <h1 className="text-xl font-medium ">200/200</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
