import React, { useEffect, useState } from "react";

import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import { MessagesProps } from "../../context/MainContextTypes";
import MessagesListAuthor from "./MessagesListAuthor";
import MessagesListTitle from "./MessagesListTitle";
import MessagesListDate from "./MessagesListDate";
import MessagesListNotification from "./MessagesListNotification";
import ListLoader from "../ListLoader/ListLoader";

type MessagesListProps = {
  messages: MessagesProps[] | undefined;
  incoming?: boolean;
};

export default function MessagesList({
  messages,
  incoming,
}: MessagesListProps) {
  const { currentUser, userList } = useMainContext();
  const [msgListLoading, setMsgListLoading] = useState(true);

  useEffect(() => {
    if (msgListLoading) {
      const timeout = setTimeout(() => {
        setMsgListLoading(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [msgListLoading]);

  return (
    <div className="flex flex-col gap-2">
      {!msgListLoading ? (
        messages && messages?.length > 0 ? (
          messages?.map((msg) => {
            const isRead = currentUser?.id
              ? msg.readBy[currentUser?.id]
              : false;
            const author = userList?.find(
              (user) => user.id === (incoming ? msg.from : msg.to)
            );
            return (
              <Link to={`/profile/messages/${msg.id}`} key={msg.id}>
                <div
                  className={`grid grid-cols-[1fr,_3fr,_auto] justify-center items-start rounded-lg p-3 relative gap-5 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] ${
                    !isRead ? "bg-lime-100" : "bg-white"
                  }`}
                >
                  <MessagesListAuthor author={author} incoming={incoming} />
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
        )
      ) : (
        <ListLoader size={30} color="blue" />
      )}
    </div>
  );
}
