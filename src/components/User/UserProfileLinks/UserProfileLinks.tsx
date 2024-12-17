import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import useMainContext from "../../../hooks/useMainContext";

import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import LoadingBar from "../../LoadingBar/LoadingBar";

type UserProfileLinksProps = {
  handleToggleUserEditor: (() => void) | undefined;
};

export default function UserProfileLinks({
  handleToggleUserEditor,
}: UserProfileLinksProps) {
  const [loading, setLoading] = useState(false);
  const {
    currentUser,
    setUser,
    setCurrentUser,
    setInitializing,
    handleSignOut,
    setOpenDropdown,
  } = useMainContext();
  const navigate = useNavigate();
  const location = useLocation();

  const linkStyles =
    "border-2 border-bg-primary-text text-primary-text hover:bg-secondary-text hover:text-white hover:border-secondary-text text-xl px-3 py-2 gap-2 rounded-md flex justify-center items-center";

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

  return (
    <>
      {location.pathname.includes("user") ? null : (
        <div className="w-auto">
          <div className="flex gap-2">
            <Link to="/profile/messages" className={linkStyles}>
              <RiMessage3Fill />
            </Link>
            {currentUser?.role === "administrator" && (
              <Link to="/admin-panel" className={linkStyles}>
                <MdAdminPanelSettings />
              </Link>
            )}
            <button className={linkStyles} onClick={handleToggleUserEditor}>
              <IoMdSettings />
            </button>
            <button onClick={handleLogout} className={linkStyles}>
              <IoMdLogOut />
              {loading && (
                <>
                  <LoadingBar />
                  <LoadingSpinner size={13} />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
