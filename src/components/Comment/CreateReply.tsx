import React, { ChangeEvent, useState } from "react";

import useMainContext from "../../hooks/useMainContext";

import { ArticleProps, CommentProps } from "../../context/MainContextTypes";
import CommentForm from "./CommentForm";

type CommentReplyFormProps = {
  comment: CommentProps;
  article: ArticleProps;
};

export default function CreateReply({
  comment,
  article,
}: CommentReplyFormProps) {
  const [replyMsg, setReplyMsg] = useState("");
  const { currentUser, handleAddReply } = useMainContext();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMsg(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleAddReply({ currentUser, replyMsg, article, comment, setReplyMsg });
  };

  return (
    <div className="w-[90%]">
      <CommentForm
        text="Reply message:"
        msg={replyMsg}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
