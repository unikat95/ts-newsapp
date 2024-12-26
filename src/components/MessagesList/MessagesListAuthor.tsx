import React from "react";
import { UserProps } from "../../context/MainContextTypes";
import UserAvatar from "../User/UserAvatar/UserAvatar";

type MessagesListAuthorProps = {
  author: UserProps | undefined;
  incoming?: boolean;
};

export default function MessagesListAuthor({
  author,
  incoming,
}: MessagesListAuthorProps) {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
        {incoming ? "from" : "to"}
      </p>
      <div className="w-full flex justify-start items-center gap-1">
        <UserAvatar size="2xs" user={author} />
        <p className="text-sm text-nowrap">
          {author?.firstName + " " + author?.lastName}
        </p>
      </div>
    </div>
  );
}
