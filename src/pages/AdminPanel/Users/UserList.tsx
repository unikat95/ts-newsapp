import React from "react";
import useMainContext from "../../../hooks/useMainContext";

export default function UserList() {
  const { userList } = useMainContext();

  return (
    <div className="flex flex-col gap-2">
      {userList?.map((user) => (
        <div key={user.id} className="border px-4 py-2">
          {user.email}
        </div>
      ))}
    </div>
  );
}
