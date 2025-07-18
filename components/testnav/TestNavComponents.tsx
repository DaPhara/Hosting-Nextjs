"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TextNavComponent() {
  const pathname = usePathname();
  // console.log("This Path:", pathname);
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/Vercel.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active={pathname == "/"}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/enroll" active={pathname == "/about"}>
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/enroll" active={pathname == "/enroll"}>
          Enroll
        </NavbarLink>
        <NavbarLink as={Link} href="/contact" active={pathname == "/contact"}>
          Contact
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/activate-confirm-email/MQ:1"
          active={pathname == "/activate-confirm-email/MQ:1"}
        >
          Hack Me
        </NavbarLink>
        {/* <NavbarLink href="#">Contact</NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
}
