import { navLinks } from "@/lib/definitions";
import Link from "next/link";

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

  return (
    <div className="flex justify-evenly content-center gap-8">
      {/* create links  */}
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path} className="links">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
