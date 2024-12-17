import React from "react";
import useLoading from "../hooks/useLoading";
import APLoading from "../components/AdminPanel/APLoading";
import SidebarRecentArticles from "../components/Article/SidebarRecentArticles";
import SidebarCategories from "../components/Article/SidebarCategories";
import RecentArticles from "../components/RecentArticles/RecentArticles";
import SidebarHeading from "../components/Article/SidebarHeading";
import useMainContext from "../hooks/useMainContext";
import ArticleCard from "../components/Article/ArticleCard";
import { Link } from "react-router-dom";

export default function Home() {
  const { sortedArticles } = useMainContext();

  const loading = useLoading();
  if (loading) return <APLoading />;

  return (
    <div className="w-full h-full flex-col justify-start items-start">
      <RecentArticles />
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
        <div className="w-full flex flex-col justify-start items-end gap-5">
          <SidebarHeading
            text="Other articles"
            color="yellow"
            border="border-yellow"
          />
          <div className="w-full flex flex-col gap-5">
            {sortedArticles
              .map((art) => <ArticleCard article={art} key={art.id} />)
              .slice(4, 9)}
          </div>
          <Link to="/articles" className="underline">
            See all articles
          </Link>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/5">
          <SidebarCategories />
          <SidebarRecentArticles />
        </div>
      </div>
    </div>
  );
}
