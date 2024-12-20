import React from "react";
import { MessagesProps } from "../../context/MainContextTypes";

type MessagesListTitleProps = {
  msg: MessagesProps | undefined;
};

export default function MessagesListTitle({ msg }: MessagesListTitleProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
        Title
      </p>
      <p className="text-base line-clamp-1">{msg?.title}</p>
    </div>
  );
}
