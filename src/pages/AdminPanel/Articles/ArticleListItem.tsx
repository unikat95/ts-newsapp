import React from "react";

import { ArticleProps, UserProps } from "../../../context/MainContextTypes";
import { Link } from "react-router-dom";

type ArticleListItemProps = {
  article: ArticleProps;
  author: UserProps | undefined;
};

export default function ArticleListItem({
  article,
  author,
}: ArticleListItemProps) {
  return (
    <>
      <Link
        to={`/articles/article/${article.id}`}
        key={article.id}
        className="w-full flex flex-col justify-between border px-4 py-2 gap-5 cursor-pointer"
      >
        <div className="flex justify-between">
          <h1>{article.title}</h1>
          <p>{author?.firstName}</p>
          <p>{new Date(article.createdAt).toLocaleString()}</p>
        </div>
      </Link>
    </>
  );
}
