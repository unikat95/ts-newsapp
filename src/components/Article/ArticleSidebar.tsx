import React, { SetStateAction } from "react";

import SidebarRecentArticles from "./SidebarRecentArticles";
import SidebarCategories from "./SidebarCategories";
import SidebarRecomendedArticles from "./SidebarRecommendedArticles";

type ArticleSidebarProps = {
  articleId: string;
  articleCat: string;
  setArticleLoading: React.Dispatch<SetStateAction<boolean>>;
};

export default function ArticleSidebar({
  articleId,
  articleCat,
  setArticleLoading,
}: ArticleSidebarProps) {
  return (
    <div className="w-full lg:w-3/5 xl:w-2/5 h-auto flex flex-col gap-10 justify-start items-start sticky top-[7.3rem]">
      <SidebarRecentArticles
        articleId={articleId}
        setArticleLoading={setArticleLoading}
      />
      <SidebarCategories />
      <SidebarRecomendedArticles
        articleId={articleId}
        articleCat={articleCat}
        setArticleLoading={setArticleLoading}
      />
    </div>
  );
}
