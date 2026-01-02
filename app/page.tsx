import ContactSection from "@/components/sections/home-page/contact-section";
import ExperienceSection from "@/components/sections/home-page/experience-section";
import Header from "@/components/sections/home-page/header";
import HeroSection from "@/components/sections/home-page/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chandresh Patidar",
  description: "Generalist with a strong focus on frontend development, dedicated to building seamless user experiences. Outside of work, you'd find me playing badminton, cricket, or cooking.",
  keywords: ["Chandresh Patidar", "Frontend Developer", "React", "Next.js", "TypeScript", "Software Engineer"],
  authors: [{ name: "Chandresh Patidar" }],
  creator: "Chandresh Patidar",
  openGraph: {
    title: "Chandresh Patidar",
    description: "Generalist with a strong focus on frontend development, dedicated to building seamless user experiences.",
    url: "https://chandresh.dev",
    siteName: "Chandresh Patidar",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://chandresh.dev/og?title=Chandresh Patidar&description=Generalist with a strong focus on frontend development",
        width: 1200,
        height: 630,
        alt: "Chandresh Patidar - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandresh Patidar",
    description: "Generalist with a strong focus on frontend development, dedicated to building seamless user experiences.",
    images: ["https://chandresh.dev/og?title=Chandresh Patidar&description=Generalist with a strong focus on frontend development"],
    creator: "@codezuma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chandresh.dev",
  },
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
