import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import React, { SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore";
import { UserProps } from "../context/MainContextTypes";

export type AuthProps = {
  email: string;
  password: string;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
  setError: React.Dispatch<SetStateAction<string | null>>;
};

export type SignOutProps = {
  setUser: React.Dispatch<SetStateAction<User | null>>;
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>;
  setInitializing: React.Dispatch<SetStateAction<boolean>>;
  navigate: NavigateFunction;
  setOpenDropdown: React.Dispatch<SetStateAction<boolean>>;
};

const getCustomErrorMessage = (errorCode: string): string => {
  const errorMessage: { [key: string]: string } = {
    "auth/email-already-in-use": "This email is already in use.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/invalid-credential": "Incorrect email or password. Try again.",
    "auth/user-not-found": "User not found. Please sign up.",
    "auth/wrong-password": "Incorrect password. Try again.",
    "auth/missing-password": "You did not enter your password",
  };

  return errorMessage[errorCode] || "something went wrong";
};

export const handleSignUp = async ({
  email,
  password,
  setLoading,
  navigate,
  setInitializing,
  setError,
}: AuthProps) => {
  setLoading(true);
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const userId = userCred.user.uid;
      const userData = {
        id: userId,
        email: email,
        firstName: "",
        lastName: "",
        avatar: "",
        birthDate: "",
        completed: false,
        role: "user",
        joinedAt: new Date().toISOString(),
        userProfileBg: "",
        about: "",
      };

      setDoc(doc(db, "users", userId), userData);

      navigate("/profile");
      setLoading(false);
      setInitializing(true);
    })
    .catch((error) => {
      console.log(error);
      setError(getCustomErrorMessage(error.code));
      setLoading(false);
    });
};

export const handleSignIn = async ({
  email,
  password,
  setLoading,
  navigate,
  setInitializing,
  setError,
}: AuthProps) => {
  setLoading(true);
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/");
      setLoading(false);
      setInitializing(true);
    })
    .catch((error) => {
      console.log(error);
      setError(getCustomErrorMessage(error.code));
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
