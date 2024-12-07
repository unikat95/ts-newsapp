import React from "react";

type AuthFormTitleProps = {
  isSignedIn: boolean;
};

export default function AuthFormTitle({ isSignedIn }: AuthFormTitleProps) {
  return (
    <h1 className="w-auto text-3xl uppercase font-loght border-b-2 border-b-blue-500">
      {isSignedIn ? "Create Account" : "Account Login"}
    </h1>
  );
}
