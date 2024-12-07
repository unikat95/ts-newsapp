import React, { ChangeEvent, useState } from "react";

import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useMainContext from "../hooks/useMainContext";

import { FaHome } from "react-icons/fa";

import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Auth() {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const { handleSignIn, handleSignUp, currentUser, setInitializing } =
    useMainContext();

  const handleMethodChange = () => {
    setIsSignedIn(!isSignedIn);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isSignedIn) {
      handleSignUp({
        email: formField.email,
        password: formField.password,
        setLoading,
        navigate,
        currentUser,
        setInitializing,
      });
    } else {
      handleSignIn({
        email: formField.email,
        password: formField.password,
        setLoading,
        navigate,
        currentUser,
        setInitializing,
      });
    }
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <div className="w-screen h-screen bg-white fixed top-0 left-0 flex flex-col justify-center items-center z-[999] gap-10">
      <h1 className="text-2xl font-bold">
        {isSignedIn ? "Create Account" : "Account Login"}
      </h1>
      <form className="flex flex-col gap-5 justify-center items-center">
        <input
          type="email"
          name="email"
          placeholder="enter email..."
          className="border-l-2 focus:border-blue-500 outline-none px-2 py-1"
          value={formField.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter password..."
          className="border-l-2 focus:border-blue-500 outline-none px-2 py-1"
          value={formField.password}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="w-full bg-black text-white px-3 py-1 rounded-md flex justify-center items-center gap-2"
          onClick={handleSubmit}
        >
          {isSignedIn ? "Sign Up" : "Sign In"}
          {loading && <LoadingSpinner />}
        </button>
      </form>
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          {isSignedIn ? "Already have an account? " : "Don`t have an account? "}
          <button className="underline" onClick={handleMethodChange}>
            {isSignedIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="w-6 h-6 bg-black text-white flex justify-center items-center rounded-full p-5">
          <Link to="/">
            <FaHome />
          </Link>
        </div>
      </div>
    </div>
  );
}
