"use client";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";

type Props = {};

const Table = (props: Props) => {
  const data = [
    {
      id: "1",
      name: "vedang mule",
      location: "chandrapur",
    },
    {
      id: "2",
      name: "lokesh bagul",
      location: "dhule",
    },
    {
      id: "3",
      name: "sarvesh damle",
      location: "chiplun",
    },
    {
      id: "4",
      name: "aryan sadavelkar",
      location: "mumbai",
    },
    {
      id: "5",
      name: "shivam raina",
      location: "jammu",
    },
  ];
  const columnHelper = createColumnHelper();
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "NAME",
    },
    {
      accessorKey: "location",
      header: "LOCATION",
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div className="h-full w-full   px-5 ">
      <table className="w-[100%]  rounded-l-3xl  rounded-r-3xl  bg-white ">
        <thead className="h-[60px] ">
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              className=" cursor-pointer text-center border-[1px] border-gray-500"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
