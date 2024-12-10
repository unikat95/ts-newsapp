import React, { ChangeEvent, useEffect, useState } from "react";

import HTMLReactParser from "html-react-parser/lib/index";

import useMainContext from "../hooks/useMainContext";
import AdminPanelHeader from "../components/AdminPanel/AdminPanelHeader";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

import { ArticleCategoryList } from "../components/ArticleCategories/ArticleCategoriesList";
import { Link } from "react-router-dom";
import ArticleCard from "../components/Article/ArticleCard";

export default function Articles() {
  const { sortedArticles } = useMainContext();
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const [artLoading, setArtLoading] = useState(true);

  const sortedByCategory = sortedArticles.filter(
    (art) => art.category === currentCategory
  );

  useEffect(() => {
    if (artLoading) {
      const timeout = setTimeout(() => setArtLoading(false), 300);

      return () => clearTimeout(timeout);
    }
  }, [artLoading]);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
    setArtLoading(true);
  };

  const articlesToDisplay =
    currentCategory !== "" ? sortedByCategory : sortedArticles;

  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
      <div className="w-full flex justify-between items-center">
        <AdminPanelHeader text="Article list" />
        <select
          name="category"
          onChange={handleCategoryChange}
          className="w-auto bg-zinc-900 text-white border border-r-[12px] border-zinc-900 px-3 py-2 outline-none rounded-md"
          value={currentCategory}
        >
          <option value="">All categories</option>
          {ArticleCategoryList.map((cat) => (
            <option key={cat.id} value={cat.value}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      {!artLoading ? (
        <>
          {articlesToDisplay.length <= 0 ? (
            <div className="w-full flex justify-start items-start">
              There are no posts in this category.
            </div>
          ) : (
            articlesToDisplay.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </>
      ) : (
        <div className="w-full h-auto flex justify-center items-center p-5">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
}
