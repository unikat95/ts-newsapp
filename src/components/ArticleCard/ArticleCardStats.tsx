import React from "react";

import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import useMainContext from "../../hooks/useMainContext";
import { ArticleCardProps } from "./ArticleCard";
import UserAvatar from "../User/UserAvatar/UserAvatar";

export default function ArticleCardStats({ article }: ArticleCardProps) {
  const { userList } = useMainContext();
  const author = userList?.find((user) => user.id === article.author);
  return (
    <div className="w-full flex justify-between items-end">
      <div className="text-sm text-secondary-text font-medium flex flex-col justify-start items-start xl:items-center xl:flex-row gap- xl:gap-5">
        <Link
          to={`/users/user/${article.author}`}
          className="flex justify-center items-center gap-2 font-semibold hover:underline"
        >
          <UserAvatar size="2xs" user={author} />
          {author?.firstName + " " + author?.lastName},
        </Link>
        <div className="flex justify-center items-center gap-1 text-tertiary-text">
          <BiSolidCategoryAlt />
          <p>Category:</p>
          <p>{article.category}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-1 text-blue-500">
            <AiFillLike size={16} className="mb-1" />
            <p className="text-primary-text">{article.likes.length}</p>
          </div>
          <div className="flex justify-center items-center gap-1 text-orange-500">
            <FaCommentDots size={15} className="mb-1" />
            <p className="text-primary-text">{article.comments.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
