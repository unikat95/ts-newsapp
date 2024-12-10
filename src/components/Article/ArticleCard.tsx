import HTMLReactParser from "html-react-parser/lib/index";
import React from "react";
import { Link } from "react-router-dom";
import { ArticleProps } from "../../context/MainContextTypes";

type ArticleCardProps = {
  article: ArticleProps;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div
      key={article.id}
      className="w-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5 border-b pb-5"
    >
      <div className="w-full md:w-[16rem] overflow-hidden rounded-xl">
        <img src={article.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col justify-between items-start gap-3">
        <Link
          to={`/articles/article/${article.id}`}
          className="text-2xl font-semibold hover:underline"
        >
          {article.title}
        </Link>
        <div className="line-clamp-2 text-slate-800">
          {HTMLReactParser(article.text)}
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-sm text-slate-600 font-medium">
            posted: {new Date(article.createdAt).toLocaleString()}
          </p>
          <div className="bg-blue-400 text-white px-2 py-1 rounded-md">
            {article.category}
          </div>
        </div>
      </div>
    </div>
  );
}
