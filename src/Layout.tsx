import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col p-5 gap-5">
      <Navbar />
      <Outlet />
    </div>
  );
}
