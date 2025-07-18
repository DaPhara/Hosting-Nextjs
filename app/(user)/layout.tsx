import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import NavBarComponents from "@/components/navbar/NavBarComponents";
import TestNavComponents from "@/components/testnav/TestNavComponents";
import { Suspense } from "react";
import { inter, suwannaphum, localCustomFont } from "./fonts";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Orbit Organization",
  description: "We will provide the best best service to all of you gay gay.",

  openGraph: {
    title: "Orbit Organization",
    description: "The solution company providing a wide range of services.",
    images: [
      {
        url: "https://sketchok.com/images/articles/06-anime/002-one-piece/26/16m.jpg",
        width: 1200, // Replace with actual image width
        height: 630, // Replace with actual image height
        alt: "Orbit Organization Thumbnail",
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
      >
        <div className="h-screen flex flex-col">
          {/* <NavBarComponents /> */}
          <TestNavComponents />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
