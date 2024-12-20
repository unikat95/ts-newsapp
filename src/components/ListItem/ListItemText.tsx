import React from "react";

import { ListItemProps } from "./ListItem";
import { Link } from "react-router-dom";

export default function ListItemText({ article, user }: ListItemProps) {
  return (
    <Link
      to={`${
        user ? `/users/user/${user?.id}` : `/articles/article/${article?.id}`
      }`}
      className="text-sm line-clamp-1 cursor-pointer"
    >
      {(article && article.title) ||
        (user && user.firstName + " " + user.lastName)}
    </Link>
  );
}
