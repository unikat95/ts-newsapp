import { useEffect, useState } from "react";
import { MessagesProps } from "../context/MainContextTypes";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import useAuth from "./useAuth";

export default function useMessages() {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState<MessagesProps[] | null>(null);

  const incomingMessages = messages?.filter(
    (msg) => msg.to === currentUser?.id && !msg.readBy[currentUser.id]
  );
  const sentMessages = messages?.filter(
    (msg) => msg.from === currentUser?.id && !msg.readBy[currentUser.id]
  );

  const incomingUnreadCount = incomingMessages?.length || 0;
  const sentUnreadCount = sentMessages?.length || 0;

  const unreadMessages = messages?.filter((msg) => {
    if (msg.from === currentUser?.id) {
      return !msg.readBy[currentUser.id];
    } else if (msg.to === currentUser?.id) {
      return !msg.readBy[currentUser.id];
    }
    return false;
  });

  const unreadMessagesCount = unreadMessages?.length || 0;

  useEffect(() => {
    const messagesUnsubscribe = onSnapshot(
      collection(db, "messages"),
      (msgData) => {
        const messagesData: MessagesProps[] = [];
        msgData.forEach((message) => {
          messagesData.push(message.data() as MessagesProps);
        });

        setMessages(messagesData);
      }
    );

    return () => messagesUnsubscribe();
  }, []);
  return {
    messages,
    setMessages,
    incomingUnreadCount,
    sentUnreadCount,
    unreadMessagesCount,
  };
}
