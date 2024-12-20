import React from "react";
import useMainContext from "../../hooks/useMainContext";
import ReplyItem from "./ReplyItem";
import { MessagesProps, UserProps } from "../../context/MainContextTypes";

type ReplyProps = {
  message: MessagesProps | undefined;
  author: UserProps | undefined;
};

export default function Reply({ message, author }: ReplyProps) {
  const { userList } = useMainContext();
  return (
    <div className="w-full flex flex-col justify-start items-end gap-5">
      {message?.replies.map((rep) => {
        const repAuthor = userList?.find((user) => user.id === rep.from);
        return (
          <ReplyItem
            key={rep.id}
            rep={rep}
            repAuthor={repAuthor}
            author={author}
          />
        );
      })}
    </div>
  );
}
