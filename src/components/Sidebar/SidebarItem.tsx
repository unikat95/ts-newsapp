import React, { SetStateAction, useState } from "react";

import SidebarDropdown from "./SidebarDropdown";
import SidebarDropdownItem from "./SidebarDropdownItem";

import { IconType } from "react-icons";

type SidebarMenuItemProps = {
  name: string;
  dropdownItems: { id: number; text: string; to: string; Icon: IconType }[];
  Icon: IconType;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function SidebarItem({
  name,
  dropdownItems,
  Icon,
  setOpenMenu,
}: SidebarMenuItemProps) {
  const [openDropdown, setOpenDropdown] = useState(true);

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <SidebarDropdown
      name={name}
      openDropdown={openDropdown}
      handleOpenDropdown={handleOpenDropdown}
      Icon={Icon}
    >
      {dropdownItems.map((item) => (
        <SidebarDropdownItem
          key={item.id}
          openDropdown={openDropdown}
          text={item.text}
          to={item.to}
          Icon={item.Icon}
          setOpenMenu={setOpenMenu}
        />
      ))}
    </SidebarDropdown>
  );
}
