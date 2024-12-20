import { v4 as uuidv4 } from "uuid";
import {
  ArticleProps,
  CommentProps,
  UserProps,
} from "../context/MainContextTypes";
import { doc, DocumentReference, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { SetStateAction } from "react";
import { DocumentData } from "@google-cloud/firestore";
import { NavigateFunction } from "react-router-dom";

export type CreateArticleProps = {
  title: string;
  img: string;
  text: string;
  currentUser: UserProps | null;
  category: string;
};

export type LikePostProps = {
  currentUser: UserProps;
  setLikeLoading: React.Dispatch<SetStateAction<boolean>>;
  liked: boolean;
  setLiked: React.Dispatch<SetStateAction<boolean>>;
  article: ArticleProps;
  likeRef: DocumentReference<DocumentData, DocumentData>;
};

export type EditArticleProps = {
  setIsEditing: React.Dispatch<SetStateAction<boolean>>;
  editedArticleRef: DocumentReference<DocumentData, DocumentData> | null;
  title: string;
  img: string;
  text: string;
  setShowPopup: React.Dispatch<SetStateAction<boolean>>;
  setPopupMessage: (value: SetStateAction<string>) => void;
  navigate: NavigateFunction;
  msg: string;
};

export type AddCommentProps = {
  currentUser: UserProps | null;
  commentMsg: string;
  article: ArticleProps;
  setCommentMsg: React.Dispatch<SetStateAction<string>>;
};

export type AddReplyProps = {
  currentUser: UserProps | null;
  replyMsg: string;
  article: ArticleProps;
  comment: CommentProps;
  setReplyMsg: React.Dispatch<SetStateAction<string>>;
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
}: LikePostProps) => {
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

export const handleEditArticle = async ({
  setIsEditing,
  editedArticleRef,
  title,
  img,
  text,
  setShowPopup,
  setPopupMessage,
  navigate,
  msg,
}: EditArticleProps) => {
  setIsEditing(true);

  if (editedArticleRef) {
    try {
      await updateDoc(editedArticleRef, {
        title: title,
        img: img,
        text: text,
      });
      await new Promise((res) => setTimeout(res, 1000));
    } catch (error) {
      console.log(error);
    }
  }
  setIsEditing(false);
  setShowPopup(true);
  setPopupMessage(msg);
  navigate("/admin-panel/article-list");
};

export const handleAddComment = async ({
  currentUser,
  commentMsg,
  article,
  setCommentMsg,
}: AddCommentProps) => {
  if (currentUser) {
    try {
      const commentData = {
        id: uuidv4(),
        msg: commentMsg,
        author: currentUser.id,
        createdAt: new Date().toISOString(),
        replies: [],
      };
      setCommentMsg("");
      await updateDoc(doc(db, "articles", article.id), {
        comments: [...article.comments, commentData],
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const handleAddReply = async ({
  currentUser,
  replyMsg,
  article,
  comment,
  setReplyMsg,
}: AddReplyProps) => {
  if (currentUser && replyMsg) {
    try {
      const replyData = {
        id: uuidv4(),
        msg: replyMsg,
        author: currentUser.id,
        createdAt: new Date().toISOString(),
      };

      const updatedComments = article.comments.map((com) =>
        com.id === comment.id
          ? {
              ...com,
              replies: [...com.replies, replyData],
            }
          : com
      );

      setReplyMsg("");
      await updateDoc(doc(db, "articles", article.id), {
        comments: updatedComments,
      });
    } catch (error) {
      console.error(error);
    }
  }
};
