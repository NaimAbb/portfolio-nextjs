import Image from "next/image";
import HomeAboutSection from "./components/home-about-section";
import HomeContactUsSection from "./components/home-contact-us-section";
import HomeHeroSection from "./components/home-hero-section";
import HomeProjectsSection from "./components/home-projects-section";
import HomeServicesSection from "./components/home-services-section";
import gmailIcon from "@/public/vectors/gmail-icon.svg";
export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeProjectsSection />
      <HomeContactUsSection />

      <section className="container flex flex-col gap-4 lg:flex-row items-center justify-between mb-12 lg:mb-0 text-center lg:text-start">
        <h2 className="text-[#DEDEDE] text-[20px] lg:text-[63px] font-medium">
          Let’s
          <br />
          Work Together -{" "}
        </h2>
        <a
          href="mailto:naim.abbud@gmail.com"
          className="flex flex-col lg:flex-row items-center text-[16px] lg:text-[22px] gap-3 text-[#C9C9C9] font-normal border border-[#484E53] rounded-2xl px-8 py-3 max-w-full"
        >
          <Image src={gmailIcon} alt="d" />
          naim.abbud@gmail.com
        </a>
      </section>
    </>
  );
}
