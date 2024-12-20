import React from "react";
import { NavLink } from "react-router-dom";

type MessagesItemProps = {
  to: string;
  unreadCount?: number;
  title: string;
};

export default function MessagesItem({
  to,
  unreadCount,
  title,
}: MessagesItemProps) {
  return (
    <li className="w-full flex">
      <NavLink
        to={to}
        className="w-full flex justify-between items-center text-nowrap gap-5 px-3 py-2 pr-10 rounded-md aria-[current]:bg-slate-700 aria-[current]:text-white relative"
      >
        {title}
        {unreadCount
          ? unreadCount > 0 && (
              <span className="absolute right-3 bg-red-500 rounded-full size-2 flex justify-center items-center z-[999] animate-pulse"></span>
            )
          : null}
      </NavLink>
    </li>
  );
}
