"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";

import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menu";
import { usePathname } from "next/navigation";
type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};
export default function Component() {
  const pathname = usePathname();
  console.log("This name:", pathname);
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          {MenuList.map((item, index) => (
            <SidebarItem
              key={index}
              as={Link}
              href={item.path}
              icon={item.icon}
              active={pathname === item.path}
            >
              {item.name}
            </SidebarItem>
          ))}
          {/* <SidebarItem
            as={Link}
            href="/setting"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
          >
            Setting
          </SidebarItem>
          <SidebarItem href="#" icon={HiInbox} label="3">
            Inbox
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser}>
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="#" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem href="#" icon={HiTable}>
            Sign Up
          </SidebarItem> */}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
