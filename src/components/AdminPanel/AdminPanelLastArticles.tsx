import React from "react";
import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";

export default function AdminPanelLastArticles() {
  const { sortedArticles } = useMainContext();
  return (
    <>
      <h1 className="text-2xl font-semibold">Last Articles</h1>
      <div>
        <div className="w-full h-full flex flex-col gap-2">
          {sortedArticles
            .map((article) => (
              <Link
                to={`/articles/article/${article.id}`}
                key={article.id}
                className="w-full h-auto bg-white flex justify-between items-center rounded-lg overflow-hidden p-5 gap-5 group"
              >
                <div className="w-auto flex justify-center items-center gap-5">
                  <img
                    src={article.img}
                    alt=""
                    className="w-14 h-12 object-cover rounded-lg"
                  />
                  <h3 className="group-hover:underline line-clamp-1">
                    {article.title}
                  </h3>
                </div>
                <p className="text-nowrap text-sm font-semibold text-slate-500">
                  Added: {new Date(article.createdAt).toLocaleString()}
                </p>
              </Link>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </>
  );
}