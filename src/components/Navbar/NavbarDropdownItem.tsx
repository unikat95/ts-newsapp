import React, { SetStateAction } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

type NavbarDropdownItemProps = {
  name: string;
  to: string;
  Icon: IconType;
  setOpenDropdown: React.Dispatch<SetStateAction<boolean>>;
};

export default function NavbarDropdownItem({
  name,
  to,
  Icon,
  setOpenDropdown,
}: NavbarDropdownItemProps) {
  const { unreadMessagesCount } = useMainContext();
  return (
    <li
      className="flex justify-center items-center bg-white hover:bg-neutral-100 w-full border-b first:border-t text-nowrap relative"
      onClick={() => setOpenDropdown(false)}
    >
      <Link
        to={to}
        className="w-full py-3 pl-4 pr-6 gap-3 flex justify-start items-center text-sm"
      >
        <Icon className="text-neutral-500" size={18} />
        {name}
      </Link>
      {name === "Messages" && unreadMessagesCount > 0 && (
        <span className="absolute right-1 bg-red-500 rounded-full size-[10px] flex justify-center items-center z-[999] animate-pulse"></span>
      )}
    </li>
  );
}
