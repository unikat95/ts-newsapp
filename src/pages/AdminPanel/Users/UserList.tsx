import React from "react";
import useMainContext from "../../../hooks/useMainContext";
import AdminPanelLoading from "../../../components/AdminPanel/AdminPanelLoading";
import useLoading from "../../../hooks/useLoading";

export default function UserList() {
  const { userList } = useMainContext();

  const loading = useLoading();
  if (loading) return <AdminPanelLoading />;

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
