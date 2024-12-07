import React, { createContext } from "react";

import { MainContextProps, MainProviderProps } from "./MainContextTypes";
import useAuth from "../hooks/useAuth";

import { handleSignIn, handleSignUp, handleSignOut } from "./AuthFunctions";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

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

  if (loading || initializing)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

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
