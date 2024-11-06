import Link from "next/link";
import React from "react";

const UpcomingProjects = () => {
  return (
    <div className="md:mx-40 mx-7 md:my-24 my-12 text-darkGrey gap-y-8 flex flex-col font-dm-sans">
      <h2 className="font-dm-sans md:text-4xl text-lg font-bold text-bytewiseBlue">
        Upcoming Projects
      </h2>
      <div className="border-l-2 border-l-lighBlue pl-5 flex flex-col gap-y-2">
        <h4 className="font-dm-sans md:text-2xl font-bold text-darkGrey">
          Live Ship Tracker
        </h4>
        <p className="md:text-xl font-dm-mono tracking-tighter">
          <span className="text-advanced">Advanced</span> •{" "}
          <span> Fall 2024 </span> • <span>Hong Kong Maritime Museum</span>
        </p>
        <p className="md:text-2xl tracking-tight">
          Students will have the unique opportunity to design, build, and deploy
          a digital exhibit at the Hong Kong Maritime Museum. Find out what its
          like to be a software developer, and deliver a project from
          start-to-finish in the real world.{" "}
        </p>
      </div>
      <p className="md:text-2xl md:mt-20 mt-12">
        Interested? Fill in the{" "}
        <Link
          href={
            "https://forms.office.com/pages/responsepage.aspx?id=ei7wsUjqHU-vTfZCgC3vLQIHtUkOQDNGrybEhcbLu4BUREpIRTdJMjJUT0ZMQ1BPOUtMVTdWQzI5USQlQCN0PWcu&route=shorturl"
          }
          target="_blank"
          className="underline underline-offset-[6px]"
        >
          ↗ inquiry form
        </Link>
        .
      </p>
    </div>
  );
};

export default UpcomingProjects;
