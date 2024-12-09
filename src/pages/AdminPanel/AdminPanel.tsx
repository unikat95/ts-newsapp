import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AdminPanel() {
  return (
    <div className="w-full h-[100dvh] flex overflow-hidden">
      <Sidebar />
      <div className="w-full h-full bg-slate-200 flex flex-col justify-start">
        <div className="w-full h-full overflow-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
