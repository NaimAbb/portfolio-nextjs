import HomeAboutSection from "./components/home-about-section";
import HomeContactUsSection from "./components/home-contact-us-section";
import HomeHeroSection from "./components/home-hero-section";
import HomeProjectsSection from "./components/home-projects-section";
import HomeServicesSection from "./components/home-services-section";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeProjectsSection />
      <HomeContactUsSection/>
    </>
  );
}
