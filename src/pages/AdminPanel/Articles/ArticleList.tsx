import React, { useState } from "react";

import useMainContext from "../../../hooks/useMainContext";
import useLoading from "../../../hooks/useLoading";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import APLoading from "../../../components/AdminPanel/APLoading";
import APSearch from "../../../components/AdminPanel/APSearch";
import APArticleDropdown from "../../../components/AdminPanel/APArticleDropdown";
import { debounce } from "lodash";
import ListItem from "../../../components/ListItem/ListItem";
import APHeading from "../../../components/AdminPanel/APHeading";

export default function ArticleList() {
  const { sortedArticles } = useMainContext();
  const [artLoading, setArtLoading] = useState(false);
  const [articlesToDisplay, setArticlesToDisplay] = useState(sortedArticles);

  const loading = useLoading();
  if (loading || !sortedArticles) return <APLoading />;

  const handleArticleDelete = async (articleId: string) => {
    setArtLoading(true);
    setArticlesToDisplay((prevArticles) =>
      prevArticles.filter((article) => article.id !== articleId)
    );

    const debounceArtLoading = debounce(() => {
      setArtLoading(false);
    }, 700);

    debounceArtLoading();
  };

  return (
    <>
      <div className="w-full h-full bg-white md:bg-slate-200 flex flex-col">
        <div className="w-full h-full bg-white flex flex-col justify-start items-start rounded-xl p-5 overflow-auto gap-5">
          <APHeading text="All articles" />
          <APSearch
            setLoading={setArtLoading}
            setArticlesToDisplay={setArticlesToDisplay}
            sortedArticles={sortedArticles}
            placeholder="search for article..."
          />
          <div className="w-full h-full flex flex-col justify-start items-center gap-1">
            {artLoading ? (
              <>
                <div className="w-full h-auto flex justify-center items-center p-5">
                  <LoadingSpinner size={20} />
                </div>
              </>
            ) : (
              <>
                {articlesToDisplay.length === 0
                  ? "There is no articles do display"
                  : articlesToDisplay
                      .map((article) => (
                        <ListItem
                          key={article.id}
                          article={article}
                          onDelete={handleArticleDelete}
                          Dropdown={APArticleDropdown}
                          link="/articles/article/"
                        />
                      ))
                      .slice(0, 5)}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
