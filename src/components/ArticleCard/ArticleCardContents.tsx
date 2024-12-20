import React from "react";

import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser/lib/index";
import { ArticleCardProps } from "./ArticleCard";

export default function ArticleCardContents({ article }: ArticleCardProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <p className="text-xs text-tertiary-text font-medium">
        posted: {new Date(article.createdAt).toLocaleString()}
      </p>
      <Link
        to={`/articles/article/${article.id}`}
        className="text-2xl text-primary-text font-bold hover:underline line-clamp-2"
      >
        {article.title}
      </Link>
      <div className="line-clamp-4 md:line-clamp-2 text-secondary-text">
        {HTMLReactParser(article.text)}
      </div>
    </div>
  );
}
