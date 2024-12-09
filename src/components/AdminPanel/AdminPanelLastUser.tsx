import React from "react";
import { UserProps } from "../../context/MainContextTypes";

type AdminPanelLastUser = {
  user: UserProps;
};

export default function AdminPanelLastUser({ user }: AdminPanelLastUser) {
  return (
    <>
      <div className="w-full h-auto bg-white flex flex-col justify-end items-center p-5 gap-5 rounded-lg relative overflow-hidden">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt=""
            className="w-20 h-20 rounded-full border-[6px] border-slate-200 z-10"
          />
        ) : (
          <div className="bg-slate-500 w-20 h-20 rounded-full border-[6px] border-slate-200 flex justify-center items-center z-10">
            <p className="text-3xl text-white font-semibold uppercase">
              {user.email.slice(0, 1)}
            </p>
          </div>
        )}
        <div className="w-full flex flex-col justify-center items-center z-10">
          <p className="text-slate-700 text-lg font-bold text-center">
            {user.firstName + " " + user.lastName}
          </p>
          <p className="text-orange-500 text-sm font-bold">{user.role}</p>
        </div>
        <p className="text-slate-500 text-base font-semibold line-clamp-1 z-10">
          {user.email}
        </p>
        <span className="w-[30rem] h-[30rem] bg-stone-50 absolute rotate-[60deg] -top-[26rem] -left-20 z-0"></span>
      </div>
    </>
  );
}
