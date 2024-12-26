import React from "react";

import useLoading from "../hooks/useLoading";
import APLoading from "../components/AdminPanel/APLoading";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import MostLikedArticles from "../components/MostLikedArticles/MostLikedArticles";
import HomeArticleList from "../components/HomeArticleList/HomeArticleList";
import TopUsers from "../components/TopUsers/TopUsers";
import PageContainer from "../components/PageContainer/PageContainer";

export default function Home() {
  const loading = useLoading();
  if (loading) return <APLoading />;

  return (
    <PageContainer>
      <RecentArticles />
      <HomeArticleList />
      <MostLikedArticles />
      <TopUsers />
    </PageContainer>
  );
}
