import React from "react";

import SidebarMenu from "./SidebarMenu";
import SidebarCtaMenu from "./SidebarCtaMenu";

export default function Sidebar() {
  return (
    <div className="w-[40%] lg:w-[30%] xl:w-[20%] h-screen bg-slate-800 text-white flex flex-col justify-between items-center p-5 text-nowrap">
      <SidebarMenu />
      <SidebarCtaMenu />
    </div>
  );
}
