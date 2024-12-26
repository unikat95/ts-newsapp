import { doc, setDoc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/firebase";
import { MessagesProps, UserProps } from "../context/MainContextTypes";
import { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export type SendMessageProps = {
  currentUser: UserProps | null;
  userId: string;
  title: string;
  message: string;
  setFormFields: (fields: {
    message: string;
    title: string;
    user: string;
    userId: string;
  }) => void;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  handleClearUser: () => void;
  setShowPopup: React.Dispatch<SetStateAction<boolean>>;
  setPopupMessage: (msg: string) => void;
  msg: string;
  navigate: NavigateFunction;
};

export type SendReplyProps = {
  message: MessagesProps | undefined;
  currentUser: UserProps | null;
  replyMessage: string;
  setReplyMessage: React.Dispatch<SetStateAction<string>>;
  setShowPopup: React.Dispatch<SetStateAction<boolean>>;
  setPopupMessage: (msg: string) => void;
  msg: string;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

export type MarkAsReadProps = {
  message: MessagesProps | undefined;
  currentUser: UserProps | null;
};

export const handleSendMessage = async ({
  currentUser,
  userId,
  title,
  message,
  setFormFields,
  handleClearUser,
  setLoading,
  setShowPopup,
  setPopupMessage,
  msg,
  navigate,
}: SendMessageProps) => {
  if (!userId || !title || !message) return;
  try {
    const messageId = uuidv4();
    const messageData = {
      id: messageId,
      from: currentUser?.id!,
      to: userId,
      title: title,
      message: message,
      sentAt: new Date().toISOString(),
      readBy: {
        [currentUser?.id!]: true,
        [userId]: false,
      },
      replies: [],
    };
    await setDoc(doc(db, "messages", messageId), messageData);
  } catch (error) {
    console.log(error);
  } finally {
    await new Promise((res) =>
      setTimeout(() => {
        res;
        setLoading(false);
        setFormFields({
          message: "",
          title: "",
          user: "",
          userId: "",
        });

        setShowPopup(true);
        setPopupMessage(msg);
        handleClearUser();
        navigate("/profile/messages/sent-messages");
      }, 1000)
    );
  }
};

export const handleSendReply = async ({
  message,
  currentUser,
  replyMessage,
  setReplyMessage,
  setShowPopup,
  setPopupMessage,
  msg,
  setLoading,
}: SendReplyProps) => {
  if (!replyMessage) return;
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

      await new Promise((res) =>
        setTimeout(() => {
          res;
          updateDoc(doc(db, "messages", message?.id), {
            replies,
            readBy: updatedReadBy,
          });
          setLoading(false);
          setShowPopup(true);
          setPopupMessage(msg);
          setReplyMessage("");
        }, 1000)
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export const handleMarkAsRead = async ({
  message,
  currentUser,
}: MarkAsReadProps) => {
  if (!message || !currentUser) return;

  if (message.readBy[currentUser.id]) return;

  try {
    const messageRef = doc(db, "messages", message.id);
    await updateDoc(messageRef, {
      [`readBy.${currentUser.id}`]: true,
    });
  } catch (error) {
    console.error("Error marking message as read:", error);
  }
};
