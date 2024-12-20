import React from "react";

import { UserProps } from "../../context/MainContextTypes";
import { Link } from "react-router-dom";
import UserAvatar from "../User/UserAvatar/UserAvatar";

type ArticleAuthorProps = {
  author: UserProps | null | undefined;
};

export default function ArticleAuthor({ author }: ArticleAuthorProps) {
  return (
    <div className="w-full flex justify-start items-center gap-2">
      <Link
        to={`/users/user/${author?.id}`}
        className="w-auto flex gap-2 justify-start items-center group text-secondary-text"
      >
        <UserAvatar size="xs" user={author} />
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-1">
            <p className="font-semibold">{author?.firstName}</p>
            <p className="font-semibold">{author?.lastName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
