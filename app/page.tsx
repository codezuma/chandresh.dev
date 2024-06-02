import ContactSection from "@/components/sections/home-page/contact-section";
import ExperienceSection from "@/components/sections/home-page/experience-section";
import Header from "@/components/sections/home-page/header";
import HeroSection from "@/components/sections/home-page/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chandresh Patidar",
  description: "I work as a design engineer at Ritzyware.Crafting UIs with React since 2021. learning how to build and design scalable websites and applications, striving to create great experiences.",
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
