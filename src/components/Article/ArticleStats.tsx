import React, { useState } from "react";

import { AiFillLike } from "react-icons/ai";
import { ArticleProps } from "../../context/MainContextTypes";
import useMainContext from "../../hooks/useMainContext";
import { doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { FaCommentDots } from "react-icons/fa";

type ArticleStatsProps = {
  article: ArticleProps;
};

export default function ArticleStats({ article }: ArticleStatsProps) {
  const { currentUser, handleLikePost } = useMainContext();
  const [liked, setLiked] = useState(
    Boolean(article.likes.find((like) => like.whoLiked === currentUser?.id))
  );
  const [likeLoading, setLikeLoading] = useState(false);
  const likeRef = doc(db, "articles", article.id);

  return (
    <div className="w-full flex justify-start md:justify-end items-end md:items-center gap-3">
      <div className="w-full flex justify-strart md:justify-end items-center gap-2">
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-1 text-blue-500">
            <AiFillLike size={16} className="mb-1" />
            <p className={`text-primary-text ${likeLoading && "animate-ping"}`}>
              {article.likes.length}
            </p>
          </div>
          <div className="flex justify-center items-center gap-1 text-orange-500">
            <FaCommentDots size={15} className="mb-1" />
            <p className="text-primary-text">{article.comments.length}</p>
          </div>
        </div>
      </div>
      {currentUser && (
        <div className="w-auto">
          <button
            onClick={() =>
              handleLikePost({
                currentUser,
                setLikeLoading,
                liked,
                setLiked,
                article,
                likeRef,
              })
            }
            disabled={likeLoading}
            className={`
            border border-blue-500 text-sm text-blue-500 px-3 py-1 flex justify-center items-center gap-1 disabled:cursor-wait
            ${liked && "bg-blue-500 text-white"}`}
          >
            Like <AiFillLike size={20} className="pb-1" />
          </button>
        </div>
      )}
    </div>
  );
}
