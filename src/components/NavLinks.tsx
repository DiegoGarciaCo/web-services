"use client";
import { navLinks } from "@/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ className }: { className?: string }) {
  const links: navLinks[] = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
  ];

  // Get the current path
  const currentPath = usePathname();

  return (
    <div className={`${className} md:flex md:gap-3 md:items-center`}>
      {/* create links  */}
      {links.map((link, index) => {
        const isActive = currentPath === link.path;
        return (
          <Link
            key={index}
            href={link.path}
            className={`links ${isActive ? "activeLink" : ""}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
