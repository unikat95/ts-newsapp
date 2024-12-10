import React, { useState } from "react";

import SidebarMenu from "./SidebarMenu";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`
    w-[80%] md:w-[40%] xl:w-[20%] right-0 h-screen bg-slate-900 text-white z-40 flex flex-col justify-between items-center text-nowrap fixed md:relative
    ${
      openMenu ? "translate-x-0" : "translate-x-[80dvw] md:translate-x-0"
    } transition-transform md:transition-none duration-500`}
    >
      <SidebarMenu setOpenMenu={setOpenMenu} />
      <button
        className="absolute -left-9 top-2 bg-slate-900 p-3 rounded-l-xl md:hidden"
        onClick={handleToggleMenu}
      >
        <RxHamburgerMenu size={20} />
      </button>
    </div>
  );
}
