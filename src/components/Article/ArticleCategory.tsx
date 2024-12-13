import React from "react";

import { getCategoriesColor } from "../../Utilities/ThemeUtils";
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
      w-auto flex justify-start items-start px-3 py-2 text-sm
      ${getCategoriesColor(articleCat)}`}
      onClick={() => setCategoryToDisplay(articleCat)}
    >
      {articleCat}
    </Link>
  );
}
