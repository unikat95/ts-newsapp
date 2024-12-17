import React, { useEffect, useState } from "react";

import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import useMainContext from "../../hooks/useMainContext";
import PopupMessage from "../../components/PopupMessage/PopupMessage";

export default function AdminPanel() {
  const { currentUser, popupMessage, showPopup, setShowPopup } =
    useMainContext();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setIsPopupOpen(true);
        setShowPopup(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  if (currentUser?.role !== "administrator") return <Navigate to="/" />;
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="w-full h-[100dvh] bg-slate-200 flex flex-col justify-start overflow-y-hidden">
        <Outlet />
      </div>
      <PopupMessage
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        text={popupMessage}
      />
    </div>
  );
}
