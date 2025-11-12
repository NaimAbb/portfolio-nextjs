"use client";

import Section from "@/components/section";
import { CATEGORIES } from "@/data";
import codeImage from "@/public/images/code-image.png";
import arrowIcon from "@/public/vectors/arrow-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomeProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORIES[0]
  );

  function handleOnClick(item: string) {
    setSelectedCategory(item);
  }

  return (
    <Section
      id="projects"
      className="my-28"
      title="Projects"
      subtitle="Some of my Work"
    >
      <div className="container mt-14">
        <ul className="grid grid-cols-1 lg:grid-cols-[repeat(5,auto)] justify-items-center items-center justify-center gap-6">
          {CATEGORIES.map((item) => (
            <li key={item} className="inline-block">
              <button
                onClick={() => handleOnClick(item)}
                className={`border border-[#484E53] rounded-[50px] px-12 py-2 text-base ${
                  selectedCategory === item
                    ? "text-[#F5F5F5] bg-[#484E53]"
                    : "text-[#A9A9A9]"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden">
                <Image
                  src={codeImage}
                  alt="Code"
                  className="object-cover w-full group-hover:rotate-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-[#C1C1C1] text-xl font-bold mt-5">
                Project name/description
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-[#A9A9A9] text-sm font-normal">
                  Web Design / Usability Testing
                </span>
                <Image src={arrowIcon} alt="" />
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="border border-[#484E53] rounded-[75px] text-white font-medium text-[15px] px-14 py-3 block w-fit mx-auto mt-14"
        >
          View All
        </Link>
      </div>
    </Section>
  );
}
