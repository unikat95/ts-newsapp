import React from "react";

import UserInfoItem from "../UserInfoItem/UserInfoItem";

import { FaUser } from "react-icons/fa";
import { MdDateRange, MdEmail } from "react-icons/md";
import { CgComment } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { UserProps } from "../../../context/MainContextTypes";
import { GiRank3 } from "react-icons/gi";

type UserInfoProps = {
  user: UserProps | null | undefined;
};

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col md:flex-row md:gap-5 gap-2">
        <UserInfoItem
          Icon={FaUser}
          text={user?.firstName}
          itemName="First name"
        />
        <UserInfoItem
          Icon={FaUser}
          text={user?.lastName}
          itemName="Last name"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 gap-2">
        <UserInfoItem Icon={MdEmail} text={user?.email} itemName="Email" />
        <UserInfoItem Icon={GiRank3} text={user?.role} itemName="Role" />
      </div>
      <div className="w-full flex flex-col md:flex-row md:gap-5 gap-2">
        <UserInfoItem
          Icon={MdDateRange}
          text={
            !user?.birthDate
              ? "--/--/--"
              : new Date(user.birthDate).toLocaleDateString("en-GB")
          }
          itemName="Birth date"
        />
        <UserInfoItem
          Icon={MdDateRange}
          text={
            !user?.joinedAt
              ? "--/--/--"
              : new Date(user.joinedAt).toLocaleDateString("en-GB")
          }
          itemName="Joined"
        />
      </div>
      <div className="w-full flex justify-between gap-5">
        <UserInfoItem Icon={CgComment} text={"0"} itemName="Comments" />
        <UserInfoItem Icon={BiLike} text={"0"} itemName="Likes" />
      </div>
    </div>
  );
}
