import React from "react";

import { ArticleProps } from "../../context/MainContextTypes";
import ArticleCardStats from "./ArticleCardStats";
import ArticleCardContents from "./ArticleCardContents";
import ArticleCardImage from "./ArticleCardImage";

export type ArticleCardProps = {
  article: ArticleProps;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div
      key={article.id}
      className="w-full bg-white grid grid-cols-1 md:grid-cols-[auto_1fr]  gap-5 group rounded-xl overflow-hidden main-shadow"
    >
      <ArticleCardImage article={article} />
      <div className="w-full flex flex-col justify-between items-start gap-3 py-5 pr-5">
        <ArticleCardContents article={article} />
        <ArticleCardStats article={article} />
      </div>
    </div>
  );
}
