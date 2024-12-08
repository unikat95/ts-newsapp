import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import React, { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { UserProps } from "./MainContextTypes";

export type AuthProps = {
  email: string;
  password: string;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  currentUser: UserProps | null;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
};

export type SignOutProps = {
  setUser: React.Dispatch<SetStateAction<User | null>>;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  setOpenDropdown: React.Dispatch<SetStateAction<boolean>>;
};

export const handleSignUp = async ({
  email,
  password,
  setLoading,
  navigate,
  currentUser,
  setInitializing,
}: AuthProps) => {
  setLoading(true);
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const userId = userCred.user.uid;
      const userData = {
        id: uuidv4(),
        email: email,
        firstName: "",
        lastName: "",
        avatar: "",
        birthDate: "",
        completed: false,
        role: "User",
      };

      setDoc(doc(db, "users", userId), userData);

      currentUser && navigate("/profile");
      setLoading(false);
      setInitializing(true);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};

export const handleSignIn = async ({
  email,
  password,
  setLoading,
  navigate,
  currentUser,
  setInitializing,
}: AuthProps) => {
  setLoading(true);
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      currentUser?.completed ? navigate("/") : navigate("/profile");
      setLoading(false);
      setInitializing(true);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
};

export const handleSignOut = async ({
  setUser,
  setCurrentUser,
  setInitializing,
  navigate,
  setOpenDropdown,
}: SignOutProps) => {
  await signOut(auth);
  setInitializing(true);
  setUser(null);
  setCurrentUser(null);
  setOpenDropdown(false);
  navigate("/auth");
};
