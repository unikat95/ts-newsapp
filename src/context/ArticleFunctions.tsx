import { v4 as uuidv4 } from "uuid";
import { ArticleProps, UserProps } from "./MainContextTypes";
import { doc, DocumentReference, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { SetStateAction } from "react";
import { DocumentData } from "@google-cloud/firestore";

export type CreateArticleProps = {
  title: string;
  img: string;
  text: string;
  currentUser: UserProps | null;
  category: string;
};

export type HandleLikePostProps = {
  currentUser: UserProps;
  setLikeLoading: React.Dispatch<SetStateAction<boolean>>;
  liked: boolean;
  setLiked: React.Dispatch<SetStateAction<boolean>>;
  article: ArticleProps;
  likeRef: DocumentReference<DocumentData, DocumentData>;
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
      likes: [],
    };

    await setDoc(doc(db, "articles", articleId), articleData);
  }
};

export const handleLikePost = async ({
  currentUser,
  setLikeLoading,
  liked,
  setLiked,
  article,
  likeRef,
}: HandleLikePostProps) => {
  if (!currentUser) return;
  setLikeLoading(true);

  try {
    const updatedLikes = liked
      ? article.likes.filter((like) => like.whoLiked !== currentUser.id)
      : [...article.likes, { whoLiked: currentUser.id }];

    await updateDoc(likeRef, { likes: updatedLikes });

    setLiked(!liked);

    article.likes = updatedLikes;
  } catch (error) {
    console.log(error);
  } finally {
    setLikeLoading(false);
  }
};
