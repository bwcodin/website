"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isBreakPoint = useMediaQuery(768);
    const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <div className="flex justify-between w-full p-4 bg-darkGrey text-white px-8 py-6 items-center text-[24px]">
        <Link href={"/"}>
          <Image
            src={"/assets/Logo-white.png"}
            alt="Logo"
            height={30}
            width={60}
          />
        </Link>
        {isBreakPoint ? (
          <>
            <Image
              src={menuOpen ? "/assets/close.png" : "/assets/burger.png"}
              alt="burger"
              width={menuOpen ? 20 : 30}
              height={menuOpen ? 20 : 30}
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </>
        ) : (
          <ul className="flex gap-x-[30px]">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link href={"/capstone-projects"}>Capstone Projects</Link>
            </li>
            <span className="font-extralight">|</span>
            <li>
              <Link href={"/chinese-page"}>中文</Link>
            </li>
            <span className="font-extralight">|</span>
            <li className="flex items-center">
              <Link
                href={"https://wa.me/85296348923"}
                target="_blank"
                className="flex items-center"
              >
                <Image
                  src={"/assets/whatsapp-logo.png"}
                  alt="whatsapp-logo"
                  height={31}
                  width={31}
                />
                &ensp; WhatsApp
              </Link>
            </li>
          </ul>
        )}
      </div>
      {menuOpen && (
        <div className="flex flex-col gap-y-4 bg-white text-darkGrey p-7 font-dm-sans text-base">
          <Link href={"/about"} onClick={handleLinkClick}>About</Link>
          <Link href={"/courses"} onClick={handleLinkClick}>Courses</Link>
          <Link href={"/capstone-projects"} onClick={handleLinkClick}>Capstone Projects</Link>
          <Link href={"/chinese-page"} onClick={handleLinkClick}>中文网页</Link>
          <Link
                href={"https://wa.me/85296348923"}
                target="_blank"
                className="flex items-center"
              >
                WhatsApp Us!
              </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
