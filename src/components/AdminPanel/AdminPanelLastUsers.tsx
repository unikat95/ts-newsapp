import React from "react";
import useMainContext from "../../hooks/useMainContext";
import AdminPanelLastUser from "./AdminPanelLastUser";
import AdminPanelHeader from "./AdminPanelHeader";

export default function AdminPanelLastUsers() {
  const { sortedUsers } = useMainContext();

  return (
    <>
      <AdminPanelHeader text="Last Users" />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-start items-start gap-5">
        {sortedUsers
          ?.map((user) => <AdminPanelLastUser key={user.id} user={user} />)
          .slice(0, 4)}
      </div>
    </>
  );
}
