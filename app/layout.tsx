import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";
import Navbar from "@/components/layout/navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}