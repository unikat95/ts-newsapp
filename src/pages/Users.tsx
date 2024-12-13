import React from "react";
import APLoading from "../components/AdminPanel/APLoading";
import useLoading from "../hooks/useLoading";

export default function Users() {
  const loading = useLoading();
  if (loading) return <APLoading />;

  return <div>Users</div>;
}
