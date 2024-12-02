import React from "react";
import { NavbarLinks } from "./NavbarLinks";
import NavbarItem from "./NavbarItem";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <Logo />
        <ul className="w-auto flex gap-5">
          {NavbarLinks.map((link) => (
            <NavbarItem key={link.id} link={link} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
