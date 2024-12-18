import React from "react";

import { AiOutlineComment } from "react-icons/ai";
import { FaReply } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CommentProps } from "../../context/MainContextTypes";

type ArticleCommentInfoProps = {
  comment: CommentProps;
  handleToggleReply: () => void;
  handleToggleReplyForm: () => void;
  openReply: boolean;
};

export default function CommentInfo({
  comment,
  handleToggleReply,
  handleToggleReplyForm,
  openReply,
}: ArticleCommentInfoProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 text-tertiary-text">
        <p className="text-xs font-medium border-r-2 pr-2 py-1">
          {new Date(comment.createdAt).toLocaleString()}
        </p>
        <button
          className="text-xs font-medium flex justify-center items-center gap-1 hover:underline"
          onClick={handleToggleReply}
        >
          <AiOutlineComment size={20} />
          {comment.replies.length} replies{" "}
          <IoIosArrowDown className={`${openReply && "rotate-180"}`} />
        </button>
      </div>
      <button
        className="flex justify-center items-center gap-1 underline text-sm"
        onClick={handleToggleReplyForm}
      >
        Reply <FaReply />
      </button>
    </div>
  );
}
