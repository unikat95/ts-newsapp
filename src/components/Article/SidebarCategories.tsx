import React from "react";

import { ArticleCategoryList } from "../ArticleCategories/ArticleCategoriesList";
import useMainContext from "../../hooks/useMainContext";
import { Link } from "react-router-dom";
import SidebarHeading from "./SidebarHeading";
import { BiSolidCategory, BiSolidCategoryAlt } from "react-icons/bi";

export default function SidebarCategories() {
  const { setCategoryToDisplay, articles } = useMainContext();
  const categories = ArticleCategoryList;

  return (
    <div className="w-full flex flex-col gap-5">
      <SidebarHeading text="Categories" Icon={BiSolidCategory} />
      <div className="w-full flex flex-col gap-1 justify-start items-start">
        {categories.map((cat) => {
          const categoriesLength = articles.filter(
            (art) => art.category === cat.value
          );
          return (
            <Link
              key={cat.id}
              to={`/articles`}
              className="w-full bg-white flex justify-between items-center p-3 group rounded-xl main-shadow"
              onClick={() => setCategoryToDisplay(cat.value)}
            >
              <div className="text sm flex justify-center items-center gap-2">
                <BiSolidCategoryAlt size={18} className="text-primary-text" />
                <p className="group-hover:underline">{cat.name}</p>
              </div>
              <p className="text-xs">
                {categoriesLength.length}{" "}
                {categoriesLength.length === 1 ? "article" : "articles"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
