"use client";

import Section from "@/components/section";
import { SERVICES } from "@/data";
import { useCustomInView } from "@/hooks/use-custom-in-view";
import sunIcon from "@/public/vectors/sun-icon.svg";
import Image from "next/image";
export default function HomeServicesSection() {
  const ref = useCustomInView("services");

  return (
    <Section
      ref={ref}
      id="services"
      className="mt-28"
      title="What I do"
      subtitle="My  Services"
    >
      <div className="container mt-16 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="border flex border-[#2B2B2B] rounded-[10px] bg-[#1C1C1C] p-5 space-y-4 hover:-translate-y-3 transition-transform duration-200"
          >
            <div className="space-y-4">
              <div className="h-11 w-11 bg-[#F5F8FF] rounded-[9px] shrink-0 flex items-center justify-center">
                <Image src={sunIcon} alt="Service Icon" />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[15px]">{service.title}</h3>
                <p className="text-sm text-[#E1E1E1] font-normal leading-6">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
