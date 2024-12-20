import React from "react";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import {
  MessagesProps,
  RepliesProps,
  UserProps,
} from "../../context/MainContextTypes";

type MessageAuthorProps = {
  author: UserProps | undefined;
  message?: MessagesProps | RepliesProps | undefined;
};

export default function MessageAuthor({ author, message }: MessageAuthorProps) {
  return (
    <div className="flex justify-start items-center gap-2">
      <UserAvatar size="2xs" user={author} />
      <p className="text-sm font-semibold text-tertiary-text">
        {author?.firstName + " " + author?.lastName},
      </p>
      <p className="text-xs font-semibold text-tertiary-text">
        {message?.sentAt && new Date(message?.sentAt).toLocaleString()}
      </p>
    </div>
  );
}
