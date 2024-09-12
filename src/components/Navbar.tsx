"use client";
import NavLinks from "./NavLinks";
import Button from "./Button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  // State to check if the navbar is active
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`flex items-center justify-between sticky top-0 z-20 w-full h-20 ${
        isActive ? "active" : "bg-transparent"
      } items-center px-5`}
    >
      {/* left logo and links container */}
      <div className="text-white md:flex md:items-center md:justify-around md:w-10/12">
        <h1 className="text-4xl uppercase">Logo</h1>
        <div>
          <NavLinks className="hidden" />
        </div>
      </div>
      {/* Right button */}
      <div className="md:flex items-center hidden w-1/4">
        <Button
          buttonStyle="btn--nav"
          buttonSize="btn--medium"
          type="button"
          text={<Link href="/contact">Contact</Link>}
        />
      </div>
      <Button
        buttonStyle="btn--nav md:hidden"
        buttonSize="btn--medium"
        type="button"
        text={<div className={isOpen ? "fa fa-xmark" : "fa fa-bars"}></div>}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`md:hidden transition-opacity duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible absolute top-0 left-0 bg-[#0d144f] w-full h-screen -z-10 fade-in-30"
            : "opacity-0 invisible absolute top-0 left-0"
        }`}
      >
        <NavLinks className="flex flex-col items-center justify-center gap-2 text-white h-full w-full text-xl" />
      </div>
    </nav>
  );
}
