import React from "react";
import { MessagesProps } from "../../context/MainContextTypes";

type MessageBodyProps = {
  message: MessagesProps | undefined;
};

export default function MessageContents({ message }: MessageBodyProps) {
  return (
    <>
      <h1 className="text-lg font-semibold text-primary-text">
        {message?.title}
      </h1>
      <p className="text-secondary-text">{message?.message}</p>
    </>
  );
}
