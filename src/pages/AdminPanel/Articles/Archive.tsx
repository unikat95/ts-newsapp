import React from "react";
import useLoading from "../../../hooks/useLoading";
import AdminPanelLoading from "../../../components/AdminPanel/AdminPanelLoading";

export default function Archive() {
  const loading = useLoading();
  if (loading) return <AdminPanelLoading />;

  return <div>Archive</div>;
}
