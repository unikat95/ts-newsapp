import React from "react";
import useMainContext from "../../hooks/useMainContext";

export default function AdminPanelUserCard() {
  const { currentUser, articles } = useMainContext();

  const userArticles = articles.filter((art) => art.author === currentUser?.id);

  return (
    <div className="flex flex-col justify-between items-start gap-5">
      <div className="w-full h-full bg-white rounded-xl shadow-sm flex flex-col justify-start items-start relative p-5 gap-5">
        <div className="absolute -top-7 right-5">
          {currentUser?.avatar !== "" ? (
            <div className="w-16 h-16 bg-zinc-400 text-white text-2xl rounded-full flex justify-center items-center overflow-hidden border-[5px] border-slate-200">
              <img src={currentUser?.avatar} alt="" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-zinc-400 text-white text-2xl rounded-full flex justify-center items-center">
              {currentUser?.firstName.slice(0, 1)}
              {currentUser?.lastName.slice(0, 1)}
            </div>
          )}
        </div>
        <div className="w-2/3 h-full flex flex-col">
          <p className="text-xl text-zinc-600 font-semibold">
            {currentUser?.firstName + " " + currentUser?.lastName}
          </p>
          <p className="text-sm text-orange-600 font-semibold">
            {currentUser?.role}
          </p>
        </div>
        <div className="w-full bg-slate-50 py-2 px-5 flex justify-between md:justify-end md:gap-5 items-center rounded-md">
          <div className="w-auto flex flex-col justify-end items-end">
            <p className="text-zinc-700 text-base font-semibold">Posts</p>
            <p className="text-lg text-green-400 font-bold">
              {userArticles.length}
            </p>
          </div>
          <div className="w-auto flex flex-col justify-end items-end">
            <p className="text-zinc-700 text-base font-semibold">Comments</p>
            <p className="text-lg text-orange-400 font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
