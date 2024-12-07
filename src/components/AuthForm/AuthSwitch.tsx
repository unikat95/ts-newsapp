import React, { MouseEventHandler } from "react";
import AuthHome from "./AuthHome";

type AuthSwitchProps = {
  isSignedIn: boolean;
  handleMethodChange: MouseEventHandler<HTMLButtonElement>;
};

export default function AuthSwitch({
  isSignedIn,
  handleMethodChange,
}: AuthSwitchProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div>
        {isSignedIn ? "Already have an account? " : "Don`t have an account? "}
        <button className="underline" onClick={handleMethodChange}>
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
      </div>
      <AuthHome />
    </div>
  );
}
