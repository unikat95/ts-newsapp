import React from "react";
import { useLocation } from "react-router-dom";

type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  const location = useLocation();

  if (location.pathname.startsWith("/admin-panel")) return children;
  return (
    <div className="w-full flex flex-col justify-center items-center py-5 px-5">
      {children}
    </div>
  );
}
