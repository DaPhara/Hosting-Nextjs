"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};
export default function NavBarComponents() {
  const pathname = usePathname();
  // console.log(pathname);
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const updateMenu = (path: string) => {
    const newMenu = menu.map((item) => {
      if (path == item.path) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setMenu(newMenu);
  };
  return (
    <Navbar fluid rounded>
      <NavbarBrand
        as={Link}
        href="https://sketchok.com/images/articles/06-anime/002-one-piece/26/16m.jpg"
      >
        <img
          src="https://sketchok.com/images/articles/06-anime/002-one-piece/26/16m.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Lufffy"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            onClick={() => updateMenu(item.path)}
            as={Link}
            href={item.path}
            active={item.path === pathname}
          >
            {item.name}
          </NavbarLink>
          // <NavbarLink
          //   as={Link}
          //   href={item.path}
          //   active={item.path === pathname}
          // >
          //   {item.name}
          // </NavbarLink>
        ))}
        {/* <NavbarLink as={Link} href="/" active={pathname === "/"}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/about" active={pathname === "/about"}>
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/service" active={pathname === "/service"}>
          Services
        </NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
}
