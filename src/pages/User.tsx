import React from "react";
import useMainContext from "../hooks/useMainContext";
import { useParams } from "react-router-dom";
import UserProfile from "../components/User/UserProfile/UserProfile";
import APLoading from "../components/AdminPanel/APLoading";
import useLoading from "../hooks/useLoading";

export default function User() {
  const { id } = useParams();
  const { userList } = useMainContext();
  const user = userList?.find((user) => user.id === id);

  const loader = useLoading();
  if (loader) return <APLoading />;

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-5">
      <UserProfile user={user} />
    </div>
  );
}
