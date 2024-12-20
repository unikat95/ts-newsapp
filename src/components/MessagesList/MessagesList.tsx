import React from "react";

import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import { MessagesProps } from "../../context/MainContextTypes";
import MessagesListAuthor from "./MessagesListAuthor";
import MessagesListTitle from "./MessagesListTitle";
import MessagesListDate from "./MessagesListDate";
import MessagesListNotification from "./MessagesListNotification";

type MessagesListProps = {
  messages: MessagesProps[] | undefined;
};

export default function MessagesList({ messages }: MessagesListProps) {
  const { currentUser, userList } = useMainContext();
  return (
    <div className="flex flex-col gap-2">
      {messages && messages?.length > 0 ? (
        messages?.map((msg) => {
          const isRead = currentUser?.id ? msg.readBy[currentUser?.id] : false;
          const author = userList?.find((user) => user.id === msg.from);
          return (
            <Link to={`/profile/messages/${msg.id}`} key={msg.id}>
              <div
                className={`grid grid-cols-[1fr,_3fr,_auto] justify-center items-start rounded-lg p-3 relative gap-5 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] ${
                  !isRead ? "bg-lime-100" : "bg-white"
                }`}
              >
                <MessagesListAuthor author={author} />
                <MessagesListTitle msg={msg} />
                <MessagesListDate msg={msg} />
                <MessagesListNotification isRead={isRead} />
              </div>
            </Link>
          );
        })
      ) : (
        <div className="w-full bg-white rounded-xl p-5 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)]">
          There are no messages to display.
        </div>
      )}
    </div>
  );
}
