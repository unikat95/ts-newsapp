import React, { ChangeEvent, useState } from "react";
import CTAButton from "../CTAButton/CTAButton";
import useMainContext from "../../hooks/useMainContext";
import { MessagesProps } from "../../context/MainContextTypes";

type ReplyFormProps = {
  message: MessagesProps | undefined;
};

export default function ReplyForm({ message }: ReplyFormProps) {
  const { currentUser, handleSendReply } = useMainContext();
  const [replyMessage, setReplyMessage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessage(e.target.value);
  };

  const handleSubmit = async () => {
    handleSendReply({ message, currentUser, replyMessage, setReplyMessage });
  };

  return (
    <form>
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
      <CTAButton text="Send reply" variant="blue" handleSubmit={handleSubmit} />
    </form>
  );
}
