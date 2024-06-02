import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./footer";
import Navbar from "@/components/layout/navbar";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
