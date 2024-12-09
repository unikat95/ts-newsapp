import React from "react";

import { FaHome, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

export default function SidebarCtaMenu() {
  const {
    handleSignOut,
    setUser,
    setCurrentUser,
    setInitializing,
    setOpenDropdown,
  } = useMainContext();

  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center gap-2">
      <Link
        to="/"
        className="bg-slate-700 hover:bg-slate-600 flex justify-center items-center gap-2 p-3 rounded-md"
      >
        <FaHome size={16} />
      </Link>
      <Link
        to="/profile"
        className="bg-slate-700 hover:bg-slate-600 flex justify-center items-center gap-2 p-3 rounded-md"
      >
        <FaUserCircle size={16} />
      </Link>
      <button
        onClick={() =>
          handleSignOut({
            setUser,
            setCurrentUser,
            setInitializing,
            navigate,
            setOpenDropdown,
          })
        }
        className="bg-slate-700 hover:bg-slate-600 flex justify-center items-center gap-2 p-3 rounded-md"
      >
        <FaSignOutAlt size={16} />
      </button>
    </div>
  );
}
