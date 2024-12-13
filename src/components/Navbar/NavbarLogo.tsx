import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function NavbarLogo() {
  return (
    <Link to="/" className="w-24 font-medium text-xl z-[999]">
      <Logo fill="black" />
    </Link>
  );
}
