import React, { ChangeEvent } from "react";
import { ArticleCategoryList } from "./ArticleCategoriesList";
import useMainContext from "../../hooks/useMainContext";

export default function ArticleCategories() {
  const { category, setCategory } = useMainContext();

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <select
        name="category"
        onChange={handleCategoryChange}
        className="w-full border focus:border-blue-500 p-3 outline-none rounded-md"
        value={category}
      >
        <option value="" disabled>
          Select categories
        </option>
        {ArticleCategoryList.map((cat) => (
          <option key={cat.id} value={cat.value}>
            {cat.name}
          </option>
        ))}
      </select>
    </>
  );
}
