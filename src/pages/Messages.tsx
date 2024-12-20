import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";

export default function Messages() {
  const { messages, currentUser } = useMainContext();

  const incomingMessages = messages?.filter(
    (msg) => msg.to === currentUser?.id && !msg.readBy[currentUser.id]
  );
  const sentMessages = messages?.filter(
    (msg) => msg.from === currentUser?.id && !msg.readBy[currentUser.id]
  );

  const incomingUnreadCount = incomingMessages?.length || 0;
  const sentUnreadCount = sentMessages?.length || 0;

  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5">
      <div className="w-full flex justify-between items-start gap-5">
        <div className="w-auto">
          <ul className="w-full bg-white flex flex-col justify-center items-start gap-2 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] p-5 rounded-xl">
            <li className="w-full flex">
              <NavLink
                to="/profile/messages/incoming-messages"
                className="w-full flex justify-between items-center text-nowrap gap-5 px-3 py-2 pr-10 rounded-md aria-[current]:bg-slate-700 aria-[current]:text-white relative"
              >
                Incoming messages
                {incomingUnreadCount > 0 && (
                  <span className="absolute right-3 bg-red-500 rounded-full size-2 flex justify-center items-center z-[999] animate-pulse"></span>
                )}
              </NavLink>
            </li>
            <li className="w-full flex">
              <NavLink
                to="/profile/messages/sent-messages"
                className="w-full flex justify-between items-center text-nowrap gap-5 px-3 py-2 pr-10 rounded-md aria-[current]:bg-slate-700 aria-[current]:text-white relative"
              >
                Sent messages
                {sentUnreadCount > 0 && (
                  <span className="absolute right-3 bg-red-500 rounded-full size-2 flex justify-center items-center z-[999] animate-pulse"></span>
                )}
              </NavLink>
            </li>
            <li className="w-full flex">
              <NavLink
                to="/profile/messages/send-message"
                className="w-full flex justify-between items-center text-nowrap gap-5 px-3 py-2 pr-5 rounded-md aria-[current]:bg-slate-700 aria-[current]:text-white"
              >
                Send messages
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
