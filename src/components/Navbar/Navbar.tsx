import React, { SetStateAction, useEffect, useRef } from "react";

import useMainContext from "../../hooks/useMainContext";
import NavbarLogo from "./NavbarLogo";
import NavbarItem from "./NavbarItem";
import NavbarProfile from "./NavbarProfile";

type NavbarProps = {
  navbarHeight: number;
  setNavbarHeight: React.Dispatch<SetStateAction<number>>;
};

export default function Navbar({ navbarHeight, setNavbarHeight }: NavbarProps) {
  const { user } = useMainContext();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      setNavbarHeight(height);
    }

    const handleResize = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavbarHeight(height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [navbarHeight]);

  return (
    <nav
      ref={navRef}
      className="w-full bg-white flex flex-col fixed top-0 left-0 px-5 py-7 border-b"
    >
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <NavbarLogo />
        <ul className="w-auto flex justify-center items-center gap-5">
          <NavbarItem text="Home" to="/" />
          <NavbarItem text="Articles" to="/articles" />
          <NavbarItem text="Users" to="/users" />
          {user ? <NavbarProfile /> : <NavbarItem text="Login" to="/auth" />}
        </ul>
      </div>
    </nav>
  );
}
