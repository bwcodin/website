import Image from "next/image";
import React from "react";

const InstructorCard = ({
  img,
  name,
  title,
  subtitle,
}: {
  img: string;
  name: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="rounded-xl bg-grey flex md:flex-col flex-row-reverse gap-y-3 text-darkGrey">
      <div className="md:h-[240px] h-[190px] md:w-full w-3/5 md:rounded-t-xl rounded-r-xl relative">
        <Image
          src={img}
          alt={name}
          fill
          objectFit="cover"
          className="md:rounded-none rounded-r-xl"
        />
      </div>
      <div className="flex flex-col p-3 gap-y-3 w-full">
        <h3 className="font-dm-sans text-2xl font-bold">{name}</h3>
        <div>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;