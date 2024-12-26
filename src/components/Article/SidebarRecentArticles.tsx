import React, { Dispatch, SetStateAction } from "react";

import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import SidebarHeading from "./SidebarHeading";
import { TbArticleFilled } from "react-icons/tb";

type RecentArticlesProps = {
  articleId?: string;
  setArticleLoading?: Dispatch<SetStateAction<boolean>>;
  length?: number;
};

export default function SidebarRecentArticles({
  articleId,
  setArticleLoading,
  length = 3,
}: RecentArticlesProps) {
  const { sortedArticles } = useMainContext();
  const recentArticles = sortedArticles.filter((art) => art.id !== articleId);

  return (
    <div className="w-full flex flex-col gap-5">
      <SidebarHeading text="Recent articles" Icon={TbArticleFilled} />
      <div className="w-full  flex flex-wrap justify-start items-start gap-1">
        {recentArticles
          .map((art) => (
            <Link
              to={`/articles/article/${art.id}`}
              key={art.id}
              className="w-full bg-white flex justify-center items-center gap-2 p-3 group rounded-xl shadow-[0_1px_30px_0_rgba(0,0,0,0.05)]"
              onClick={() => setArticleLoading?.(true)}
            >
              <div className="w-full flex justify-center items-center gap-2">
                <div className="w-16 h-10 overflow-hidden">
                  <img
                    src={art.img}
                    alt="article_img"
                    className="w-full h-full object-cover"
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
          .slice(0, length)}
      </div>
    </div>
  );
}
