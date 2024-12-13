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
    <div className="w-full flex flex-col gap-5 border-b pb-5">
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
              className="w-full flex justify-between items-center border-t py-3 group text-orange-600 odd:text-blue-500"
              onClick={() => setCategoryToDisplay(cat.value)}
            >
              <div className="text sm flex justify-center items-center gap-2">
                <BiSolidCategoryAlt size={16} className="" />
                <p className="text-black group-hover:underline">{cat.name}</p>
              </div>
              <p className="text-xs text-black">
                {categoriesLength.length} articles
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
