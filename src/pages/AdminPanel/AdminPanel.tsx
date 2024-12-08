import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AdminPanel() {
  return (
    <div className="w-full h-[100dvh] flex">
      <Sidebar />
      <div className="w-full flex flex-col justify-start p-5">
        <Outlet />
      </div>
    </div>
  );
}
