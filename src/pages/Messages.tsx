import React from "react";
import { Outlet } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";
import MessagesItem from "../components/Messages/MessagesItem";
import { createMessagesItemsList } from "../components/Messages/MessagesItemsList";

export default function Messages() {
  const { incomingUnreadCount, sentUnreadCount } = useMainContext();

  const MessagesItemsList = createMessagesItemsList({
    incomingUnreadCount,
    sentUnreadCount,
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5">
      <div className="w-full flex justify-between items-start gap-5">
        <div className="w-auto">
          <ul className="w-full bg-white flex flex-col justify-center items-start gap-2 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] p-5 rounded-xl">
            {MessagesItemsList.map((item) => (
              <MessagesItem
                key={item.id}
                to={item.to}
                unreadCount={item.unreadCount}
                title={item.title}
              />
            ))}
          </ul>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
