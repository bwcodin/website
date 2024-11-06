"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const Hero = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <div className="relative w-full md:h-[89vh] h-[337px]">
      <Image
        src={"/assets/hero-bg.jpg"}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-[#F5FFFC] opacity-90 z-10"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-y-7">
        <Image
          src={"/assets/main-logo.png"}
          alt="main-logo"
          height={isBreakpoint ? 85 : 183}
          width={isBreakpoint ? 333 : 942}
        />
        <h2 className="font-dm-mono md:text-5xl text-2xl mx-12 md:mx-0 font-medium text-center">
          Code Your Future. Ignite Your Impact.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
