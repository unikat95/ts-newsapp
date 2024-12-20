import React from "react";
import { UserProps } from "../../context/MainContextTypes";

type MessageBodyProps = {
  author: UserProps | undefined;
  children: React.ReactNode;
};

export default function MessageBody({ author, children }: MessageBodyProps) {
  return (
    <div
      className={`
  w-full bg-white flex flex-col gap-5 rounded-lg main-shadow p-5
  ${author && "border-l-4 border-amber-400"}`}
    >
      {children}
    </div>
  );
}
