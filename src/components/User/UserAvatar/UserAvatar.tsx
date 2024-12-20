import React from "react";

import {
  getUserAvatarFontSize,
  getUserAvatarSize,
} from "../../../utils/ThemeUtils";
import { UserProps } from "../../../context/MainContextTypes";

type UserAvatarProps = {
  size: string;
  user: UserProps | null | undefined;
};

export default function UserAvatar({ size, user }: UserAvatarProps) {
  return (
    <>
      <div
        className={`
      rounded-full overflow-hidden z-10

      ${getUserAvatarSize(size)}
      ${!user?.avatar && "bg-sky-500 text-white"}
      `}
      >
        {!user?.avatar ? (
          <div
            className={`w-full h-full flex justify-center items-center uppercase font-bold ${getUserAvatarFontSize(
              size
            )}`}
          >
            {user?.firstName.slice(0, 1) + "" + user?.lastName.slice(0, 1)}
          </div>
        ) : (
          <img
            src={user?.avatar}
            alt=""
            className="w-full h-full bg-cover object-cover"
          />
        )}
      </div>
    </>
  );
}
