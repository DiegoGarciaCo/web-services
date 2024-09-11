"use client";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  // State to check if the navbar is active
  const [isActive, setIsActive] = useState(false);

  // Get pathname
  const pathname = usePathname();

  // useEffect to handle scroll event on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (pathname !== "/") {
        setIsActive(true);
        return;
      } else if (pathname === "/") {
        setIsActive(false);
      }

      const handleScroll = () => {
        setIsActive(window.scrollY > 100);
      };

      // Event listener to check if the window is scrolled past 100px
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return (
    <nav
      className={`flex content-center justify-center sticky top-0 z-20 w-full h-20 ${
        isActive ? "active" : "bg-transparent"
      } items-center px-5`}
    >
      {/* left logo and links container */}
      <div className="flex space-x-5 text-white items-center w-3/4 justify-around">
        <h1 className="text-4xl px-5 uppercase">Logo</h1>
        <NavLinks />
      </div>
      {/* Right button */}
      <div className="flex items-center w-1/4">
        <Button
          buttonStyle="btn--nav"
          buttonSize="btn--medium"
          type="button"
          text={<Link href="/contact">Contact</Link>}
        />
      </div>
    </nav>
  );
}
