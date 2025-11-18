"use client";

import ProjectItem from "@/components/project-item";
import Section from "@/components/section";
import { CATEGORIES } from "@/data";
import { useCustomInView } from "@/hooks/use-custom-in-view";
import { Category } from "@/models/category";
import Link from "next/link";
import { useState } from "react";

export default function HomeProjectsSection() {
  const ref = useCustomInView("projects");
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0]
  );

  function handleOnClick(item: Category) {
    setSelectedCategory(item);
  }

  return (
    <Section
      ref={ref}
      id="projects"
      className="mt-28"
      title="Projects"
      subtitle="Some of my Work"
    >
      <div className="container mt-14">
        <ul className="grid grid-cols-1 lg:grid-cols-[repeat(2,auto)] justify-items-center items-center justify-center gap-6">
          {CATEGORIES.map((item) => (
            <li key={item.title} className="inline-block">
              <button
                onClick={() => handleOnClick(item)}
                className={`border border-[#484E53] rounded-[50px] px-12 py-2 text-base ${
                  selectedCategory === item
                    ? "text-[#F5F5F5] bg-[#484E53]"
                    : "text-[#A9A9A9]"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {selectedCategory.projects.map((item, index) => (
            <ProjectItem
              key={`${selectedCategory.title}-${index}`}
              project={item}
              index={index}
            />
          ))}
        </div>

        {/* <Link
          href="/"
          className="border border-[#484E53] rounded-[75px] text-white font-medium text-[15px] px-14 py-3 block w-fit mx-auto mt-14"
        >
          View All
        </Link> */}
      </div>
    </Section>
  );
}
