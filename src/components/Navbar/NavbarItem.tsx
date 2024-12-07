import React from "react";
import { NavLink } from "react-router-dom";

type NavbarItemProps = {
  text: string;
  to: string;
};

export default function NavbarItem({ text, to }: NavbarItemProps) {
  return (
    <li>
      <NavLink to={to} className="text-lg font-medium text-neutral-600">
        {text}
      </NavLink>
    </li>
  );
}
