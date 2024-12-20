import React from "react";

type MessagesListNotificationProps = {
  isRead: boolean;
};

export default function MessagesListNotification({
  isRead,
}: MessagesListNotificationProps) {
  return (
    <>
      {!isRead && (
        <span className="absolute right-1 top-1 bg-lime-300 rounded-full size-3 flex justify-center items-center z-[9] animate-pulse"></span>
      )}
    </>
  );
}
