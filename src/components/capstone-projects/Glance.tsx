"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import React from "react";

const Glance = () => {
  const isBreakPoint = useMediaQuery(768);
  return (
    <div className="bg-lighBlue py-12 flex flex-col items-center md:gap-y-12 gap-y-6">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-darkGrey">
        Capstone Projects at a Glance
      </h2>
      <div className="flex w-full md:justify-evenly justify-center flex-wrap md:flex-nowrap gap-x-7">
        <div className="flex flex-col gap-y-7 items-center md:max-w-52 max-w-40">
          <Image
            src={"/assets/board.png"}
            alt="board"
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <p className="font-dm-sans md:text-2xl font-bold text-darkGrey text-center">
            Unique learning experience
          </p>
        </div>
        <div className="flex flex-col gap-y-7 items-center md:max-w-52 max-w-40">
          <Image
            src={"/assets/file.png"}
            alt="board"
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <p className="font-dm-sans md:text-2xl font-bold text-darkGrey text-center">
            Great for college applications
          </p>
        </div>
        <div className="flex flex-col gap-y-7 items-center md:max-w-64 max-w-40">
          <Image
            src={"/assets/people.png"}
            alt="board"
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <p className="font-dm-sans md:text-2xl font-bold text-darkGrey text-center">
            Real-World projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Glance;
