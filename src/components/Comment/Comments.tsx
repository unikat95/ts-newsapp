import React from "react";

import { ArticleProps, UserProps } from "../../context/MainContextTypes";
import useMainContext from "../../hooks/useMainContext";
import CreateComment from "../Article/CreateComment";
import Comment from "./Comment";

type ArticleCommentsProps = {
  author: UserProps | null | undefined;
  article: ArticleProps;
};

export default function Comments({ author, article }: ArticleCommentsProps) {
  const { userList, currentUser } = useMainContext();

  return (
    <div className="w-full flex flex-col gap-5">
      <h3>Comments:</h3>
      <div className="w-full flex flex-col justify-start items-end gap-3">
        {article.comments.length ? (
          article.comments.map((com) => {
            const comAuthor = userList?.find((user) => user.id === com.author);
            return (
              <Comment
                key={com.id}
                comment={com}
                comAuthor={comAuthor}
                author={author}
                article={article}
              />
            );
          })
        ) : (
          <div className="w-full flex justify-center items-center">
            No one has commented on this article yet.
          </div>
        )}
      </div>
      {currentUser && <CreateComment article={article} />}
    </div>
  );
}
