import React from "react";
import { UserProps } from "../../context/MainContextTypes";
import { Link } from "react-router-dom";

type ArticleAuthorProps = {
  author: UserProps | undefined;
};

export default function ArticleAuthor({ author }: ArticleAuthorProps) {
  return (
    <div className="w-auto flex justify-center">
      <Link
        to={`/user/${author?.id}`}
        className="flex flex-col gap-2 justify-center items-center group"
      >
        <div className="w-16 h-16 bg-zinc-500 flex justify-center items-center rounded-full text-2xl font-semibold text-white group-hover:brightness-125 transition-all duration-100">
          {author?.firstName.slice(0, 1)}
          {author?.lastName.slice(0, 1)}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-1">
            <p>{author?.firstName}</p>
            <p>{author?.lastName}</p>
          </div>
          <div>{author?.role}</div>
        </div>
      </Link>
    </div>
  );
}
