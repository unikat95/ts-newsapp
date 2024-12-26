import React, { useEffect, useRef } from "react";

import { FaUserCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

import NavbarDropdownItem from "./NavbarDropdownItem";
import useMainContext from "../../hooks/useMainContext";
import { useNavigate } from "react-router-dom";

export default function NavbarDropdown() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    setOpenDropdown,
    openDropdown,
    handleSignOut,
    setUser,
    currentUser,
    setCurrentUser,
    setInitializing,
  } = useMainContext();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        e.target &&
        !(e.target as HTMLElement).closest(".user-dropdown")
      ) {
        setOpenDropdown(!openDropdown);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="bg-white absolute right-0 top-12 shadow-md border z-[999] rounded-lg"
    >
      <ul className="w-full text-sm flex flex-col justify-start items-start p-2 gap-1">
        <NavbarDropdownItem
          Icon={FaUserCircle}
          name="Profile"
          to="/profile"
          setOpenDropdown={setOpenDropdown}
        />
        <NavbarDropdownItem
          Icon={MdMessage}
          name="Messages"
          to="/profile/messages/incoming-messages"
          setOpenDropdown={setOpenDropdown}
        />
        {currentUser?.role === "administrator" && (
          <NavbarDropdownItem
            Icon={MdAdminPanelSettings}
            name="Admin Panel"
            to="/admin-panel"
            setOpenDropdown={setOpenDropdown}
          />
        )}
        <li className="w-full rounded-md overflow-hidden">
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
            className="w-full hover:bg-black hover:text-white flex justify-start items-center gap-2 px-2 py-2 text-nowrap"
          >
            <IoMdLogOut className="hover:text-white" size={18} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
