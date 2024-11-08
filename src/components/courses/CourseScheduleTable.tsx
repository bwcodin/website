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
      <div className="flex gap-x-10 font-dm-mono md:text-2xl font-medium tracking-tight">
        <p
          className={
            selectedSeason === "Xmas"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Xmas")}
        >
          Christmas&apos24
        </p>
        <p
          className={
            selectedSeason === "Fall"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Fall")}
        >
          Fall&apos24
        </p>
        <p
          className={
            selectedSeason === "Summer"
              ? "underline underline-offset-[6px] md:decoration-[6px] decoration-2 hover:cursor-pointer"
              : "hover:cursor-pointer"
          }
          onClick={() => setSelectedSeason("Summer")}
        >
          Summer&apos24
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
