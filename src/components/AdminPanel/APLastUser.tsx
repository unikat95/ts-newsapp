import React from "react";
import { UserProps } from "../../context/MainContextTypes";
import { Link } from "react-router-dom";
import UserAvatar from "../User/UserAvatar/UserAvatar";

type APLastUser = {
  user: UserProps;
};

export default function APLastUser({ user }: APLastUser) {
  return (
    <>
      <Link
        to={`/users/user/${user.id}`}
        className="w-full h-auto bg-white flex flex-col justify-end items-center p-5 gap-5 rounded-lg relative overflow-hidden cursor-pointer group"
      >
        <div className="z-50 rounded-full border-[6px] border-slate-200 overflow-hidden">
          <UserAvatar size="md" user={user} />
        </div>
        <div className="w-full flex flex-col justify-center items-center z-10">
          <p className="text-slate-700 text-lg font-bold text-center">
            {user.firstName + " " + user.lastName}
          </p>
          <p className="text-orange-500 text-sm font-bold">{user.role}</p>
        </div>
        <span className="w-[30rem] h-[30rem] bg-stone-50 absolute rotate-[60deg] -top-[26rem] -left-20 z-0"></span>
      </Link>
    </>
  );
}
