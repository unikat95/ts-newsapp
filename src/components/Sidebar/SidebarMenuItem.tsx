import React, { useState } from "react";

import SidebarDropdown from "./SidebarDropdown";
import SidebarDropdownItem from "./SidebarDropdownItem";

import { IconType } from "react-icons";

type SidebarMenuItemProps = {
  name: string;
  dropdownItems: { id: number; text: string; to: string; Icon: IconType }[];
  Icon: IconType;
};

export default function SidebarMenuItem({
  name,
  dropdownItems,
  Icon,
}: SidebarMenuItemProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

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
        />
      ))}
    </SidebarDropdown>
  );
}
