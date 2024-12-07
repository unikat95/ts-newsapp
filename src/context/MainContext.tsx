import React, { createContext } from "react";

import { MainContextProps, MainProviderProps } from "./MainContextTypes";
import useAuth from "../hooks/useAuth";
import { handleSignIn, handleSignUp, handleSignOut } from "./AuthFunctions";

import PageLoading from "../components/PageLoading/PageLoading";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  const {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    initializing,
    setInitializing,
  } = useAuth();

  if (loading || initializing) return <PageLoading />;

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        initializing,
        setInitializing,

        handleSignIn,
        handleSignUp,
        handleSignOut,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
