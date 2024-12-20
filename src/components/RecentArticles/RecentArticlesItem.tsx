import React from "react";

import useMainContext from "../../hooks/useMainContext";
import { getCategoriesColor } from "../../utils/ThemeUtils";
import { Link } from "react-router-dom";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { FaCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

type RecentArticlesItemProps = {
  sortA: number;
  sortB: number;
};

export default function RecentArticlesItem({
  sortA,
  sortB,
}: RecentArticlesItemProps) {
  const { sortedArticles, userList, setCategoryToDisplay } = useMainContext();

  return (
    <>
      {sortedArticles
        .map((art, index) => {
          const author = userList?.find((user) => user.id === art.author);
          return (
            <div
              key={art.id}
              className="w-full h-full bg-cover bg-center flex p-5 group"
              style={{ backgroundImage: `url("${art.img}")` }}
            >
              <div className="w-full h-full flex flex-col justify-end items-start text-white z-50 gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <Link
                    to="/articles"
                    className={`px-3 py-1 text-sm font-medium rounded-md
                ${getCategoriesColor(art.category)}`}
                    onClick={() => setCategoryToDisplay(art.category)}
                  >
                    {art.category}
                  </Link>
                  <Link
                    to={`/articles/article/${art.id}`}
                    className={`${
                      index === 0
                        ? "line-clamp-2 text-4xl"
                        : index > 1
                        ? "text-2xl line-clamp-1"
                        : "text-3xl line-clamp-2"
                    }
                    font-medium hover:underline`}
                  >
                    {art.title}
                  </Link>
                </div>
                <div className="w-full flex justify-between items-end">
                  <Link
                    to={`/users/user/${art.author}`}
                    className="text-sm line-clamp-1 flex justify-center items-center gap-2 hover:underline"
                  >
                    <UserAvatar size="xs" user={author} />
                    {author?.firstName}
                  </Link>

                  <div className="flex justify-center items-center gap-3   text-sm">
                    <p className="flex justify-center items-center gap-1">
                      <AiFillLike size={18} />
                      {art.likes.length}
                    </p>
                    <p className="flex justify-center items-center gap-1">
                      <FaCommentDots size={18} />
                      {art.comments.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        .slice(sortA, sortB)}
    </>
  );
}
