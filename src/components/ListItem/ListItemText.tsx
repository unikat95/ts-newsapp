import React from "react";

import { ListItemProps } from "./ListItem";

export default function ListItemText({ article, user }: ListItemProps) {
  return (
    <h1 className="text-sm line-clamp-1">
      {(article && article.title) ||
        (user && user.firstName + " " + user.lastName)}
    </h1>
  );
}
