import React from "react";
import { MessagesProps } from "../../context/MainContextTypes";
import PageContainer from "../PageContainer/PageContainer";

type MessagesListDateProps = {
  msg: MessagesProps | undefined;
};

export default function MessagesListDate({ msg }: MessagesListDateProps) {
  return (
    <PageContainer>
      <p className="text-[0.6rem] text-tertiary-text font-bold uppercase">
        Date
      </p>
      <p className="text-sm text-nowrap">
        {msg && new Date(msg.sentAt).toLocaleString()}
      </p>
    </PageContainer>
  );
}
