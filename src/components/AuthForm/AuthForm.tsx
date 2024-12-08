import React, { ChangeEvent, SetStateAction, useState } from "react";

import { useNavigate } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";
import AuthFormInput from "./AuthFormInput";
import FormButton from "../FormButton/FormButton";
import FormLoader from "../FormLoader/FormLoader";
import LoadingBar from "../LoadingBar/LoadingBar";

type AuthFormProps = {
  formField: { email: string; password: string };
  setFormField: React.Dispatch<
    SetStateAction<{ email: string; password: string }>
  >;
  isSignedIn: boolean;
};

export default function AuthForm({
  formField,
  setFormField,
  isSignedIn,
}: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { handleSignIn, handleSignUp, currentUser, setInitializing } =
    useMainContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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

  return (
    <>
      <form
        className="w-full flex flex-col gap-3 justify-center items-center relative"
        onSubmit={handleSubmit}
      >
        <AuthFormInput
          type="email"
          placeholder="enter email..."
          formField={formField.email}
          handleInputChange={handleInputChange}
        />
        <AuthFormInput
          type="password"
          placeholder="enter password..."
          formField={formField.password}
          handleInputChange={handleInputChange}
        />
        <FormButton
          onClick={handleSubmit}
          text={isSignedIn ? "Sign Up" : "Sign In"}
          loading={loading}
        />
        {loading && (
          <>
            <FormLoader />
            <LoadingBar />
          </>
        )}
      </form>
    </>
  );
}
