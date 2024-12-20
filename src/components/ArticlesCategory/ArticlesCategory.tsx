import React, { ChangeEvent } from "react";

import useMainContext from "../../hooks/useMainContext";
import { ArticleCategoryList } from "../ArticleCategories/ArticleCategoriesList";

type ArticlesCategoryProps = {
  currentCategory: string;
  handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export default function ArticlesCategory({
  currentCategory,
  handleCategoryChange,
}: ArticlesCategoryProps) {
  const {} = useMainContext();
  return (
    <select
      name="category"
      onChange={handleCategoryChange}
      className="w-auto bg-zinc-900 text-white border border-r-[12px] border-zinc-900 px-3 py-2 outline-none rounde-md"
      value={currentCategory}
    >
      <option value="">All categories</option>
      {ArticleCategoryList.map((cat) => (
        <option key={cat.id} value={cat.value}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
