import ContactSection from "@/components/sections/home-page/contact-section";
import ExperienceSection from "@/components/sections/home-page/experience-section";
import Header from "@/components/sections/home-page/header";
import HeroSection from "@/components/sections/home-page/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExperienceSection/>
      <ContactSection />
    </>
  );
}
