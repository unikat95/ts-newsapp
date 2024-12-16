import React from "react";

import { IconType } from "react-icons";

type UserInfoItemProps = {
  Icon: IconType;
  text: string | undefined;
  itemName: string;
};

export default function UserInfoItem({
  Icon,
  text,
  itemName,
}: UserInfoItemProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <h4 className="text-sm text-tertiary-text font-medium">{itemName}</h4>
      <div className="flex justify-start items-center rounded-md overflow-hidden">
        <div className="w-autop h-full bg-zinc-200 p-3">
          <Icon className="text-zinc-500" />
        </div>
        <div className="w-full bg-zinc-100 text-primary-text p-2 capitalize">
          {text}
        </div>
      </div>
    </div>
  );
}
