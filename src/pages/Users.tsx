import React from "react";

import UserList from "./AdminPanel/Users/UserList";

export default function Users() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-5">
      <UserList />
    </div>
  );
}
