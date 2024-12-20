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
  w-full bg-white flex flex-col gap-5 rounded-lg shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] p-5
  ${author && "border-l-4 border-amber-400"}`}
    >
      {children}
    </div>
  );
}
