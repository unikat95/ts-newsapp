import React from "react";
import { ArticleCardProps } from "./ArticleCard";

export default function ArticleCardImage({ article }: ArticleCardProps) {
  return (
    <div className="w-full md:w-[12rem] h-[14rem] lg:w-[14rem] overflow-hidden rounded-xl">
      <img
        src={article.img}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-2 transition-transform"
      />
    </div>
  );
}
