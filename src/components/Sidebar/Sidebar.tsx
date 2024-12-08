import React from "react";

import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="w-[40%] h-screen bg-neutral-900 text-white flex flex-col justify-between items-center p-5 text-nowrap">
      <SidebarMenu />
      <div>
        <Link
          to="/"
          className="bg-neutral-700 hover:bg-neutral-600 flex justify-center items-center gap-2 px-5 py-3 rounded-md"
        >
          <FaHome size={20} className="mb-1" />
          Home
        </Link>
      </div>
    </div>
  );
}
