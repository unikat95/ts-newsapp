import React from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { CommentProps, UserProps } from "../../context/MainContextTypes";

type ArticleCommentAuthorProps = {
  comment: CommentProps;
  comAuthor: UserProps | undefined;
};

export default function CommentAuthor({
  comment,
  comAuthor,
}: ArticleCommentAuthorProps) {
  return (
    <Link
      to={`/users/user/${comment.author}`}
      className="w-auto flex justify-start items-center gap-2 font-medium"
    >
      <UserAvatar user={comAuthor} size="xs" />
      {comAuthor?.firstName + " " + comAuthor?.lastName}
    </Link>
  );
}
