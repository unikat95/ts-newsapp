import React from "react";

import { UserProps } from "../../context/MainContextTypes";
import { Link } from "react-router-dom";

type ArticleAuthorProps = {
  author: UserProps | null | undefined;
};

export default function ArticleAuthor({ author }: ArticleAuthorProps) {
  return (
    <div className="w-full flex justify-start items-center gap-2">
      <p className="text-sm font-medium">by</p>
      <Link
        to={`/users/user/${author?.id}`}
        className="w-auto flex gap-2 justify-start items-center group text-secondary-text"
      >
        <div className="w-8 h-8 bg-lime-500 flex justify-center items-center rounded-full text-xs font-semibold text-white group-hover:brightness-90 transition-all duration-100 overflow-hidden">
          {author?.avatar ? (
            <img src={author.avatar} alt="" className="" />
          ) : (
            <>
              {author?.firstName.slice(0, 1)}
              {author?.lastName.slice(0, 1)}
            </>
          )}
        </div>
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
