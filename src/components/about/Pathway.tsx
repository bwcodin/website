import Image from "next/image";
import React from "react";

const Pathway = () => {
  return (
    <div className="md:my-24 my-12 md:mx-40 mx-7 flex flex-col gap-y-4">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue">
        Bytewise Pathway
      </h2>
      <h3 className="font-dm-sans md:text-2xl font-bold text-darkGrey">
        Develop as an interdisciplinary coder with Bytewise
      </h3>
      <p className="font-dm-sans md:text-2xl">
        Our coding program pathway aims to take students from complete beginners
        to competent technology users prepared to face challenges of the future
        in any field of study. Our courses prepare students for the ultimate
        capstone project—working directly with organizations and universities to
        provide students with opportunities to lead, innovate, and drive change
        in the community around them.
      </p>
      <div className="w-full md:h-[580px] h-[162px] relative mt-7">
        <Image
          src={"/assets/progression_diagram.png"}
          alt="Progression Diagram"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Pathway;
