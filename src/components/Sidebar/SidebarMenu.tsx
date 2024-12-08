import React from "react";

import SidebarMenuItem from "./SidebarMenuItem";
import {
  articleDropdownItems,
  usersDropdownItems,
} from "./SidebarDropdownItems";

export default function SidebarMenu() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <SidebarMenuItem name="Articles" dropdownItems={articleDropdownItems} />
      <SidebarMenuItem name="Users" dropdownItems={usersDropdownItems} />
    </div>
  );
}
