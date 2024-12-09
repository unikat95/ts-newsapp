import React from "react";
import useMainContext from "../../hooks/useMainContext";
import AdminPanelLastUser from "./AdminPanelLastUser";

export default function AdminPanelLastUsers() {
  const { sortedUsers } = useMainContext();

  return (
    <>
      <h1 className="text-2xl font-semibold">Last Users</h1>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-4 justify-start items-start gap-5">
        {sortedUsers
          ?.map((user) => <AdminPanelLastUser key={user.id} user={user} />)
          .slice(0, 4)}
      </div>
    </>
  );
}
