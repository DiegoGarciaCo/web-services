import Link from "next/link";
import NavLinks from "./NavLinks";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  return (
    <footer className="h-[50vh] max-w-full text-white relative overflow-x-hidden ">
      <div className="flex justify-evenly items-center p-5">
        <h1 className="text-4xl cursor-pointer">
          <Link href={"/admin/login"}>LOGO</Link>
        </h1>
        <NavLinks />
        <div className="flex items-center">
          <span className="social facebook">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span className="social twitter">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="social instagram">
            <i className="fab fa-instagram"></i>
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 p-3 border-t-2 border-white w-full">
        <p className="text-center text-sm">
          &copy; 2024 Web Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
