import React, { ChangeEvent, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import CTAButton from "../CTAButton/CTAButton";
import useMainContext from "../../hooks/useMainContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ArticleProps } from "../../context/MainContextTypes";

type CreateCommentProps = {
  article: ArticleProps;
};

export default function CreateComment({ article }: CreateCommentProps) {
  const { currentUser } = useMainContext();
  const [commentMsg, setCommentMsg] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentMsg(e.target.value);
  };

  const handleAddComment = async () => {
    if (currentUser) {
      try {
        const commentData = {
          id: uuidv4(),
          msg: commentMsg,
          author: currentUser.id,
          createdAt: new Date().toISOString(),
          likes: [],
          replies: [],
        };

        await updateDoc(doc(db, "articles", article.id), {
          comments: [...article.comments, commentData],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full bg-slate-50 h-auto flex flex-col justify-center items-start border p-5 gap-5">
      <div>Create comment:</div>
      <div className="w-full">
        <textarea
          name="comment"
          id="comment"
          placeholder="comment..."
          cols={30}
          rows={4}
          className="w-full h-auto bg-white outline-none resize-none p-3 border"
          value={commentMsg}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="w-full flex justify-end items-end">
        <CTAButton
          text="Add comment"
          variant="blue"
          onClick={handleAddComment}
        />
      </div>
    </div>
  );
}
