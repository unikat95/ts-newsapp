import React from "react";

type ArticleTitleProps = {
  title: string | undefined;
  createdAt: Date | undefined;
};

export default function ArticleTitle({ title, createdAt }: ArticleTitleProps) {
  return (
    <div className="flex flex-col gap-2 pt-5">
      <h3 className="text-sm font-semibold text-tertiary-text">
        posted: {createdAt ? new Date(createdAt).toLocaleString() : undefined}
      </h3>
      <h1 className="text-4xl md:text-5xl text-secondary-text font-bold flex pb-5">
        {title}
      </h1>
    </div>
  );
}
