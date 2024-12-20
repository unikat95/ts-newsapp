import React from "react";

import { FaRegCommentDots, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import useMainContext from "../../hooks/useMainContext";
import { ArticleCardProps } from "./ArticleCard";

export default function ArticleCardStats({ article }: ArticleCardProps) {
  const { userList } = useMainContext();
  const author = userList?.find((user) => user.id === article.author);
  return (
    <div className="w-full flex justify-between items-end">
      <div className="text-sm text-slate-600 font-medium flex flex-col justify-start items-start xl:flex-row gap- xl:gap-5">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-1 text-tertiary-text">
          <div className="flex justify-center items-center gap-1">
            <FaUser size={12} />
            <p>Author:</p>
          </div>
          <Link
            to={`/users/user/${article.author}`}
            className="font-bold hover:underline"
          >
            {author?.firstName + " " + author?.lastName},
          </Link>
        </div>
        <div className="flex justify-center items-center gap-1 text-tertiary-text">
          <BiSolidCategoryAlt />
          <p>Category:</p>
          <p>{article.category}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-1 text-secondary-text">
            <AiFillLike size={20} className="mb-1" />
            {article.likes.length}
          </div>
          <div className="flex justify-center items-center gap-1 text-secondary-text">
            <FaRegCommentDots size={20} />
            {article.comments.length}
          </div>
        </div>
      </div>
    </div>
  );
}
