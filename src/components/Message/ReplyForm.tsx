import React, { ChangeEvent, useState } from "react";
import useMainContext from "../../hooks/useMainContext";
import { MessagesProps } from "../../context/MainContextTypes";
import APHeading from "../AdminPanel/APHeading";
import FormLoader from "../FormLoader/FormLoader";
import Button from "../ui/Button/Button";

type ReplyFormProps = {
  message: MessagesProps | undefined;
};

export default function ReplyForm({ message }: ReplyFormProps) {
  const { currentUser, handleSendReply, setShowPopup, setPopupMessage } =
    useMainContext();
  const [replyMessage, setReplyMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyMessage(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    handleSendReply({
      message,
      currentUser,
      replyMessage,
      setReplyMessage,
      setShowPopup,
      setPopupMessage,
      msg: "Reply successfully sent",
      setLoading,
    });
  };

  return (
    <div className="w-full flex flex-col bg-white rounded-lg shadow-[0_1px_30px_0_rgba(0,0,0,0.05)] relative p-5 gap-5">
      <APHeading text="Send reply" />
      <form className="w-full flex flex-col justify-start items-end gap-2 rounded-lg">
        <textarea
          name="replyMessage"
          id="replyMessage"
          cols={30}
          rows={10}
          placeholder="reply message..."
          className="w-full px-3 py-2 border outline-1 outline-blue-500 rounded-md"
          onChange={handleInputChange}
          value={replyMessage}
        ></textarea>
        <Button
          variant="blue"
          onClick={handleSubmit}
          disabled={!replyMessage}
          text="Send reply"
        />
      </form>
      {loading && <FormLoader />}
    </div>
  );
}
