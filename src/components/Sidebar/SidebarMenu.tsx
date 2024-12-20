import React, { SetStateAction } from "react";

import {
  articleDropdownItems,
  usersDropdownItems,
} from "./SidebarDropdownItems";

import { FaNewspaper } from "react-icons/fa6";
import { FaHome, FaSignOutAlt, FaUsers } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuLayoutPanelLeft } from "react-icons/lu";
import useMainContext from "../../hooks/useMainContext";
import Logo from "../Logo/Logo";
import SidebarItem from "./SidebarItem";

type SidebarMenuProps = {
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function SidebarMenu({ setOpenMenu }: SidebarMenuProps) {
  const {
    handleSignOut,
    setUser,
    setCurrentUser,
    setInitializing,
    setOpenDropdown,
  } = useMainContext();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-1 p-5">
      <Link to="/" className="w-full h-auto flex justify-center items-start">
        <div className="w-full flex justify-center items-center pt-5 pb-10">
          <Logo fill="white" />
        </div>
      </Link>
      <Link
        to="/admin-panel"
        className={`w-full hover:bg-secondary text-white flex justify-start items-center px-5 py-3 gap-5 rounded-lg text-sm font-light ${
          location.pathname === "/admin-panel" && "bg-secondary"
        }`}
        onClick={() => setOpenMenu(false)}
      >
        <LuLayoutPanelLeft size={18} />
        Admin Panel
      </Link>
      <SidebarItem
        name="Articles"
        dropdownItems={articleDropdownItems}
        Icon={FaNewspaper}
        setOpenMenu={setOpenMenu}
      />
      <SidebarItem
        name="Users"
        dropdownItems={usersDropdownItems}
        Icon={FaUsers}
        setOpenMenu={setOpenMenu}
      />
      <Link
        to="/"
        className="w-full hover:bg-secondary text-white flex justify-start items-center px-5 py-3 gap-5 rounded-lg text-sm font-light"
        onClick={() => setOpenMenu(false)}
      >
        <FaHome size={18} />
        Home Page
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
        className="w-full hover:bg-secondary text-white flex justify-start items-center px-5 py-3 gap-5 rounded-lg text-sm font-light"
      >
        <FaSignOutAlt size={18} />
        Logout
      </button>
    </div>
  );
}
