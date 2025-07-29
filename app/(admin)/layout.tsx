"use client";
import React, { Suspense, useState } from "react";
import "@/app/globals.css";
import SideBarComponents from "@/components/sidebar/SideBarComponents";
import { MenuIcon } from "@/components/icons/FontAwsome";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);
  console.log(isShowSideBar);
  return (
    <html lang="en">
      <body className="flex none-scroll-bar">
        <MenuIcon
          onClick={() => {
            setIsShowSideBar(!isShowSideBar);
          }}
          classname="w-8 h-8 fixed bottom-0 z-10 m-14 cursor-pointer lg:hidden"
        />
        <aside
          className={`sticky left-0 z-10 h-screen ${
            isShowSideBar && "hidden"
          } lg:block`}
        >
          <SideBarComponents />
        </aside>
        <main className="flex-1">
          <Suspense fallback>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
