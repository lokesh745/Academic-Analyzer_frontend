"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import SectionOne from "../components/SectionOne/SectionOne";
import Attendence from "../components/Graphs/Attendence";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      <div className="w-full top-[70px] relative flex flex-col gap-5 ">
        <SectionOne />
        <Attendence />
        {children}
      </div>
    </section>
  );
}
