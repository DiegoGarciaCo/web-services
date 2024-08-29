"use client";
import { navLinks } from "@/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
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
    <div className="flex justify-evenly content-center gap-8">
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
