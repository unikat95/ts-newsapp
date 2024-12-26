import React from "react";
import { NavLink } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

export default function FooterLatestArticles() {
  const { sortedArticles, setArticleLoading } = useMainContext();
  return (
    <nav className="w-full flex flex-col gap-4">
      <h2 className="text-base text-slate-200">Latest articles</h2>
      <ul className="w-full flex flex-col gap-2 pl-5 list-disc">
        {sortedArticles
          .map((art) => (
            <li key={art.id} className="text-slate-200 hover:underline">
              <NavLink
                to={`/articles/article/${art.id}`}
                className="line-clamp-1"
                onClick={() => setArticleLoading?.(true)}
              >
                {art.title}
              </NavLink>
            </li>
          ))
          .slice(0, 4)}
      </ul>
    </nav>
  );
}
