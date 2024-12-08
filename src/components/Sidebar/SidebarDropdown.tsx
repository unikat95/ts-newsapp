import React from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

type SidebarDropdownProps = {
  openDropdown: boolean;
  handleOpenDropdown: () => void;
  children: React.ReactNode;
  name: string;
  Icon: IconType;
};

export default function SidebarDropdown({
  openDropdown,
  handleOpenDropdown,
  children,
  name,
  Icon,
}: SidebarDropdownProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <button
        onClick={handleOpenDropdown}
        className="bg-neutral-700 hover:bg-neutral-600 flex justify-between items-center px-4 py-3 gap-2 rounded-md"
      >
        <div className="w-full h-full flex justify-start items-center gap-3">
          <Icon size={20} className="flex" />
          {name}
        </div>
        <IoIosArrowDown
          className={`${openDropdown && "-rotate-180"} transition-transform`}
        />
      </button>
      <ul className="overflow-hidden flex flex-col justify-end items-end gap-1">
        {children}
      </ul>
    </div>
  );
}
