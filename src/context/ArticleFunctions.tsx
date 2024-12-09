import { v4 as uuidv4 } from "uuid";
import { UserProps } from "./MainContextTypes";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export type CreateArticleProps = {
  title: string;
  img: string;
  text: string;
  currentUser: UserProps | null;
  category: string;
};

export const CreateArticle = async ({
  title,
  img,
  text,
  currentUser,
  category,
}: CreateArticleProps) => {
  if (currentUser) {
    const articleId = uuidv4();
    const articleData = {
      id: articleId,
      title: title,
      img: img,
      text: text,
      author: currentUser.id,
      createdAt: new Date().toISOString(),
      category: category,
      comments: [],
    };

    await setDoc(doc(db, "articles", articleId), articleData);
  }
};
