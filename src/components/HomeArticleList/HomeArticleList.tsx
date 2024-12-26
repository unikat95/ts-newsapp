import React from "react";

import { Link } from "react-router-dom";

import SidebarHeading from "../Article/SidebarHeading";
import SidebarCategories from "../Article/SidebarCategories";
import SidebarRecentArticles from "../Article/SidebarRecentArticles";
import ArticleCard from "../ArticleCard/ArticleCard";
import useMainContext from "../../hooks/useMainContext";

import { LuExternalLink } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";

export default function HomeArticleList() {
  const { sortedArticles } = useMainContext();

  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
      <div className="w-full flex flex-col justify-start items-end gap-5">
        <SidebarHeading
          text="Other articles"
          color="green"
          Icon={MdOutlineArticle}
        />
        <div className="w-full flex flex-col gap-5">
          {sortedArticles
            .map((art) => <ArticleCard article={art} key={art.id} />)
            .slice(4, 8)}
        </div>
        <div className="w-full flex justify-between items-center">
          <Link
            to="/articles"
            className="bg-white flex justify-center items-center px-4 py-3 rounded-md hover:underline main-shadow gap-1"
          >
            See all articles <LuExternalLink />
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col lg:w-3/5 xl:w-2/5 gap-5">
        <SidebarRecentArticles length={5} />
        <SidebarCategories />
      </div>
    </div>
  );
}
