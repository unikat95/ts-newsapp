import React from "react";

type ArticleTitleProps = {
  title: string;
};

export default function ArticleTitle({ title }: ArticleTitleProps) {
  return <h1 className="text-4xl font-semibold flex">{title}</h1>;
}
