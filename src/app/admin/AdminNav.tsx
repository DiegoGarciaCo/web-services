"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { signOut } from "@/auth";
import { signUserOut } from "@/lib/actions";

export default function Navbar() {
  // State to check if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between sticky top-0 z-20 w-full h-20 active px-5`}
    >
      {/* left logo and links container */}
      <div className="text-white md:flex md:items-center md:justify-around md:w-4/6">
        <h1 className="text-4xl uppercase">Logo</h1>
        <div className="md:flex hidden gap-3">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/contacts">Contacts</Link>
          <Link href="/admin/newsletters">Subscriptions</Link>
        </div>
      </div>
      {/* Right button */}
      <form className="md:flex items-center hidden w-1/4" action={signUserOut}>
        <Button
          buttonStyle="btn--nav"
          buttonSize="btn--medium"
          type="submit"
          text="Sign Out"
        />
      </form>
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
        <div className="flex flex-col items-center justify-end gap-56 text-white h-full w-full text-xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/contacts">Contacts</Link>
            <Link href="/admin/newsletters">Subscriptions</Link>
          </div>
          <form action={signUserOut}>
            <Button
              buttonStyle="btn--nav mb-5"
              buttonSize="btn--medium"
              type="submit"
              text="Sign Out"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
