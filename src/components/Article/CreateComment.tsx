import React, { ChangeEvent, useState } from "react";

import useMainContext from "../../hooks/useMainContext";

import { ArticleProps } from "../../context/MainContextTypes";
import CommentForm from "../Comment/CommentForm";

type CreateCommentProps = {
  article: ArticleProps;
};

export default function CreateComment({ article }: CreateCommentProps) {
  const { currentUser, handleAddComment } = useMainContext();
  const [commentMsg, setCommentMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentMsg(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (commentMsg === "") return;
    setLoading(true);
    handleAddComment({
      currentUser,
      commentMsg,
      article,
      setCommentMsg,
      setLoading,
    });
  };

  return (
    <CommentForm
      text="Comment message:"
      msg={commentMsg}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
}
