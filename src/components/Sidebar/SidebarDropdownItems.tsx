import { FaListAlt, FaArchive } from "react-icons/fa";
import { FaPenToSquare, FaListUl } from "react-icons/fa6";

export const articleDropdownItems = [
  {
    id: 1,
    text: "Create article",
    to: "/admin-panel/create-article",
    Icon: FaPenToSquare,
  },
  {
    id: 2,
    text: "Article list",
    to: "/admin-panel/article-list",
    Icon: FaListAlt,
  },
  {
    id: 3,
    text: "Archive",
    to: "/admin-panel/archive",
    Icon: FaArchive,
  },
];

export const usersDropdownItems = [
  {
    id: 1,
    text: "User list",
    to: "/admin-panel/user-list",
    Icon: FaListUl,
  },
];