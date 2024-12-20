import React from "react";
import { Link } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";
import UserAvatar from "../User/UserAvatar/UserAvatar";

export default function IncomingMessages() {
  const { currentUser, messages, userList } = useMainContext();

  const incomingMessages = messages
    ?.filter((msg) => msg.to === currentUser?.id)
    .sort(
      (a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()
    );

  return (
    <div className="flex flex-col gap-2">
      {incomingMessages && incomingMessages?.length > 0 ? (
        incomingMessages?.map((msg) => {
          const isRead = currentUser?.id ? msg.readBy[currentUser?.id] : false;
          const author = userList?.find((user) => user.id === msg.from);
          return (
            <Link to={`/profile/messages/${msg.id}`} key={msg.id}>
              <div
                className={`grid grid-cols-[1fr,_3fr,_auto] justify-center items-start rounded-lg p-3 relative gap-5 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] ${
                  !isRead ? "bg-lime-100" : "bg-white"
                }`}
              >
                <div className="w-full flex flex-col justify-center items-start gap-2">
                  <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
                    from
                  </p>
                  <div className="w-full flex justify-start items-center gap-1">
                    <UserAvatar size="2xs" user={author} />
                    <p className="text-sm text-nowrap">
                      {author?.firstName + " " + author?.lastName}
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
                    Title
                  </p>
                  <p className="text-base line-clamp-1">{msg.title}</p>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
                    Date
                  </p>
                  <p className="text-sm text-nowrap">
                    {new Date(msg.sentAt).toLocaleString()}
                  </p>
                </div>
                {!isRead && (
                  <span className="absolute right-1 top-1 bg-lime-300 rounded-full size-3 flex justify-center items-center z-[9] animate-pulse"></span>
                )}
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
