import React from "react";

type HamburgerMenuProps = {
  handleToggleMenu: () => void;
  openMenu: boolean;
};

export default function HamburgerMenu({
  handleToggleMenu,
  openMenu,
}: HamburgerMenuProps) {
  return (
    <button
      onClick={handleToggleMenu}
      className={`hamburger-menu ${openMenu && "active"} md:hidden`}
    ></button>
  );
}
