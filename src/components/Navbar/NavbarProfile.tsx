import React from "react";

import useMainContext from "../../hooks/useMainContext";

import { IoMdArrowDropdown } from "react-icons/io";
import NavbarDropdown from "./NavbarDropdown";
import UserAvatar from "../User/UserAvatar/UserAvatar";

export default function NavbarProfile() {
  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(!openDropdown);
  };

  const { openDropdown, setOpenDropdown, currentUser } = useMainContext();

  return (
    <div className="relative user-dropdown hidden md:block">
      <div
        className=" bg-neutral-100 rounded-full flex justify-center items-center overflow-hidden cursor-pointer hover:brightness-95 duration-100"
        onClick={handleToggleDropdown}
      >
        <UserAvatar size="sm" user={currentUser} />
      </div>
      <div className="absolute bg-neutral-100 text-neutral-800 rounded-sm bottom-0 right-1 cursor-pointer z-[99]">
        <IoMdArrowDropdown />
      </div>
      {openDropdown && <NavbarDropdown />}
    </div>
  );
}
