import React from "react";

import AdminPanelStatistics from "../../components/AdminPanel/AdminPanelStatistics";
import AdminPanelLastArticles from "../../components/AdminPanel/AdminPanelLastArticles";
import AdminPanelLastUsers from "../../components/AdminPanel/AdminPanelLastUsers";
import useLoading from "../../hooks/useLoading";
import AdminPanelLoading from "../../components/AdminPanel/AdminPanelLoading";

export default function AdminPanelHome() {
  const loading = useLoading();

  if (loading) return <AdminPanelLoading />;

  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-5 p-5 overflow-auto">
      <AdminPanelStatistics />
      <AdminPanelLastArticles />
      <AdminPanelLastUsers />
    </div>
  );
}
