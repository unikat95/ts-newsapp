import { User } from "firebase/auth";
import React, { SetStateAction } from "react";
import { AuthProps, SignOutProps } from "./AuthFunctions";

export type UserProps = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  birthDate: string;
  completed: false;
  role: string;
};

export type MainContextProps = {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
  currentUser: UserProps | null;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  initializing: boolean;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;

  handleSignIn: ({
    email,
    password,
    setLoading,
    currentUser,
    setInitializing,
  }: AuthProps) => void;
  handleSignUp: ({
    email,
    password,
    setLoading,
    currentUser,
    setInitializing,
  }: AuthProps) => void;
  handleSignOut: ({
    setUser,
    setCurrentUser,
    setInitializing,
    navigate,
  }: SignOutProps) => void;
};
export type MainProviderProps = {
  children: React.ReactNode;
};
