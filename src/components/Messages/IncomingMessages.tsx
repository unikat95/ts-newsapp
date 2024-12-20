import React from "react";

import useMainContext from "../../hooks/useMainContext";
import MessagesList from "../MessagesList/MessagesList";

export default function IncomingMessages() {
  const { currentUser, messages } = useMainContext();

  const incomingMessages = messages
    ?.filter((msg) => msg.to === currentUser?.id)
    .sort(
      (a, b) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime()
    );

  return <MessagesList messages={incomingMessages} />;
}
