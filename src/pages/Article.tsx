import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";
import ArticleTitle from "../components/Article/ArticleTitle";
import ArticleImg from "../components/Article/ArticleImg";
import ArticleText from "../components/Article/ArticleText";
import ArticleAuthor from "../components/Article/ArticleAuthor";
import useLoading from "../hooks/useLoading";
import ArticleSidebar from "../components/Article/ArticleSidebar";
import APLoading from "../components/AdminPanel/APLoading";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ArticleCategory from "../components/Article/ArticleCategory";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import ArticleStats from "../components/Article/ArticleStats";
import Comments from "../components/Comment/Comments";

export default function Article() {
  const { id } = useParams();
  const { articles, userList } = useMainContext();
  const [articleLoading, setArticleLoading] = useState(false);
  const loading = useLoading();

  const article = articles.find((art) => art.id === id);
  const author = article
    ? userList?.find((user) => user.id === article.author)
    : null;

  useEffect(() => {
    const timeout = setTimeout(() => setArticleLoading(false), 700);
    return () => clearTimeout(timeout);
  }, [id]);

  if (loading) {
    return <APLoading />;
  }

  if (!article) {
    return <p className="text-center">Article not found!</p>;
  }

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-5">
      {articleLoading ? (
        <div className="w-full h-full flex justify-center items-center py-10">
          <LoadingBar />
          <LoadingSpinner size={24} />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col justify-start items-start gap-5 relative">
            <ArticleCategory articleCat={article.category} />
            <ArticleTitle title={article.title} createdAt={article.createdAt} />
            <div className="w-full flex flex-col md:flex-row justify-between gap-3 md:gap-0 border-t pt-5">
              <ArticleAuthor author={author} />
              <ArticleStats article={article} />
            </div>
            <ArticleImg img={article.img} />
            <ArticleText text={article.text} />
            <Comments author={author} article={article} />
          </div>
          <ArticleSidebar
            articleId={article.id}
            articleCat={article.category}
            setArticleLoading={setArticleLoading}
          />
        </>
      )}
    </div>
  );
}
