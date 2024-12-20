import React, { useState } from "react";

import { FaCrown } from "react-icons/fa";
import {
  ArticleProps,
  CommentProps,
  UserProps,
} from "../../context/MainContextTypes";
import CommentInfo from "./CommentInfo";
import CommentAuthor from "./CommentAuthor";
import CommentReplies from "./CommentReplies";

type ArticleCommentProps = {
  comment: CommentProps;
  comAuthor: UserProps | undefined;
  author: UserProps | null | undefined;
  article: ArticleProps;
};

export default function Comment({
  comment,
  comAuthor,
  author,
  article,
}: ArticleCommentProps) {
  const [openReplyForm, setOpenReplyForm] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  const handleToggleReply = () => {
    setOpenReply(!openReply);
    setOpenReplyForm(false);
  };

  const handleToggleReplyForm = () => {
    setOpenReplyForm(!openReplyForm);
    setOpenReply(true);
  };

  return (
    <div className="w-full flex flex-col justify-start items-end gap-3">
      <div
        key={comment.id}
        className="w-full bg-white flex flex-col justify-center items-start p-5 rounded-xl shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] gap-3 relative"
      >
        <CommentAuthor comment={comment} comAuthor={comAuthor} />
        <p className="text-secondary-text">{comment.msg}</p>
        <CommentInfo
          comment={comment}
          handleToggleReply={handleToggleReply}
          handleToggleReplyForm={handleToggleReplyForm}
          openReply={openReply}
        />
        {comment.author === author?.id && (
          <span className="absolute -top-2 -left-2">
            <FaCrown
              size={26}
              className="bg-white text-amber-400 p-1 rounded-full border"
            />
          </span>
        )}
      </div>
      <CommentReplies
        comment={comment}
        openReply={openReply}
        openReplyForm={openReplyForm}
        article={article}
      />
    </div>
  );
}
