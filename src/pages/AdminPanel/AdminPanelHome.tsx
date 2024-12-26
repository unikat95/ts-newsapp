import React from "react";

import useLoading from "../../hooks/useLoading";
import APStatistics from "../../components/AdminPanel/APStatistics";
import APLastArticles from "../../components/AdminPanel/APLastArticles";
import APLastUsers from "../../components/AdminPanel/APLastUsers";
import APLoading from "../../components/AdminPanel/APLoading";

export default function AdminPanelHome() {
  const loading = useLoading();

  if (loading) return <APLoading />;

  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-start items-start gap-5 p-5 overflow-auto">
      <APStatistics />
      <APLastArticles />
      <APLastUsers />
    </div>
  );
}
