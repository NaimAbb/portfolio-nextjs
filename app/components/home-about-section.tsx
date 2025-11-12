"use client";

import Button from "@/components/button";
import Section from "@/components/section";
import { useCustomInView } from "@/hooks/use-custom-in-view";

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
          Hi there! I'm [Your Name], a data scientist specializing in data
          analytics, predictive modeling, natural language processing, machine
          learning, and AI chatbots. With a passion for unraveling insights from
          complex datasets, I'm dedicated to helping businesses make informed
        </p>
        <p className="text-[#E1E1E1] text-[17px] font-medium leading-8">
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it's
          uncovering hidden patterns, predicting future trends, or automating
          processes with AI, I'm here to help you harness the full potential of
          your data.
        </p>
        <p className="text-[#E1E1E1] text-[17px] font-medium leading-8">
          Let's work together to transform your data into actionable insights
          that drive real results. Get in touch, and let's start unlocking the
          power of your data today!
        </p>
        <Button tag="button" styleButton="rounded-[50px] px-12 py-[14px]">
          Download Resume
        </Button>
      </div>
    </Section>
  );
}
