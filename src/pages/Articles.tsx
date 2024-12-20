import React, { ChangeEvent, useEffect, useState } from "react";

import useMainContext from "../hooks/useMainContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

import ArticleCard from "../components/ArticleCard/ArticleCard";
import APHeading from "../components/AdminPanel/APHeading";
import useLoading from "../hooks/useLoading";
import APLoading from "../components/AdminPanel/APLoading";
import ArticlesCategory from "../components/ArticlesCategory/ArticlesCategory";

export default function Articles() {
  const { sortedArticles, categoryToDisplay } = useMainContext();
  const [currentCategory, setCurrentCategory] =
    useState<string>(categoryToDisplay);

  const [artLoading, setArtLoading] = useState(true);

  const sortedByCategory = sortedArticles.filter(
    (art) => art.category === currentCategory
  );

  useEffect(() => {
    if (artLoading) {
      const timeout = setTimeout(() => setArtLoading(false), 500);

      return () => clearTimeout(timeout);
    }
  }, [artLoading]);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
    setArtLoading(true);
  };

  const articlesToDisplay =
    currentCategory !== "" ? sortedByCategory : sortedArticles;

  const loading = useLoading();
  if (loading) return <APLoading />;

  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-5">
      <div className="w-full flex justify-between items-center">
        <APHeading text="Article list" />
        <ArticlesCategory
          currentCategory={currentCategory}
          handleCategoryChange={handleCategoryChange}
        />
      </div>
      {!artLoading ? (
        <>
          {articlesToDisplay.length <= 0 ? (
            <div className="w-full flex justify-start items-start">
              There are no articles in this category.
            </div>
          ) : (
            articlesToDisplay.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </>
      ) : (
        <div className="w-full h-auto flex justify-center items-center p-5">
          <LoadingSpinner size={24} />
        </div>
      )}
    </div>
  );
}
