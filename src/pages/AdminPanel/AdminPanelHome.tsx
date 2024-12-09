import React from "react";

import AdminPanelStatistics from "../../components/AdminPanel/AdminPanelStatistics";
import AdminPanelLastArticles from "../../components/AdminPanel/AdminPanelLastArticles";
import AdminPanelLastUsers from "../../components/AdminPanel/AdminPanelLastUsers";

export default function AdminPanelHome() {
  return (
    <div className="w-full h-full flex flex-col justify-between itece gap-5">
      <AdminPanelStatistics />
      <AdminPanelLastArticles />
      <AdminPanelLastUsers />
    </div>
  );
}
