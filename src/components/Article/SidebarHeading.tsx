import React from "react";

import { getHeadingColor } from "../../utils/ThemeUtils";
import { IconType } from "react-icons";

type SidebarHeadingProps = {
  text: string;
  fontSize?: string;
  color?: string;
  border?: string;
  Icon?: IconType;
};

export default function SidebarHeading({
  text,
  fontSize,
  color,
  Icon,
}: SidebarHeadingProps) {
  return (
    <div className="w-full flex justify-start items-start">
      <h4
        className={`
      flex justify-start items-center gap-2 bg-black text-white px-3 py-2 rounded-md main-shadow
      ${fontSize}
      ${color && getHeadingColor(color)}`}
      >
        {Icon && <Icon />}
        {text}
      </h4>
    </div>
  );
}
