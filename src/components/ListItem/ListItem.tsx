import React, {
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { ArticleProps, UserProps } from "../../context/MainContextTypes";
import ListItemText from "./ListItemText";
import ListItemInfo from "./ListItemInfo";
import ListItemDropdownButton from "./ListItemDropdownButton";
import UserAvatar from "../User/UserAvatar/UserAvatar";
import { useLocation } from "react-router-dom";

export type ListItemProps = {
  article?: ArticleProps | undefined;
  user?: UserProps | null;
};

type ArticleListItemProps = ListItemProps & {
  onDelete?: (articleId: string) => void;
  Dropdown: (props: any, deprecatedLegacyContext?: any) => ReactNode;
  link: string;
  setArrayToDisplay?: React.Dispatch<SetStateAction<UserProps[] | null>>;
};

export default function ListItem({
  article,
  user,
  onDelete,
  Dropdown,
  link,
  setArrayToDisplay,
}: ArticleListItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        e.target &&
        !(e.target as HTMLElement).closest(".user-dropdown")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pathToCheck = ["user-list", "users"];

  return (
    <>
      <div
        key={(article && article.id) || (user && user.id)}
        className="w-full h-auto bg-white flex flex-col justify-between px-4 py-3 gap-5 border rounded-xl relative .user-dropdown"
        ref={dropdownRef}
      >
        <div className="w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] justify-start items-center gap-5">
          {pathToCheck.some((path) => location.pathname.includes(path)) ? (
            <UserAvatar size="xs" user={user} />
          ) : (
            <img
              src={article?.img}
              alt=""
              className="w-10 h-8 rounded-md object-cover"
            />
          )}
          <ListItemText article={article} user={user} />
          <ListItemInfo article={article} user={user} />
          {!location.pathname.includes("users") && (
            <ListItemDropdownButton handleToggleOpen={handleToggleOpen} />
          )}
        </div>
        {isOpen && (
          <Dropdown
            to={(article && article.id) || user?.id}
            handleToggleOpen={handleToggleOpen}
            article={article}
            user={user}
            onDelete={onDelete}
            link={link}
            setIsOpen={setIsOpen}
            setArrayToDisplay={setArrayToDisplay}
          />
        )}
      </div>
    </>
  );
}
