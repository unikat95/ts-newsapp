import React, { createContext, useState } from "react";

import { MainContextProps, MainProviderProps } from "./MainContextTypes";
import useAuth from "../hooks/useAuth";

import {
  handleSignIn,
  handleSignUp,
  handleSignOut,
} from "../utils/AuthFunctions";

import {
  CreateArticle,
  handleLikePost,
  handleEditArticle,
  handleAddComment,
  handleAddReply,
} from "../utils/ArticleFunctions";

import {
  handleSendMessage,
  handleSendReply,
  handleMarkAsRead,
} from "../utils/MessageFunctions";

import PageLoading from "../components/PageLoading/PageLoading";
import useArticles from "../hooks/useArticles";
import useMessages from "../hooks/useMessages";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    isActive,
    setIsActive,
    userList,
    setUserList,
    loading,
    setLoading,
    initializing,
    setInitializing,
    sortedUsers,
    isEditModalOpen,
    setIsEditModalOpen,
    editLoading,
    setEditLoading,
  } = useAuth();

  const {
    articles,
    setArticles,
    category,
    setCategory,
    sortedArticles,
    isModalOpen,
    setIsModalOpen,
    categoryToDisplay,
    setCategoryToDisplay,
  } = useArticles();

  const {
    messages,
    setMessages,
    incomingUnreadCount,
    sentUnreadCount,
    unreadMessagesCount,
  } = useMessages();

  const [pageLoading, setPageLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [articleLoading, setArticleLoading] = useState(false);

  if (loading || initializing) return <PageLoading />;
  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        isActive,
        setIsActive,
        userList,
        setUserList,
        loading,
        setLoading,
        initializing,
        setInitializing,
        isEditModalOpen,
        setIsEditModalOpen,
        editLoading,
        setEditLoading,

        articles,
        setArticles,
        category,
        setCategory,
        isModalOpen,
        setIsModalOpen,
        categoryToDisplay,
        setCategoryToDisplay,
        articleLoading,
        setArticleLoading,

        sortedArticles,
        sortedUsers,

        messages,
        setMessages,
        unreadMessagesCount,
        incomingUnreadCount,
        sentUnreadCount,

        openDropdown,
        setOpenDropdown,

        handleSignIn,
        handleSignUp,
        handleSignOut,

        CreateArticle,
        handleLikePost,
        handleEditArticle,
        handleAddComment,
        handleAddReply,
        handleSendMessage,
        handleSendReply,
        handleMarkAsRead,

        pageLoading,
        setPageLoading,

        showPopup,
        setShowPopup,
        popupMessage,
        setPopupMessage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
