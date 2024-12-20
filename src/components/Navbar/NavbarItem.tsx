import React, { SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

type NavbarItemProps = {
  text: string;
  to: string;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
  hidden?: boolean;
  clearCategory?: boolean;
};

export default function NavbarItem({
  text,
  to,
  setOpenMenu,
  hidden,
  clearCategory,
}: NavbarItemProps) {
  const { setCategoryToDisplay } = useMainContext();
  const handleCloseMenu = () => {
    setOpenMenu(false);

    if (clearCategory) {
      setCategoryToDisplay("");
    }
  };

  return (
    <li className={`w-full md:w-auto ${hidden && "md:hidden"}`}>
      <NavLink
        to={to}
        className="w-full md:w-auto md:bg-transparent flex justify-center items-center text-2xl md:text-base font-medium py-3 md:py-0 aria-[current=page]:text-black"
        onClick={handleCloseMenu}
      >
        {text}
      </NavLink>
    </li>
  );
}
