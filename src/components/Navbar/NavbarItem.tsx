import React, { SetStateAction } from "react";
import { NavLink } from "react-router-dom";

type NavbarItemProps = {
  text: string;
  to: string;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
  hidden?: boolean;
};

export default function NavbarItem({
  text,
  to,
  setOpenMenu,
  hidden,
}: NavbarItemProps) {
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <li className={`w-full md:w-auto ${hidden && "md:hidden"}`}>
      <NavLink
        to={to}
        className="w-full md:w-auto  md:bg-transparent flex justify-center items-center text-2xl md:text-base font-medium py-3 md:py-0 aria-[current=page]:text-orange-600"
        onClick={handleCloseMenu}
      >
        {text}
      </NavLink>
    </li>
  );
}
