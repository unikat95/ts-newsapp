import React, { createContext, useState } from "react";

import { MainContextProps, MainProviderProps } from "./MainContextTypes";
import useAuth from "../hooks/useAuth";

import { handleSignIn, handleSignUp, handleSignOut } from "./AuthFunctions";
import { CreateArticle } from "./ArticleFunctions";

import PageLoading from "../components/PageLoading/PageLoading";
import useArticles from "../hooks/useArticles";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    userList,
    setUserList,
    loading,
    setLoading,
    initializing,
    setInitializing,
  } = useAuth();

  const { articles, setArticles } = useArticles();

  const [openDropdown, setOpenDropdown] = useState(false);

  if (loading || initializing) return <PageLoading />;

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        userList,
        setUserList,
        loading,
        setLoading,
        initializing,
        setInitializing,

        articles,
        setArticles,

        openDropdown,
        setOpenDropdown,

        handleSignIn,
        handleSignUp,
        handleSignOut,

        CreateArticle,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
