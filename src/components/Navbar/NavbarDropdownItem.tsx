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
      className="w-full rounded-md overflow-hidden"
      onClick={() => setOpenDropdown(false)}
    >
      <Link
        to={to}
        className="w-full hover:bg-slate-100 flex justify-start items-center gap-2 px-2 pr-4 py-2 text-nowrap relative"
      >
        <Icon className="text-neutral-500" size={18} />
        {name}
        {name === "Messages" && unreadMessagesCount > 0 && (
          <span className="absolute right-2 bg-red-500 rounded-full size-2 flex justify-center items-center z-[999] animate-pulse"></span>
        )}
      </Link>
    </li>
  );
}
