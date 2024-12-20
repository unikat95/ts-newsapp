import React from "react";
import { getHeadingColor } from "../../utils/ThemeUtils";

type SidebarHeadingProps = {
  text: string;
  fontSize?: string;
  color?: string;
  border?: string;
};

export default function SidebarHeading({
  text,
  fontSize,
  color,
  border,
}: SidebarHeadingProps) {
  return (
    <div
      className={`
    w-full bg- flex justify-start items-start border-b-[4px] border-black
    ${border && getHeadingColor(border)}`}
    >
      <h4
        className={`
      bg-black text-white px-5 pt-2 pb-[3px]
      ${fontSize}
      ${color && getHeadingColor(color)}`}
      >
        {text}
      </h4>
    </div>
  );
}
