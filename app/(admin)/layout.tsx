import React, { Suspense } from "react";
import "@/app/globals.css";
import SideBarComponents from "@/components/sidebar/SideBarComponents";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Orbit Organization",
  description: "We will provide the best best service to all of you gay gay.",

  openGraph: {
    title: "Orbit Organization right here",
    description: "The solution company provide alot of services to you.",
    images:
      "https://sketchok.com/images/articles/06-anime/002-one-piece/26/16m.jpg",
  },
};
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <aside className="fixed h-screen ">
          <SideBarComponents />
        </aside>
        <main className="">
          <Suspense fallback>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
