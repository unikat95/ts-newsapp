import React, { SetStateAction } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

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
  return (
    <li
      className="bg-white hover:bg-neutral-100 w-full border-b first:border-t text-nowrap"
      onClick={() => setOpenDropdown(false)}
    >
      <Link
        to={to}
        className="w-full py-3 pl-4 pr-6 gap-3 flex justify-start items-center text-sm"
      >
        <Icon className="text-neutral-500" size={18} />
        {name}
      </Link>
    </li>
  );
}
