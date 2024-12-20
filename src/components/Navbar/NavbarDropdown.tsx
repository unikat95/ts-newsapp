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
      className="bg-white absolute right-0 shadow-md border z-[999] rounded-lg overflow-hidden py-2"
    >
      <ul>
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
        <NavbarDropdownItem
          Icon={MdAdminPanelSettings}
          name="Admin Panel"
          to="/admin-panel"
          setOpenDropdown={setOpenDropdown}
        />
        <li>
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
            className="hover:bg-black hover:text-white text-sm w-full py-3 px-4 gap-3 flex justify-start items-center border-b"
          >
            <IoMdLogOut className="hover:text-white" size={18} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
