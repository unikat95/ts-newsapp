import React from "react";
import { IconType } from "react-icons";

type AdminPanelStatisticsItemProps = {
  text: string;
  Icon: IconType;
  color: string;
  children: React.ReactNode;
};

export default function AdminPanelStatisticsItem({
  text,
  Icon,
  color,
  children,
}: AdminPanelStatisticsItemProps) {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm flex flex-col justify-between items-center relative overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center p-5 z-10">
        <div className="bg-white absolute -top-2 -left-2 overflow-hidden">
          <Icon
            size={90}
            className="border-[10px] border-slate-200 p-5 rounded-3xl "
            style={{ color: color }}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-end items-end">
          <p className="text-zinc-700 text-lg font-semibold">{text}</p>
          <p className="text-2xl font-bold" style={{ color: color }}>
            {children}
          </p>
        </div>
      </div>
      <span className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-slate-50 rounded-full z-[0]"></span>
    </div>
  );
}
