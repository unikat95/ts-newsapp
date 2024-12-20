import React from "react";

import { getCategoriesColor } from "../../utils/ThemeUtils";
import { Link } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

type ArticleCategoryProps = {
  articleCat: string;
};

export default function ArticleCategory({ articleCat }: ArticleCategoryProps) {
  const { setCategoryToDisplay } = useMainContext();

  return (
    <Link
      to="/articles"
      className={`
      w-auto flex justify-start items-start px-5 py-2 text-sm rounded-md
      ${getCategoriesColor(articleCat)}`}
      onClick={() => setCategoryToDisplay(articleCat)}
    >
      {articleCat}
    </Link>
  );
}
