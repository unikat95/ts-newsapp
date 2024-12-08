import React from "react";

import useMainContext from "../../hooks/useMainContext";

import { IoIosArrowDown } from "react-icons/io";
import NavbarDropdown from "./NavbarDropdown";

export default function NavbarProfile() {
  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(!openDropdown);
  };

  const { openDropdown, setOpenDropdown } = useMainContext();

  const { currentUser } = useMainContext();
  return (
    <div className="relative user-dropdown hidden md:block">
      <div
        className="w-14 h-14 bg-neutral-100 rounded-full flex justify-center items-center overflow-hidden text-xl cursor-pointer border-[5px] border-neutral-200 hover:brightness-95 duration-75"
        onClick={handleToggleDropdown}
      >
        <div className="uppercase font-medium">
          {currentUser?.avatar ? (
            <img src={currentUser.avatar} alt="avatar"></img>
          ) : currentUser?.firstName === "" || currentUser?.lastName === "" ? (
            currentUser.email.slice(0, 1)
          ) : (
            currentUser?.firstName.slice(0, 1) +
            "" +
            currentUser?.lastName.slice(0, 1)
          )}
        </div>
      </div>
      <div className="absolute bg-white text-neutral-500 rounded-md shadow-md bottom-1 right-1 cursor-pointer">
        <IoIosArrowDown />
      </div>
      {openDropdown && <NavbarDropdown />}
    </div>
  );
}
