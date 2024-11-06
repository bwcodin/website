import Image from "next/image";
import React from "react";

const SubPageHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full md:h-80 h-[150px]">
      <Image
        src={"/assets/students-about.jpeg"}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-[#F5FFFC] opacity-80 z-10"></div>
      <div className="absolute inset-0 flex flex-col justify-center z-20 md:mx-40 mx-8">
        <h2 className="font-dm-mono md:text-5xl text-2xl font-medium">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SubPageHeader;
