import React from "react";
import { ArticleProps, CommentProps } from "../../context/MainContextTypes";
import CommentReply from "./CommentReply";
import useMainContext from "../../hooks/useMainContext";
import CreateReply from "./CreateReply";

type CommentRepliesProps = {
  comment: CommentProps;
  openReply: boolean;
  openReplyForm: boolean;
  article: ArticleProps;
};

export default function CommentReplies({
  comment,
  openReply,
  openReplyForm,
  article,
}: CommentRepliesProps) {
  const { userList } = useMainContext();
  return (
    <>
      {openReply && comment.replies.length > 0 && (
        <div className="w-full flex flex-col justify-end items-end gap-3">
          {comment.replies.map((rep) => {
            const repAuthor = userList?.find((user) => user.id === rep.author);
            return (
              <CommentReply key={rep.id} rep={rep} repAuthor={repAuthor} />
            );
          })}
        </div>
      )}
      {openReplyForm && <CreateReply comment={comment} article={article} />}
    </>
  );
}
