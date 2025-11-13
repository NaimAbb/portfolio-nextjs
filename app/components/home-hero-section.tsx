"use client";

import Button from "@/components/button";
import { useCustomInView } from "@/hooks/use-custom-in-view";
import avatar from "@/public/images/my-picture.jpeg";
import Image from "next/image";

export default function HomeHeroSection() {
  const ref = useCustomInView("home");

  return (
    <section
      id="home"
      ref={ref}
      className="bg-[url(@/public/vectors/hero-background.svg)] bg-no-repeat bg-center min-h-[calc(100vh-88px)] text-white flex flex-col items-center justify-center text-center pt-7"
    >
      <div className="flex flex-col gap-5 items-center w-[800px] max-w-full">
        <Image
          src={avatar}
          alt="Avatar"
          className="object-cover mx-auto rounded-full w-[200px] h-[200px]"
          width={200}
          height={200}
        />
        <h2 className="text-[40px] md:text-[63px] font-bold">Naeem Abood</h2>
        <p className="text-[26px] font-semibold">
          <span className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent">
            Front End Developer
          </span>{" "}
          🧙‍♂️
        </p>
        <p className="text-base md:text-[19px] font-medium leading-8">
          As a passionate Front-End Developer with 5 years of experience, I
          specialize in building fast, user-friendly web applications using
          React, Next.js, TypeScript, Redux Toolkit, React Query, and Tailwind
          CSS. After several years of crafting mobile experiences with Flutter,
          I’ve transitioned to modern web development, focusing on creating
          responsive, high-performance interfaces that feel smooth, intuitive,
          and delightful to use.
        </p>
        <Button href="#contact" styleButton="rounded-[75px] px-16 py-[10px]">
          Contact Me
        </Button>
      </div>
    </section>
  );
}
