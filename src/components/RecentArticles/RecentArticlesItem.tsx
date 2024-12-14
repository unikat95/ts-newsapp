import React from "react";

import useMainContext from "../../hooks/useMainContext";
import { getCategoriesColor } from "../../Utilities/ThemeUtils";
import { Link } from "react-router-dom";

type RecentArticlesItemProps = {
  sortA: number;
  sortB: number;
};

export default function RecentArticlesItem({
  sortA,
  sortB,
}: RecentArticlesItemProps) {
  const { sortedArticles, userList } = useMainContext();

  return (
    <>
      {sortedArticles
        .map((art) => {
          const author = userList?.find((user) => user.id === art.author);
          return (
            <div
              className="w-full h-full bg-cover bg-center flex p-5"
              style={{ backgroundImage: `url("${art.img}")` }}
            >
              <div className="w-full h-full flex flex-col justify-end items-start text-white z-50 gap-4">
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  <p
                    className={`px-3 py-1 text-sm font-medium
                ${getCategoriesColor(art.category)}`}
                  >
                    {art.category}
                  </p>
                  <Link
                    to={`/articles/article/${art.id}`}
                    className="line-clamp-1 text-2xl font-bold hover:underline"
                  >
                    {art.title}
                  </Link>
                </div>
                <div className="w-full flex justify-between items-end">
                  <Link to={`/users/user/${art.author}`} className="text-sm">
                    {author?.firstName + " " + author?.lastName}
                  </Link>
                  <p className="text-sm text-nowrap">
                    {new Date(art.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })
        .slice(sortA, sortB)}
    </>
  );
}
