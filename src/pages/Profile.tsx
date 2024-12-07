import React from "react";
import { useNavigate } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";

export default function Profile() {
  const navigate = useNavigate();

  const {
    currentUser,
    setUser,
    setCurrentUser,
    setInitializing,
    handleSignOut,
  } = useMainContext();

  return (
    <div className="flex flex-col justify-start items-start gap-5">
      Welcome {currentUser?.email}, your profile is{" "}
      {currentUser?.completed ? "completed" : "uncompleted"}
      <button
        onClick={() =>
          handleSignOut({ setUser, setCurrentUser, setInitializing, navigate })
        }
        className="bg-black text-white px-3 py-1 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
