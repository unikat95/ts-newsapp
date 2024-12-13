import React from "react";

import { ListItemProps } from "./ListItem";

export default function ListItemImg({ article, user }: ListItemProps) {
  return (
    <>
      {article ? (
        <img
          src={article.img}
          alt=""
          className="w-10 h-8 rounded-md object-cover"
        />
      ) : user?.avatar ? (
        <img
          src={user?.avatar}
          alt=""
          className="w-8 h-8 rounded-full object-cover border-2 border-slate-200"
        />
      ) : (
        <div className="w-8 h-8 bg-orange-400 rounded-full object-cover flex justify-center items-center text-sm font-bold text-white uppercase border-2 border-slate-200">
          {user?.firstName.slice(0, 1) + "" + user?.lastName.slice(0, 1)}
        </div>
      )}
    </>
  );
}
