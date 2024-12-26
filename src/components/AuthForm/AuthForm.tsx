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
  const [error, setError] = useState<string | null>(null);

  const { handleSignIn, handleSignUp, setInitializing } = useMainContext();

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
        setInitializing,
        setError,
      });
    } else {
      handleSignIn({
        email: formField.email,
        password: formField.password,
        setLoading,
        navigate,
        setInitializing,
        setError,
      });
    }
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-3 justify-center items-center relative"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <AuthFormInput
          type="email"
          placeholder="enter email..."
          formField={formField.email}
          error={error?.includes("email") ? error : null}
          handleInputChange={handleInputChange}
        />
        <AuthFormInput
          type="password"
          placeholder="enter password..."
          formField={formField.password}
          error={error?.toLocaleLowerCase().includes("password") ? error : null}
          handleInputChange={handleInputChange}
        />
        {error && (
          <p className="w-full flex justify-center items-center p-3 rounded-md bg-red-500 text-white text-sm">
            {error}
          </p>
        )}
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
