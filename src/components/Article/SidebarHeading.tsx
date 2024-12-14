import React from "react";
import { getHeadingBorder, getHeadingColor } from "../../Utilities/ThemeUtils";

type SidebarHeadingProps = {
  text: string;
  fontSize?: string;
  color?: string;
};

export default function SidebarHeading({
  text,
  fontSize,
  color,
}: SidebarHeadingProps) {
  return (
    <div
      className={`
    w-full bg- flex justify-start items-start border-b-[3px] border-black
    ${color && getHeadingBorder(color)}`}
    >
      <h4
        className={`
      bg-black text-white px-5 pt-2 pb-[5px]
      ${fontSize}
      ${color && getHeadingColor(color)}`}
      >
        {text}
      </h4>
    </div>
  );
}
