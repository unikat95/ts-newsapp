import React from "react";

import useMainContext from "../../hooks/useMainContext";

import { IoMdArrowDropdown } from "react-icons/io";
import NavbarDropdown from "./NavbarDropdown";
import UserAvatar from "../User/UserAvatar/UserAvatar";

export default function NavbarProfile() {
  const { unreadMessagesCount } = useMainContext();

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(!openDropdown);
  };

  const { openDropdown, setOpenDropdown, currentUser } = useMainContext();

  return (
    <div
      className="relative user-dropdown hidden md:block"
      onClick={handleToggleDropdown}
    >
      <div className=" bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer hover:brightness-95 duration-100 relative">
        <UserAvatar size="sm" user={currentUser} />
        {unreadMessagesCount > 0 && (
          <span className="absolute bottom-0 left-1 bg-red-500 rounded-full size-[10px] flex justify-center items-center z-[999] animate-pulse"></span>
        )}
      </div>
      <div className="absolute bg-neutral-100 text-neutral-800 rounded-sm bottom-0 right-1 cursor-pointer z-[99]">
        <IoMdArrowDropdown />
      </div>
      {openDropdown && <NavbarDropdown />}
    </div>
  );
}
