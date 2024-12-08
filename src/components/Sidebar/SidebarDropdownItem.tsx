import React from "react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

type SidebarDropdownItemProps = {
  openDropdown: boolean;
  text: string;
  to: string;
  Icon: IconType;
};

export default function SidebarDropdownItem({
  openDropdown,
  text,
  to,
  Icon,
}: SidebarDropdownItemProps) {
  const location = useLocation();
  return (
    <li
      className={`
      w-[95%] -mt-12 transition-all duration-300
      ${openDropdown && "mt-0"}`}
    >
      <Link
        to={to}
        className={`hover:bg-neutral-200 hover:text-black flex justify-start items-center gap-3 px-5 py-3 rounded-md text-sm ${
          location.pathname === to
            ? "bg-neutral-200 text-black"
            : "bg-neutral-800"
        }`}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
}
