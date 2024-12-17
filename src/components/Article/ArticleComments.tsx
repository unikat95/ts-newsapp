import React from "react";

import { ArticleProps, UserProps } from "../../context/MainContextTypes";
import CreateComment from "./CreateComment";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";

import { FaCrown, FaReply } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

type ArticleCommentsProps = {
  author: UserProps | null | undefined;
  article: ArticleProps;
};

export default function ArticleComments({
  author,
  article,
}: ArticleCommentsProps) {
  const { userList } = useMainContext();

  return (
    <>
      <div className="w-full flex flex-col justify-start items-start gap-10 pt-5">
        <h3>Comments:</h3>
        {article.comments.map((com) => {
          const comAuthor = userList?.find((user) => user.id === com.author);
          return (
            <div
              key={com.id}
              className="w-full flex flex-col justify-center items-start border p-5 gap-5 relative"
            >
              <Link
                to={`/users/user/${com.author}`}
                className="w-auto flex justify-start items-center gap-2 font-medium"
              >
                <UserAvatar user={comAuthor} size="xs" />
                {comAuthor?.firstName + " " + comAuthor?.lastName}
              </Link>
              <p className="text-secondary-text">{com.msg}</p>
              <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center gap-2 text-tertiary-text">
                  <p className="text-xs font-medium border-r-2 pr-2 py-1">
                    {new Date(com.createdAt).toLocaleString()}
                  </p>
                  <button className="text-xs font-medium flex justify-center items-center gap-1 hover:underline">
                    <AiOutlineComment size={20} />0 replies <IoIosArrowDown />
                  </button>
                </div>
                <button className="flex justify-center items-center gap-1 underline text-sm">
                  Reply <FaReply />
                </button>
              </div>
              {com.author === author?.id && (
                <span className="absolute -top-2 -left-2">
                  <FaCrown
                    size={26}
                    className="bg-white text-amber-400 p-1 rounded-full border"
                  />
                </span>
              )}
            </div>
          );
        })}
      </div>
      <CreateComment article={article} />
    </>
  );
}
