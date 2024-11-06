import React from "react";
import CourseScheduleTable from "./CourseScheduleTable";

const CourseSchedule = () => {
  return (
    <div className="md:py-24 py-12 md:px-40 px-7 flex flex-col gap-y-4">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue">
        Course Schedule
      </h2>
      <CourseScheduleTable />
    </div>
  );
};

export default CourseSchedule;
