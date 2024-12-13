import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import useLoading from "../hooks/useLoading";
import APLoading from "../components/AdminPanel/APLoading";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    currentUser,
    setUser,
    setCurrentUser,
    setInitializing,
    handleSignOut,
    setOpenDropdown,
  } = useMainContext();

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    handleSignOut({
      setUser,
      setCurrentUser,
      setInitializing,
      navigate,
      setOpenDropdown,
    });
    setLoading(false);
  };

  const loader = useLoading();
  if (loader) return <APLoading />;

  return (
    <div className="flex flex-col justify-start items-start gap-5">
      Welcome {currentUser?.email}
      <div className="flex gap-2">
        <button
          onClick={handleLogout}
          className="bg-black text-white px-3 py-1 rounded-md flex justify-center items-center gap-2"
        >
          Logout {loading && <LoadingSpinner size={13} />}
        </button>
        <Link
          to="/profile/messages"
          className="bg-neutral-300 text-black hover:bg-black hover:text-white px-3 py-1 rounded-md flex justify-center items-center gap-2"
        >
          Messages
        </Link>
        <Link
          to="/admin-panel"
          className="bg-neutral-300 text-black hover:bg-black hover:text-white px-3 py-1 rounded-md flex justify-center items-center gap-2 text-nowrap"
        >
          Admin Panel
        </Link>
      </div>
      {loading && <LoadingBar />}
    </div>
  );
}
