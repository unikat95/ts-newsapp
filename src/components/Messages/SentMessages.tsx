import React from "react";

import useMainContext from "../../hooks/useMainContext";
import MessagesList from "../MessagesList/MessagesList";

export default function SentMessages() {
  const { currentUser, messages } = useMainContext();

  const sentMessages = messages
    ?.filter((msg) => msg.from === currentUser?.id)
    .sort(
      (a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()
    );

  return <MessagesList messages={sentMessages} />;
}
