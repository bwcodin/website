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
        Medical AI Imaging and Analysis Tool
        </h4>
        <p className="md:text-xl font-dm-mono tracking-tighter">
          <span> Summer/Fall 2025 </span> • <span>Zha Lab at Columbia University</span>
        </p>
        <p className="md:text-2xl tracking-tight">
          Medical research involves vast amounts of data, processing cell images and drawing conclusions with it. 
          Students in this project will use their medical expertise to provide hypotheses and analysis on cell structure, symptoms and lab experiment techniques. 
          They will also learn how AI can be used to assist with medical research, and how to build a tool ready for international researchers at Columbia University to use.  {" "}
        </p>
      </div>
      <div className="border-l-2 border-l-lighBlue pl-5 flex flex-col gap-y-2">
        <h4 className="font-dm-sans md:text-2xl font-bold text-darkGrey">
        Business Dashboard and Analysis Platform
        </h4>
        <p className="md:text-xl font-dm-mono tracking-tighter">
          <span> Spring 2025 </span> • <span>Silk Tea</span>
        </p>
        <p className="md:text-2xl tracking-tight">
          Students are responsible for building a business dashboard for Silk, determine 
          what metrics are most important and provide trend analysis for Silk management. 
          They will be working with Deliveroo and FoodPanda APIs to extract real-time data 
          and display it in a visual manner. This project also comes with a summer internship 
          at Silk. {" "}
        </p>
      </div>
      <div className="border-l-2 border-l-lighBlue pl-5 flex flex-col gap-y-2">
        <h4 className="font-dm-sans md:text-2xl font-bold text-darkGrey">
          Live Ship Tracking Exhibit
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
      <p className='font-dm-sans md:text-2xl'>
        Interested? {''} <br/>
          <Link
            className='underline underline-offset-[6px]'
            href={"https://wa.me/85296348923"}
            target='_blank'
          >
            Contact us directly on WhatsApp!
          </Link>{' '}
        </p>
    </div>
  );
};

export default UpcomingProjects;
