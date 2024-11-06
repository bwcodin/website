"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import React from "react";

const Specialisation = () => {
  const isBreakPoint = useMediaQuery(768);
  return (
    <div className="flex w-full md:flex-row flex-col">
      <div className="md:w-1/2 w-full h-[500px] relative">
        <Image
          src={"/assets/hero-bg.jpg"}
          alt="Students"
          fill
          objectFit="cover"
        />
      </div>
      <div
        className={`md:w-1/2 w-full flex flex-col justify-center px-12 md:gap-y-7 gap-y-12 ${
          isBreakPoint && "bg-lighBlue py-12"
        }`}
      >
        <h4 className="font-dm-sans font-bold md:text-4xl text-xl">
          We Specialize in...
        </h4>
        <div className="flex flex-wrap gap-2 text-white font-dm-mono md:text-2xl font-medium">
          <span className="bg-darkGrey p-[10px] ">
            {`<Artificial Intelligence>`}
          </span>
          <span className="bg-darkGrey p-[10px] ">{`<UI/UX>`}</span>
          <span className="bg-darkGrey p-[10px] ">{`<Algorithms>`}</span>
          <span className="bg-darkGrey p-[10px] ">{`<App Development>`}</span>
          <span className="bg-darkGrey p-[10px] ">{`<Web Development>`}</span>
          <span className="bg-darkGrey p-[10px] ">{`<Data Science>`}</span>
        </div>
      </div>
    </div>
  );
};

export default Specialisation;
