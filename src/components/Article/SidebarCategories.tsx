import React from "react";

import { ArticleCategoryList } from "../ArticleCategories/ArticleCategoriesList";
import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import SidebarHeading from "./SidebarHeading";
import { BiSolidCategoryAlt } from "react-icons/bi";

export default function SidebarCategories() {
  const { setCategoryToDisplay, articles } = useMainContext();
  const categories = ArticleCategoryList;

  return (
    <div className="w-full flex flex-col gap-5 pb-5">
      <SidebarHeading text="Categories" />
      <div className="w-full flex flex-col gap-1 justify-start items-start">
        {categories.map((cat) => {
          const categoriesLength = articles.filter(
            (art) => art.category === cat.value
          );
          return (
            <Link
              key={cat.id}
              to={`/articles`}
              className="w-full flex justify-between items-center border-t last:border-b py-3 group"
              onClick={() => setCategoryToDisplay(cat.value)}
            >
              <div className="text sm flex justify-center items-center gap-2">
                <BiSolidCategoryAlt size={16} className="text-primary-text" />
                <p className="group-hover:underline">{cat.name}</p>
              </div>
              <p className="text-xs">{categoriesLength.length} articles</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
