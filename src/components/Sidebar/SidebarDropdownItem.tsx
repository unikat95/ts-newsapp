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
        className={`hover:bg-slate-700 text-white flex justify-between items-center gap-3 px-5 py-3 rounded-lg ${
          location.pathname === to && "bg-slate-700"
        }`}
      >
        <div className="flex justify-center items-center gap-5">
          <Icon size={16} />
          <div className="text-sm font-light">{text}</div>
        </div>
      </Link>
    </li>
  );
}
