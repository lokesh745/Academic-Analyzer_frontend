"use client";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { PiUserCircle } from "react-icons/pi";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  const [hamburgerState, setHamburgerState] = useState(true);
  return (
    <div className="border-b-2 fixed w-full z-10  border-gray-700">
      <nav className="text-white h-[70px] bg-[#212529] flex justify-between backdrop-filter backdrop-blur-sm   ">
        <div className="flex lg:gap-x-28">
          <div className="w-[70px] flex items-center hover:cursor-pointer mx-5  justify-ceter">
            VIT
          </div>
          <div className="lg:flex w-[700px] lg:justify-between lg:items-center hidden   ">
            <div className="hover:cursor-pointer">Dashboard</div>
            <div className="hover:cursor-pointer">User</div>
            <div className="hover:cursor-pointer">Courses</div>
            <div className="hover:cursor-pointer">Department</div>
          </div>
        </div>
        <div className="w-[130px]  lg:w-[130px]  flex items-center lg:justify-around hover:cursor-pointer justify-around mx-5 ">
          <div className="">
            <PiUserCircle size={28} />
          </div>
          <Link href="/">
            <div className=" hidden lg:flex  ">Logout</div>
          </Link>
          {hamburgerState ? (
            <div
              className="lg:hidden ml-3 "
              onClick={() => setHamburgerState(!hamburgerState)}
            >
              <RxHamburgerMenu size={28} />
            </div>
          ) : (
            <div
              className="lg:hidden ml-3"
              onClick={() => setHamburgerState(!hamburgerState)}
            >
              <RxCross1 size={28} />
            </div>
          )}
        </div>
      </nav>
      <div
        className={
          hamburgerState
            ? "bg-[#212529] w-full  flex flex-col  lg:hidden absolute top-[-400px] "
            : "bg-[#212529] w-full  flex flex-col  lg:hidden absolute top-[70px]"
        }
      >
        <div className="hover:cursor-pointer border  border-gray-700 py-3 w-full flex justify-center text-white">
          Dashboard
        </div>
        <div className="hover:cursor-pointer border  border-gray-700 py-3 w-full flex justify-center text-white">
          Employee
        </div>
        <div className="hover:cursor-pointer border  border-gray-700 py-3 w-full flex justify-center text-white">
          Jobs
        </div>
        <div className="hover:cursor-pointer border  border-gray-700 py-3 w-full flex justify-center text-white">
          Candidates
        </div>
        <div className="hover:cursor-pointer border  border-gray-700 py-3 w-full flex justify-center text-white">
          Leaves
        </div>
        <Link href="/">
          <div className="hover:cursor-pointer border  border-gray-700 py-3 w-full flex justify-center text-white">
            Logout
          </div>
        </Link>
      </div>
    </div>
  );
}
