type MessagesItemsListProps = {
  incomingUnreadCount: number;
  sentUnreadCount: number;
};

export const createMessagesItemsList = ({
  incomingUnreadCount,
  sentUnreadCount,
}: MessagesItemsListProps) => [
  {
    id: 0,
    to: "/profile/messages/incoming-messages",
    unreadCount: incomingUnreadCount,
    title: "Incoming messages",
  },
  {
    id: 1,
    to: "/profile/messages/sent-messages",
    unreadCount: sentUnreadCount,
    title: "Sent messages",
  },
  {
    id: 2,
    to: "/profile/messages/send-message",
    title: "Send messages",
  },
];
