import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AdminPanel() {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="w-full h-[100dvh] bg-slate-200 flex flex-col justify-start overflow-y-hidden">
        <Outlet />
      </div>
    </div>
  );
}
