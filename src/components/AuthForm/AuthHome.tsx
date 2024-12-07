import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AuthHome() {
  return (
    <Link
      to="/"
      className="w-12 h-12 bg-black hover:bg-blue-500 text-white text-2xl flex justify-center items-center rounded-full"
    >
      <FaHome />
    </Link>
  );
}
