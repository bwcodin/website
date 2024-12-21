"use client";
import React, { useState } from "react";
import SpringTable from "./SpringTable";
import SummerTable from "./SummerTable";
import FallTable from "./FallTable";
import XmasTable from "./XmasTable";

const CourseScheduleTable = () => {
  const [selectedSeason, setSelectedSeason] = useState("Xmas");
  return (
    <div className="flex flex-col gap-y-8 text-darkGrey">
      <div className="flex md:gap-x-10 gap-x-5 flex-wrap md:gap-y-0 gap-y-3 font-dm-mono md:text-2xl font-medium tracking-tight">
        <p
          className={
            selectedSeason === "Xmas"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Xmas")}
        >
          Christmas&apos;24
        </p>
        <p
          className={
            selectedSeason === "Spring"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Spring")}
        >
          Spring&apos;25
        </p>
      </div>
      {selectedSeason === "Xmas" && <XmasTable />}
      {selectedSeason === "Spring" && <SpringTable />}
      {selectedSeason === "Summer" && <SummerTable />}
      {selectedSeason === "Fall" && <FallTable />}
    </div>
  );
};

export default CourseScheduleTable;
