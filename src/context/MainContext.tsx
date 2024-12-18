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

  const [pageLoading, setPageLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  if (loading || initializing) return <PageLoading />;

  console.log(isActive);

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
