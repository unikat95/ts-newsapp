import React, { useEffect, useState } from "react";

import useMainContext from "../../../hooks/useMainContext";
import ArticleListItem from "./ArticleListItem";
import useLoading from "../../../hooks/useLoading";
import AdminPanelLoading from "../../../components/AdminPanel/AdminPanelLoading";
import AdminPanelHeader from "../../../components/AdminPanel/AdminPanelHeader";
import AdminPanelArticleSearch from "../../../components/AdminPanel/AdminPanelArticleSearch";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

export default function ArticleList() {
  const { sortedArticles } = useMainContext();
  const [artLoading, setArtLoading] = useState(false);
  const [articlesToDisplay, setArticlesToDisplay] = useState(sortedArticles);

  useEffect(() => {
    setArtLoading(true);
    const timeout = setTimeout(() => setArtLoading(false), 400);

    return () => clearTimeout(timeout);
  }, [articlesToDisplay]);

  const loading = useLoading();
  if (loading) return <AdminPanelLoading />;

  const handleArticleDelete = (articleId: string) => {
    setArticlesToDisplay((prevArticles) =>
      prevArticles.filter((article) => article.id !== articleId)
    );
  };

  return (
    <>
      <div className="w-full h-full bg-slate-200 flex flex-col gap-2 p-5">
        <AdminPanelHeader text="All articles" />
        <AdminPanelArticleSearch setArticlesToDisplay={setArticlesToDisplay} />
        <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-xl p-5 overflow-auto gap-1">
          {!artLoading ? (
            <>
              {articlesToDisplay.length === 0
                ? "There is no articles do display"
                : articlesToDisplay
                    .map((article) => (
                      <ArticleListItem
                        key={article.id}
                        article={article}
                        onDelete={handleArticleDelete}
                      />
                    ))
                    .slice(0, 5)}
            </>
          ) : (
            <div className="w-full h-auto flex justify-center items-center p-5">
              <LoadingSpinner size={20} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
