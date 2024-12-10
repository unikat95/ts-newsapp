import React from "react";

type AdminPanelHeaderProps = {
  text: string;
};

export default function AdminPanelHeader({ text }: AdminPanelHeaderProps) {
  return <h1 className="text-2xl text-slate-700 font-medium">{text}</h1>;
}