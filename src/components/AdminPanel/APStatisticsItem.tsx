import React from "react";
import { IconType } from "react-icons";
import { getIconStyles } from "../../utils/ThemeUtils";

type APStatisticsItemProps = {
  text: string;
  Icon: IconType;
  children: React.ReactNode;
  variant: "green" | "red" | "orange" | "yellow" | "blue";
};

export default function APStatisticsItem({
  text,
  Icon,
  children,
  variant,
}: APStatisticsItemProps) {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm flex flex-col justify-between items-center relative overflow-hidden col-span-2 lg:col-span-1">
      <div className="w-full h-full flex flex-col justify-center p-5 z-10">
        <div className="bg-white absolute -top-2 -left-2 overflow-hidden">
          <Icon
            size={90}
            className={`
            border-[10px] border-slate-200 p-5 rounded-3xl
            ${getIconStyles(variant)}
            `}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-end items-end">
          <p className="text-zinc-700 text-lg font-semibold">{text}</p>
          <p className={`text-2xl font-bold ${getIconStyles(variant)}`}>
            {children}
          </p>
        </div>
      </div>
      <span className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-slate-50 rounded-full z-[0]"></span>
    </div>
  );
}
