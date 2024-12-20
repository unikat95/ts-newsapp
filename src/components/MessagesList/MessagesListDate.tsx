import React from "react";
import { MessagesProps } from "../../context/MainContextTypes";

type MessagesListDateProps = {
  msg: MessagesProps | undefined;
};

export default function MessagesListDate({ msg }: MessagesListDateProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
        Date
      </p>
      <p className="text-sm text-nowrap">
        {msg && new Date(msg.sentAt).toLocaleString()}
      </p>
    </div>
  );
}
