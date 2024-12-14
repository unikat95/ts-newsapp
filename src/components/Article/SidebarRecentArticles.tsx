import React, { Dispatch, SetStateAction } from "react";

import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import SidebarHeading from "./SidebarHeading";

type RecentArticlesProps = {
  articleId?: string;
  setArticleLoading?: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarRecentArticles({
  articleId,
  setArticleLoading,
}: RecentArticlesProps) {
  const { sortedArticles } = useMainContext();
  const recentArticles = sortedArticles.filter((art) => art.id !== articleId);

  return (
    <div className="flex flex-col gap-5">
      <SidebarHeading text="Recent articles" />
      <div className="flex flex-wrap justify-start items-start">
        {recentArticles
          .map((art) => (
            <Link
              to={`/articles/article/${art.id}`}
              key={art.id}
              className="w-full flex justify-center items-center gap-2 border-b first:border-t py-3 group"
              onClick={() => setArticleLoading?.(true)}
            >
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-16 h-10 overflow-hidden">
                  <img
                    src={art.img}
                    alt="article_img"
                    className="w-full h-full"
                  />
                </div>
                <p className="w-full line-clamp-1 group-hover:underline">
                  {art.title}
                </p>
                <div className="w-auto">
                  <p className="text-sm">
                    {new Date(art.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))
          .slice(0, 3)}
      </div>
    </div>
  );
}
