import { useEffect, useState } from "react";
import { ArticleProps } from "../context/MainContextTypes";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export default function useArticles() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  useEffect(() => {
    const articleUnsubscribe = onSnapshot(
      collection(db, "articles"),
      (articles) => {
        const articlesData: ArticleProps[] = [];
        articles.forEach((article) => {
          articlesData.push(article.data() as ArticleProps);
        });
        setArticles(articlesData);
      }
    );

    return () => articleUnsubscribe();
  }, []);

  return { articles, setArticles, sortedArticles };
}
