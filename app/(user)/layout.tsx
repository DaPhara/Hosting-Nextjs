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
    title: "Orbit Organization right here",
    description: "The solution company provide alot of services to you.",
    images:
      "https://merchant.orbit-dev.net/storage/app/public/product/2025-03-07-67ca56591899f.png",
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
