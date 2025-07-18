import React, { Suspense } from "react";
import "@/app/globals.css";
import SideBarComponents from "@/components/sidebar/SideBarComponents";

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
