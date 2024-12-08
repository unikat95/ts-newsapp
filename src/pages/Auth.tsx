import React, { useState } from "react";

import useMainContext from "../hooks/useMainContext";

import AuthForm from "../components/AuthForm/AuthForm";
import AuthFormTitle from "../components/AuthForm/AuthFormTitle";
import AuthSwitch from "../components/AuthForm/AuthSwitch";

import { Navigate } from "react-router-dom";

export default function Auth() {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { currentUser } = useMainContext();

  const handleMethodChange = () => {
    setIsSignedIn(!isSignedIn);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <div className="w-screen h-[100dvh] bg-white fixed top-0 left-0 flex flex-col justify-center items-center z-[999] px-5">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center gap-10">
        <AuthFormTitle isSignedIn={isSignedIn} />
        <AuthForm
          formField={formField}
          setFormField={setFormField}
          isSignedIn={isSignedIn}
        />
        <AuthSwitch
          isSignedIn={isSignedIn}
          handleMethodChange={handleMethodChange}
        />
      </div>
    </div>
  );
}
