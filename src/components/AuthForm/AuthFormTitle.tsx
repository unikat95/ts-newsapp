import React from "react";

type AuthFormTitleProps = {
  isSignedIn: boolean;
};

export default function AuthFormTitle({ isSignedIn }: AuthFormTitleProps) {
  return (
    <h1 className="w-auto text-3xl uppercase font-loght py-1 relative before:bg-blue-500 before:absolute before:w-full before:h-[3px] before:-bottom-1 before:left-0 before:rounded-lg">
      {isSignedIn ? "Create Account" : "Account Login"}
    </h1>
  );
}
