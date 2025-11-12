"use client";

import Link from "next/link";
import themeIcon from "@/public/vectors/theme-icon.svg";
import Image from "next/image";
import NavLink from "./navlink";
import Button from "./button";
import { useCustomScroll } from "@/hooks/use-custom-scroll";
import MobileNavLinks from "./mobile-navlinks";

export default function Header() {
  const isFixed = useCustomScroll(300);
  return (
    <header
      className={`${
        isFixed
          ? "fixed left-0 right-0 top-0 bg-[#1A1A1A] shadow-sm shadow-[#4FC3F7] z-[2000]"
          : ""
      } text-white py-5`}
    >
      <div className="container flex items-center justify-between md:justify-start">
        <h1>
          <Link href="" className="font-oleoScript font-normal text-[32px]">
            Naeem
          </Link>
        </h1>
        <NavLink />
        <div className="gap-28 hidden md:flex">
          <Button href="#contact" styleButton="rounded-[9px] px-5 py-2">
            Contact Me
          </Button>
          <button>
            <Image src={themeIcon} alt="Theme Icon" />
          </button>
        </div>
        <MobileNavLinks />
      </div>
    </header>
  );
}
