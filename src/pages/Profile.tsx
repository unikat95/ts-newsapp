import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    currentUser,
    setUser,
    setCurrentUser,
    setInitializing,
    handleSignOut,
  } = useMainContext();

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 500));
    handleSignOut({ setUser, setCurrentUser, setInitializing, navigate });
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-5">
      Welcome {currentUser?.email}
      <button
        onClick={handleLogout}
        className="bg-black text-white px-3 py-1 rounded-md flex justify-center items-center gap-2"
      >
        Logout {loading && <LoadingSpinner />}
      </button>
    </div>
  );
}
