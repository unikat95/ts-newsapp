import React from "react";

import { ListItemProps } from "./ListItem";
import { getRoleStyles } from "../../Utilities/ThemeUtils";

export default function ListItemInfo({ article, user }: ListItemProps) {
  return (
    <p
      className={`text-sm font-medium hidden md:block capitalize ${getRoleStyles(
        user?.role
      )}`}
    >
      {article ? new Date(article.createdAt).toLocaleString() : user?.role}
    </p>
  );
}
