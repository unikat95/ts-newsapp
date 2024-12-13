import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import useMainContext from "../../hooks/useMainContext";

export default function AdminPanel() {
  const { currentUser } = useMainContext();

  if (currentUser?.role !== "administrator") return <Navigate to="/" />;
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="w-full h-[100dvh] bg-slate-200 flex flex-col justify-start overflow-y-hidden">
        <Outlet />
      </div>
    </div>
  );
}
