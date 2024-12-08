import React from "react";
import useMainContext from "../../../hooks/useMainContext";
import ArticleListItem from "./ArticleListItem";

export default function ArticleList() {
  const { articles, userList } = useMainContext();

  return (
    <div className="w-full flex flex-col gap-2">
      {articles.map((article) => {
        const author = userList?.find((user) => user.id === article.author);
        return (
          <ArticleListItem key={article.id} article={article} author={author} />
        );
      })}
    </div>
  );
}
