import React from "react";

import useMainContext from "../../hooks/useMainContext";

import { FaNewspaper, FaUsers } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

import AdminPanelStatisticsItem from "./AdminPanelStatisticsItem";
import AdminPanelUserCard from "./AdminPanelUserCard";

export default function AdminPanelStatistics() {
  const { articles, userList } = useMainContext();
  return (
    <>
      <h1 className="text-2xl font-semibold">Welcome Back!</h1>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <AdminPanelUserCard />
        <AdminPanelStatisticsItem
          text="Total posts"
          Icon={FaNewspaper}
          color="rgb(59 130 246 / var(--tw-text-opacity, 1))"
        >
          {articles.length}
        </AdminPanelStatisticsItem>
        <AdminPanelStatisticsItem
          text="Total users"
          Icon={FaUsers}
          color="rgb(248 113 113 / var(--tw-text-opacity, 1))"
        >
          {userList?.length}
        </AdminPanelStatisticsItem>
        <AdminPanelStatisticsItem
          text="Comments"
          Icon={FaQuoteLeft}
          color="rgb(234 179 8 / var(--tw-text-opacity, 1))"
        >
          {articles.length}
        </AdminPanelStatisticsItem>
      </div>
    </>
  );
}
