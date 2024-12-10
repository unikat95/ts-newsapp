import React, { ChangeEvent, useRef } from "react";

import useMainContext from "../../hooks/useMainContext";
import { ArticleProps } from "../../context/MainContextTypes";

import { IoIosSearch } from "react-icons/io";

type AdminPanelArticleSearchProps = {
  setArticlesToDisplay: React.Dispatch<React.SetStateAction<ArticleProps[]>>;
};

export default function AdminPanelArticleSearch({
  setArticlesToDisplay,
}: AdminPanelArticleSearchProps) {
  const { sortedArticles } = useMainContext();
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      const filteredArticles = sortedArticles.filter((article) =>
        article.title.toLowerCase().includes(searchValue)
      );
      setArticlesToDisplay(filteredArticles);
    }, 700);
  };
  return (
    <label className="w-full bg-white border focus:border-blue-500 p-3 outline-none rounded-xl text-base flex justify-strart items-center gap-2">
      <IoIosSearch size={22} className="text-slate-500" />
      <input
        type="text"
        className="outline-none"
        placeholder="search for article..."
        onChange={handleSearch}
      />
    </label>
  );
}
