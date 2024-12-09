import React from "react";
import useMainContext from "../hooks/useMainContext";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const { userList } = useMainContext();
  const user = userList?.find((user) => user.id === id);

  return (
    <div>
      {user?.firstName} {user?.lastName}
    </div>
  );
}
