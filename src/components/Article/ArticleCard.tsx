import React from "react";

import { FaUser, FaRegCommentDots } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";

import HTMLReactParser from "html-react-parser/lib/index";
import { Link } from "react-router-dom";
import { ArticleProps } from "../../context/MainContextTypes";
import useMainContext from "../../hooks/useMainContext";

type ArticleCardProps = {
  article: ArticleProps;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { userList } = useMainContext();
  const author = userList?.find((user) => user.id === article.author);

  return (
    <div
      key={article.id}
      className="w-full grid grid-cols-1 md:grid-cols-[auto_1fr] border-b pb-5 gap-5 group"
    >
      <div className="w-full md:w-[16rem] h-[14rem] overflow-hidden">
        <img
          src={article.img}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-2 transition-transform"
        />
      </div>
      <div className="w-full flex flex-col justify-between items-start gap-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-xs text-tertiary-text font-medium">
            posted: {new Date(article.createdAt).toLocaleString()}
          </p>
          <Link
            to={`/articles/article/${article.id}`}
            className="text-2xl text-primary-text font-bold hover:underline line-clamp-2"
          >
            {article.title}
          </Link>
          <div className="line-clamp-4 md:line-clamp-3 text-secondary-text">
            {HTMLReactParser(article.text)}
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
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
                {article.likes.length}
                <AiFillLike className="mb-1" />
              </div>
              <div className="flex justify-center items-center gap-1 text-secondary-text">
                {article.comments.length}
                <FaRegCommentDots />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
