import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

import MessageAuthor from "./MessageAuthor";
import MessageContents from "./MessageContents";
import MessageBody from "./MessageBody";

import Reply from "./Reply";
import ReplyForm from "./ReplyForm";
import useLoading from "../../hooks/useLoading";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Message() {
  const { currentUser, messages, userList, handleMarkAsRead } =
    useMainContext();
  const { id } = useParams();
  const message = messages?.find((msg) => msg.id === id);
  const author = userList?.find((user) => user.id === message?.from);

  useEffect(() => {
    if (message && currentUser) {
      handleMarkAsRead({ message, currentUser });
    }
  }, [message, currentUser]);

  const loading = useLoading();
  if (loading)
    return (
      <div className="w-full h-auto flex justify-center items-center p-5">
        <LoadingSpinner size={25} />
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-5">
      <MessageBody author={author}>
        <MessageAuthor author={author} message={message} />
        <MessageContents message={message} />
      </MessageBody>
      <Reply message={message} author={author} />
      <ReplyForm message={message} />
    </div>
  );
}
