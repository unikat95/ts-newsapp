import React from "react";
import { useParams } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";
import ArticleTitle from "../components/Article/ArticleTitle";
import ArticleImg from "../components/Article/ArticleImg";
import ArticleText from "../components/Article/ArticleText";
import ArticleSidebar from "../components/Article/ArticleSidebar";
import ArticleAuthor from "../components/Article/ArticleAuthor";
import useLoading from "../hooks/useLoading";
import AdminPanelLoading from "../components/AdminPanel/AdminPanelLoading";

export default function Article() {
  const { id } = useParams();
  const { articles, userList } = useMainContext();
  const article = articles.find((art) => art.id === id);
  const author = userList?.find((user) => user.id === article?.author);
  const loading = useLoading();

  if (loading) return <AdminPanelLoading />;

  return (
    <>
      {article && (
        <div className="w-full flex justify-center items-start gap-10">
          <div className="w-full flex flex-col gap-5">
            <ArticleAuthor author={author} />
            <ArticleTitle title={article.title} />
            <ArticleImg img={article.img} />
            <ArticleText text={article.text} />
          </div>
          <ArticleSidebar />
        </div>
      )}
    </>
  );
}
