import React from "react";
import { ReplyProps, UserProps } from "../../context/MainContextTypes";
import { Link } from "react-router-dom";
import UserAvatar from "../User/UserAvatar/UserAvatar";

type CommentReplyProps = {
  rep: ReplyProps;
  repAuthor: UserProps | undefined;
};

export default function CommentReply({ rep, repAuthor }: CommentReplyProps) {
  return (
    <div
      key={rep.id}
      className="w-[90%] flex flex-col justify-center items-start border p-5 gap-3 relative"
    >
      <Link
        to={`/users/user/${rep.author}`}
        className="w-auto flex justify-start items-center gap-2 font-medium"
      >
        <UserAvatar user={repAuthor} size="xs" />
        {repAuthor?.firstName + " " + repAuthor?.lastName}
      </Link>
      <p className="text-secondary-text">{rep.msg}</p>
      <p className="text-xs font-medium text-tertiary-text">
        {new Date(rep.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
