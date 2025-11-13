"use client";

import Button from "@/components/button";
import Section from "@/components/section";
import { useCustomInView } from "@/hooks/use-custom-in-view";
import { handleClickDwonlaodCV } from "@/util/helpers";

export default function HomeAboutSection() {
  const ref = useCustomInView("about");

  return (
    <Section
      ref={ref}
      id="about"
      title="About Me"
      subtitle="Get to know me"
      className="mt-28"
    >
      <div className="w-[800px] max-w-full mx-auto text-center space-y-5 mt-16 p-3 md:p-0">
        <p className="text-[#E1E1E1] text-[17px] font-medium leading-8">
          Hi there! I'm Naeem Abood, a frontend developer specializing in
          building modern web applications with React and Next.js. I am
          passionate about transforming creative ideas into fast, engaging, and
          interactive user experiences. With a strong focus on user-centric
          design, performance, and clean, maintainable code, I bring both
          technical expertise and a keen eye for detail to every project.
        </p>
        <p className="text-[#E1E1E1] text-[17px] font-medium leading-8">
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication. Whether it's building dynamic
          Single-Page Applications (SPAs), scalable server-rendered applications
          with Next.js, or optimizing for speed and user experience, I am
          dedicated to creating digital solutions that not only meet business
          goals but also delight end-users.
        </p>
        <p className="text-[#E1E1E1] text-[17px] font-medium leading-8">
          Let's work together to transform your vision into a powerful and
          seamless digital reality. Get in touch, and let's start building an
          exceptional web experience today!
        </p>
        <Button
          onClick={handleClickDwonlaodCV}
          tag="button"
          styleButton="rounded-[50px] px-12 py-[14px]"
        >
          Download Resume
        </Button>
      </div>
    </Section>
  );
}
