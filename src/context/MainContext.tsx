import React, { createContext, useState } from "react";

import { MainContextProps, MainProviderProps } from "./MainContextTypes";
import useAuth from "../hooks/useAuth";

import { handleSignIn, handleSignUp, handleSignOut } from "./AuthFunctions";
import {
  CreateArticle,
  handleLikePost,
  handleEditArticle,
  handleAddComment,
  handleAddReply,
} from "./ArticleFunctions";

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

  const { messages, setMessages } = useMessages();

  const [pageLoading, setPageLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const unreadMessages = messages?.filter((msg) => {
    if (msg.from === currentUser?.id) {
      return !msg.readBy[currentUser.id];
    } else if (msg.to === currentUser?.id) {
      return !msg.readBy[currentUser.id];
    }
    return false;
  });

  const unreadMessagesCount = unreadMessages?.length || 0;

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

        sortedArticles,
        sortedUsers,

        messages,
        setMessages,
        unreadMessagesCount,

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
