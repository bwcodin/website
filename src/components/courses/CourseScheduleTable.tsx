"use client";
import React, { useState } from "react";
import SpringTable from "./SpringTable";
import SummerTable from "./SummerTable";
import FallTable from "./FallTable";

const CourseScheduleTable = () => {
  const [selectedSeason, setSelectedSeason] = useState("Spring");
  return (
    <div className="flex flex-col gap-y-8 text-darkGrey">
      <div className="flex gap-x-7 font-dm-mono md:text-2xl font-medium tracking-tight">
        <p
          className={
            selectedSeason === "Spring"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Spring")}
        >
          Spring
        </p>
        <p
          className={
            selectedSeason === "Summer"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Summer")}
        >
          Summer
        </p>
        <p
          className={
            selectedSeason === "Fall"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Fall")}
        >
          Fall
        </p>
      </div>
      {selectedSeason === "Spring" && <SpringTable />}
      {selectedSeason === "Summer" && <SummerTable />}
      {selectedSeason === "Fall" && <FallTable />}
    </div>
  );
};

export default CourseScheduleTable;
