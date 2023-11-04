"use client";
import React, { useState } from "react";
import { BsPlusLg, BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import "../../styles/styles.css";
import Table from "../Table/Table";
type Props = {};

export default function UserSectionOne({}: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="h-[280px] bg-[#212529]  ">
      <div className="flex justify-between items-center  h-[120px] ">
        <div className="w-[250px] ml-5 ">
          <h1 className="text-2xl text-white">Users</h1>
        </div>
        <div className="mr-5">
          <button className="w-[130px] flex items-center gap-x-2 text-black rounded-3xl bg-purple-400 h-[42px]  active:bg-purple-500">
            <div className="ml-3">
              <BsPlusLg size={20} />
            </div>
            <p className="">Add User</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse gap-y-3 lg:flex-row lg:gap-y-0 mb-5">
        <div className="flex gap-x-3 ml-5">
          <div className="bg-[#212529] w-[120px] h-[40px] flex items-center justify-center border-[1px] border-gray-600 rounded-3xl ">
            <select className="bg-[#212529] text-white">
              <option hidden>Role</option>
              <option className="bg-[#212529] ">Admin</option>
              <option className="bg-[#212529] ">Professor</option>
              <option className="bg-[#212529] ">Student</option>
            </select>
          </div>
          <div className="bg-[#212529] w-[120px] h-[40px] flex items-center justify-center  border-[1px] border-gray-600 rounded-3xl ">
            <select className="bg-[#212529] text-white  ">
              <option className="bg-[#212529] " hidden>
                Branch
              </option>
              <option className="bg-[#212529] ">CMPN</option>
              <option className="bg-[#212529] ">INFT</option>
              <option className="bg-[#212529] ">EXTC</option>
              <option className="bg-[#212529] ">ETRX</option>
              <option className="bg-[#212529] ">BIOM</option>
            </select>
          </div>
          <div className="bg-[#212529]  w-[120px] h-[40px] flex items-center justify-center border-[1px] border-gray-600 rounded-3xl ">
            <select className="bg-[#212529] text-white">
              <option hidden>Batch</option>
              <option className="bg-[#212529]">Batch 2021</option>
              <option className="bg-[#212529]">Batch 2022</option>
              <option className="bg-[#212529]">Batch 2023</option>
              <option className="bg-[#212529]">Batch 2024</option>
            </select>
          </div>
        </div>
        <div className="flex gap-x-3 mr-5 justify-end lg:justify-normal ">
          <div
            className={
              isActive
                ? "cursor-pointer px-1 w-[40px] h-[40px] bg-purple-400  flex justify-center items-center rounded-full"
                : "cursor-pointer px-1 w-[40px] h-[40px] border-[1px] border-gray-600 flex justify-center items-center rounded-full"
            }
            onClick={() => setIsActive(isActive)}
          >
            <BsGrid3X3Gap size={20} style={{ color: "white" }} />
          </div>
          <div
            className={
              !isActive
                ? "cursor-pointer px-1 w-[40px] h-[40px] bg-purple-400  flex justify-center items-center rounded-full"
                : "cursor-pointer px-1 w-[40px] h-[40px] border-[1px] border-gray-600 flex justify-center items-center rounded-full"
            }
            onClick={() => setIsActive(!isActive)}
          >
            <AiOutlineUnorderedList size={20} style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}
