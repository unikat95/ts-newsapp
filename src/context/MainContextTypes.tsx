import { User } from "firebase/auth";
import React, { SetStateAction } from "react";
import { AuthProps, SignOutProps } from "./AuthFunctions";
import {
  AddCommentProps,
  AddReplyProps,
  CreateArticleProps,
  EditArticleProps,
  LikePostProps,
} from "./ArticleFunctions";

export type UserProps = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  birthDate: string;
  completed: false;
  role: string;
  joinedAt: Date;
  userProfileBg: string;
  about: string;
};

export type ReplyProps = {
  id: string;
  msg: string;
  author: string;
  createdAt: Date;
};

export type CommentProps = {
  id: string;
  msg: string;
  author: string;
  createdAt: Date;
  replies: ReplyProps[];
};

export type LikeProps = {
  whoLiked: string;
};

export type ArticleProps = {
  id: string;
  title: string;
  img: string;
  text: string;
  author: string;
  createdAt: Date;
  category: string;
  comments: CommentProps[];
  likes: LikeProps[];
};

export type MainContextProps = {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
  currentUser: UserProps | null;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  isActive: boolean;
  setIsActive: React.Dispatch<SetStateAction<boolean>>;
  userList: UserProps[] | null;
  setUserList: React.Dispatch<SetStateAction<UserProps[] | null>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  initializing: boolean;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<SetStateAction<boolean>>;
  editLoading: boolean;
  setEditLoading: React.Dispatch<SetStateAction<boolean>>;

  articles: ArticleProps[];
  setArticles: React.Dispatch<SetStateAction<ArticleProps[]>>;
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  categoryToDisplay: string;
  setCategoryToDisplay: React.Dispatch<SetStateAction<string>>;

  sortedArticles: ArticleProps[];
  sortedUsers: UserProps[] | undefined;

  openDropdown: boolean;
  setOpenDropdown: React.Dispatch<SetStateAction<boolean>>;

  pageLoading: boolean;
  setPageLoading: React.Dispatch<SetStateAction<boolean>>;

  showPopup: boolean;
  setShowPopup: React.Dispatch<SetStateAction<boolean>>;
  popupMessage: string;
  setPopupMessage: React.Dispatch<SetStateAction<string>>;

  handleSignIn: ({
    email,
    password,
    setLoading,
    setInitializing,
  }: AuthProps) => void;
  handleSignUp: ({
    email,
    password,
    setLoading,
    setInitializing,
  }: AuthProps) => void;
  handleSignOut: ({
    setUser,
    setCurrentUser,
    setInitializing,
    navigate,
    setOpenDropdown,
  }: SignOutProps) => void;

  CreateArticle: ({
    title,
    img,
    text,
    currentUser,
  }: CreateArticleProps) => Promise<void>;

  handleLikePost: ({
    currentUser,
    setLikeLoading,
    liked,
    setLiked,
    article,
    likeRef,
  }: LikePostProps) => Promise<void>;

  handleEditArticle: ({
    setIsEditing,
    editedArticleRef,
    title,
    img,
    text,
    setShowPopup,
    setPopupMessage,
    navigate,
    msg,
  }: EditArticleProps) => Promise<void>;

  handleAddComment: ({
    currentUser,
    commentMsg,
    article,
    setCommentMsg,
  }: AddCommentProps) => Promise<void>;

  handleAddReply: ({
    currentUser,
    replyMsg,
    article,
    comment,
    setReplyMsg,
  }: AddReplyProps) => Promise<void>;
};
export type MainProviderProps = {
  children: React.ReactNode;
};
