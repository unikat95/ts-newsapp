import React, { SetStateAction, useEffect, useRef, useState } from "react";

import NavbarLogo from "./NavbarLogo";
import HamburgerMenu from "./HamburgerMenu";
import NavbarMenu from "./NavbarMenu";

type NavbarProps = {
  navbarHeight: number;
  setNavbarHeight: React.Dispatch<SetStateAction<number>>;
};

export default function Navbar({ navbarHeight, setNavbarHeight }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState(false);
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

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav
      ref={navRef}
      className="w-full bg-white flex flex-col justify-center items-center fixed top-0 left-0 px-5 py-5 border-b"
    >
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <NavbarLogo />
        <NavbarMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <HamburgerMenu
          handleToggleMenu={handleToggleMenu}
          openMenu={openMenu}
        />
      </div>
    </nav>
  );
}
