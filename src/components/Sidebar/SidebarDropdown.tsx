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
        className={`
        hover:bg-slate-800 flex justify-between items-center px-5 py-3 gap-2 rounded-lg
        `}
      >
        <div className="w-full h-full flex justify-start items-center gap-5">
          <Icon size={16} className="flex" />
          <div className="text-sm font-light">{name}</div>
        </div>
        <IoIosArrowDown
          className={`${openDropdown && "-rotate-180"} transition-transform`}
        />
      </button>
      <ul className="overflow-hidden flex flex-col justify-center items-end gap-1">
        {children}
      </ul>
    </div>
  );
}
