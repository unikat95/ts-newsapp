import React from "react";

import MessageAuthor from "./MessageAuthor";
import { RepliesProps, UserProps } from "../../context/MainContextTypes";

type ReplyProps = {
  rep: RepliesProps | undefined;
  repAuthor: UserProps | undefined;
  author: UserProps | undefined;
};

export default function ReplyItem({ rep, repAuthor, author }: ReplyProps) {
  return (
    <div
      key={rep?.id}
      className={`flex flex-col rounded-lg p-5 gap-5 main-shadow ${
        repAuthor === author
          ? "w-full border-l-4 border-amber-400"
          : "w-[90%] border-l-4 border-blue-500"
      }`}
    >
      <MessageAuthor author={repAuthor} message={rep} />
      <div>{rep?.message}</div>
    </div>
  );
}
