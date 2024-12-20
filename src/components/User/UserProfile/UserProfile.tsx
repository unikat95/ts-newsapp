import React, { MouseEventHandler } from "react";

import UserAvatar from "../UserAvatar/UserAvatar";
import UserInfo from "../UserInfo/UserInfo";
import { IoMdSettings } from "react-icons/io";
import { UserProps } from "../../../context/MainContextTypes";
import { useLocation } from "react-router-dom";
import UserProfileLinks from "../UserProfileLinks/UserProfileLinks";

import { RiInfoCardLine } from "react-icons/ri";
import APHeading from "../../AdminPanel/APHeading";

type UserProfileProps = {
  user: UserProps | null | undefined;
  handleToggleUserBgEditor?: MouseEventHandler<HTMLButtonElement>;
  handleToggleUserEditor?: () => void;
};

export default function UserProfile({
  user,
  handleToggleUserBgEditor,
  handleToggleUserEditor,
}: UserProfileProps) {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col justify-center items-end gap-5">
      <APHeading text="User information" />
      <div className="w-full h-full bg-white flex flex-col justify-center items-start main-shadow rounded-xl overflow-hidden">
        <div
          className={`w-full h-[25rem] flex flex-col justify-start items-center gap-5 p-20 bg-cover bg-center relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-10 after:transition-all after:duration-200 group backdrop-blur-md
          ${
            !location.pathname.includes("user") && "hover:after:bg-opacity-40 "
          }`}
          style={{
            backgroundImage: `url('${user?.userProfileBg}')`,
          }}
        >
          {!location.pathname.includes("user") && (
            <button
              className="absolute top-5 right-5 text-white z-[999] hover:animate-spin hidden group-hover:block"
              onClick={handleToggleUserBgEditor}
            >
              <IoMdSettings size={25} />
            </button>
          )}
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start p-5 relative">
          <div className="w-full absolute -top-40 left-0 flex justify-center items-center md:justify-start md:left-5 gap-5">
            <UserAvatar size="xl" user={user} />
          </div>
          <div
            className={`w-full flex justify-center items-center md:justify-end md:items-end z-10 mt-14 md:mt-0 ${
              location.pathname.includes("user") && "md:mt-10"
            }`}
          >
            <UserProfileLinks handleToggleUserEditor={handleToggleUserEditor} />
          </div>
          <div className="w-full">
            <UserInfo user={user} />
          </div>
          <div className="w-full bg-zinc-100 p-5 mt-5 rounded-md">
            <h3 className="text-lg font-medium text-primary-text flex justify-start items-center gap-1">
              <RiInfoCardLine size={22} />
              About:
            </h3>
            <p className="text-secondary-text">
              {user?.about
                ? user.about
                : "This user has not completed the about section"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
