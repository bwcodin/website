"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapComponent } from "./googleMap/GoogleMaps";
import useMediaQuery from "@/hooks/useMediaQuery";

const Footer = () => {
  const isBreakPoint = useMediaQuery(768);
  return (
    <footer className="p-8 bg-darkGrey text-white flex md:justify-between md:flex-row flex-col font-dm-sans">
      <div className="flex flex-col gap-y-8 h-full">
        <Image
          src={"/assets/logo-white-extended.png"}
          alt="white logo extended"
          width={255}
          height={50}
        />
        <div className="flex w-full md:flex-row flex-col md:gap-x-14 md:gap-y-0 gap-y-4">
          <div className="flex flex-col md:gap-y-3">
            <h1 className="font-bold md:text-2xl text-base">Bytewise</h1>
            <ul className="flex flex-col md:gap-y-3 gap-y-1 md:text-2xl text-base">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link href={"/capstone-projects"}>Capstone Projects</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:gap-y-3">
            <h1 className="font-bold md:text-2xl text-base">Useful Links</h1>
            <ul className="flex flex-col md:gap-y-3 gap-y-1 md:text-2xl text-base">
              <li>
                <Link href={"http://localhost:3001/courses"}>Schedule</Link>
              </li>
              <li>
                <Link
                  href={
                    "https://forms.office.com/pages/responsepage.aspx?id=ei7wsUjqHU-vTfZCgC3vLQIHtUkOQDNGrybEhcbLu4BUREpIRTdJMjJUT0ZMQ1BPOUtMVTdWQzI5USQlQCN0PWcu&route=shorturl"
                  }
                  target="_blank"
                >
                  ↗ Coding Ability Form
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://bytewisecoding.com/assets/FAQTC/Bytewise%20FAQ%20&%20Terms%20and%20Conditions_v1.pdf"
                  }
                  target="_blank"
                >
                  ↗ FAQ and Policies
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:gap-y-3">
            <h1 className="font-bold md:text-2xl text-base">Contact</h1>
            <ul className="flex flex-col md:gap-y-3 gap-y-1 md:text-2xl text-base">
              <li>
                <Link href={"https://wa.me/85296348923"} target="_blank">
                  Whatsapp: +852 9634 8923
                </Link>
              </li>
              <li>
                <Link href={"mailto:info@bytewisecoding.com"}>
                  Email: info@bytewisecoding.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {!isBreakPoint && (
          <div className="mt-72 text-2xl">
            ©2024 Bytewise Coding Academy. All rights reserved.
          </div>
        )}
      </div>
      <div className="flex flex-col gap-y-4 md:mt-0 mt-4">
        <MapComponent locations={[{ lat: 22.2770061, lng: 114.1731009 }]} />
        <p className="md:text-2xl text-base md:max-w-[350px] max-w-[260px]">
          Unit 2204, 22/F <br />Chinachem Johnston Plaza <br />178-186 Johnston Road <br />Wan Chai,
          Hong Kong
        </p>
      </div>
      {isBreakPoint && (
        <div className="md:mt-72 mt-12 md:mb-0 mb-9 md:text-l text-base">
          ©2024 Bytewise Coding Academy. <br />All rights reserved.
        </div>
      )}
    </footer>
  );
};

export default Footer;
