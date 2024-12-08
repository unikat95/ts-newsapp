import React, { useState } from "react";
import { ArticleProps, UserProps } from "../../../context/MainContextTypes";

type ArticleListItemProps = {
  article: ArticleProps;
  author: UserProps | undefined;
};

export default function ArticleListItem({
  article,
  author,
}: ArticleListItemProps) {
  const [openText, setOpenText] = useState(false);

  const handleOpenText = () => {
    setOpenText(!openText);
  };
  return (
    <>
      <div
        key={article.id}
        className="w-full flex flex-col justify-between border px-4 py-2 gap-5 cursor-pointer"
        onClick={handleOpenText}
      >
        <div className="flex justify-between">
          <h1>{article.title}</h1>
          <p>{author?.firstName}</p>
        </div>
      </div>
      {openText && <div className="border px-4 py-2">{article.text}</div>}
    </>
  );
}
