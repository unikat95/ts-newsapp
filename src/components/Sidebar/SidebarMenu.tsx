import React from "react";

import SidebarMenuItem from "./SidebarMenuItem";
import {
  articleDropdownItems,
  usersDropdownItems,
} from "./SidebarDropdownItems";

import { FaNewspaper } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutPanelLeft } from "react-icons/lu";

export default function SidebarMenu() {
  const location = useLocation();
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-1">
      <Link
        to="/admin-panel"
        className={`w-full hover:bg-slate-700 text-white flex justify-start items-center px-5 py-3 gap-5 rounded-lg text-sm font-light ${
          location.pathname === "/admin-panel" && "bg-slate-700"
        }`}
      >
        <LuLayoutPanelLeft size={18} />
        Admin Panel
      </Link>
      <SidebarMenuItem
        name="Articles"
        dropdownItems={articleDropdownItems}
        Icon={FaNewspaper}
      />
      <SidebarMenuItem
        name="Users"
        dropdownItems={usersDropdownItems}
        Icon={FaUsers}
      />
    </div>
  );
}
