import { useEffect, useState } from "react";
import { MessagesProps } from "../context/MainContextTypes";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export default function useMessages() {
  const [messages, setMessages] = useState<MessagesProps[] | null>(null);

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
  return { messages, setMessages };
}
