import React from "react";
import { getIconStyles } from "../../Utilities/ThemeUtils";

type APUserCardStatItemProps = {
  children: React.ReactNode;
  color: string;
  text: string;
};

export default function APUserCardStatItem({
  children,
  color,
  text,
}: APUserCardStatItemProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center rounded-md">
      <p className="text-zinc-700 text-base font-semibold">{text}</p>
      <p className={`text-lg font-bold ${getIconStyles(color)}`}>{children}</p>
    </div>
  );
}
