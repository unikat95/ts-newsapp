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
    <div className="w-full bg-slate-100 flex flex-col justify-center items-center rounded-md p-2">
      <p className="text-zinc-700 text-sm md:text-base font-semibold">{text}</p>
      <p className={`text-medium md:text-lg font-bold ${getIconStyles(color)}`}>
        {children}
      </p>
    </div>
  );
}
