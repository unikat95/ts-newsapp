import React from "react";

type SidebarHeadingProps = {
  text: string;
};

export default function SidebarHeading({ text }: SidebarHeadingProps) {
  return (
    <div className="w-full bg- flex justify-start items-start border-b-[3px] border-black">
      <h4 className="bg-black text-white px-4 pt-2 pb-[5px]">{text}</h4>
    </div>
  );
}
