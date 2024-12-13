import React, { SetStateAction } from "react";
import NavbarItem from "./NavbarItem";
import useMainContext from "../../hooks/useMainContext";
import NavbarProfile from "./NavbarProfile";
import { Link } from "react-router-dom";

type NavbarMenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function NavbarMenu({ openMenu, setOpenMenu }: NavbarMenuProps) {
  const { user } = useMainContext();

  return (
    <ul
      className={`
  w-full h-full bg-slate-100 fixed top-0 left-0 flex flex-col justify-center items-center gap-2 md:gap-5 md:relative md:bg-transparent md:flex md:w-auto md:h-auto md:flex-row md:translate-x-0 md:transition-none px-10 md:p-0

  ${
    openMenu ? "translate-x-0" : "translate-x-[200vw]"
  } transition-transform duration-500`}
    >
      <NavbarItem text="Home" to="/" setOpenMenu={setOpenMenu} />
      <NavbarItem text="Articles" to="/articles" setOpenMenu={setOpenMenu} />
      <NavbarItem text="Users" to="/users" setOpenMenu={setOpenMenu} />

      {user ? (
        <>
          <NavbarProfile />
          <NavbarItem
            text="Profile"
            to="/profile"
            setOpenMenu={setOpenMenu}
            hidden={true}
          />
        </>
      ) : (
        <Link to="/auth" className="bg-black text-white px-4 py-2 rounded-md">
          Login
        </Link>
      )}
    </ul>
  );
}
