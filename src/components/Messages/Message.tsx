import React, { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";
import { db } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import CTAButton from "../CTAButton/CTAButton";
import UserAvatar from "../User/UserAvatar/UserAvatar";

export default function Message() {
  const { currentUser, messages, userList } = useMainContext();
  const { id } = useParams();

  const message = messages?.find((msg) => msg.id === id);
  const [replyMessage, setReplyMessage] = useState("");
  const author = userList?.find((user) => user.id === message?.from);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessage(e.target.value);
  };

  const markAsRead = async () => {
    if (!message || !currentUser) return;

    if (message.readBy[currentUser.id]) return;

    try {
      const messageRef = doc(db, "messages", message.id);
      await updateDoc(messageRef, {
        [`readBy.${currentUser.id}`]: true,
      });
      console.log("Message marked as read.");
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  useEffect(() => {
    if (message && currentUser) {
      markAsRead();
    }
  }, [message, currentUser]);

  const handleSubmit = async () => {
    if (message) {
      try {
        const replyData = {
          id: uuidv4(),
          from: currentUser?.id,
          message: replyMessage,
          sentAt: new Date().toISOString(),
        };

        const replies = [...message.replies, replyData];

        const otherUser =
          message.from === currentUser?.id ? message.to : message.from;
        const updatedReadBy = { ...message.readBy, [otherUser]: false };

        await updateDoc(doc(db, "messages", message?.id), {
          replies,
          readBy: updatedReadBy,
        });
        setReplyMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div
        className={`
        w-full bg-white flex flex-col gap-5 rounded-lg shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] p-5
        ${author && "border-l-4 border-amber-400"}`}
      >
        <div className="flex justify-start items-center gap-2">
          <UserAvatar size="2xs" user={author} />
          <p className="text-sm font-semibold text-tertiary-text">
            {author?.firstName + " " + author?.lastName},
          </p>
          <p className="text-xs font-semibold text-tertiary-text">
            {message?.sentAt && new Date(message?.sentAt).toLocaleString()}
          </p>
        </div>
        <h1>{message?.title}</h1>
        <div>{message?.message}</div>
      </div>
      <div className="w-full flex flex-col justify-start items-end gap-5">
        {message?.replies.map((rep) => {
          const repAuthor = userList?.find((user) => user.id === rep.from);
          return (
            <div
              key={rep.id}
              className={`flex flex-col rounded-lg p-5 gap-5 shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] ${
                repAuthor === author
                  ? "w-full border-l-4 border-amber-400"
                  : "w-[90%] border-l-4 border-blue-500"
              }`}
            >
              <div className="flex justify-start items-center gap-2">
                <UserAvatar size="xs" user={repAuthor} />
                <p className="text-sm font-semibold text-tertiary-text">
                  {author?.firstName + " " + author?.lastName}
                </p>
                <p className="text-xs font-semibold text-tertiary-text">
                  {message?.sentAt && new Date(rep?.sentAt).toLocaleString()}
                </p>
              </div>
              <div>{rep.message}</div>
            </div>
          );
        })}
      </div>
      <form>
        <div>Send reply:</div>
        <textarea
          name="replyMessage"
          id="replyMessage"
          cols={30}
          rows={10}
          placeholder="reply message..."
          className="w-full border p-5"
          onChange={handleInputChange}
          value={replyMessage}
        ></textarea>
        <CTAButton
          text="Send reply"
          variant="blue"
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
