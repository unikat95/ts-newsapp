import React from "react";
import { useLocation } from "react-router-dom";

type MainContainerProps = {
  children: React.ReactNode;
  footerHeight: number;
};

export default function MainContainer({
  children,
  footerHeight,
}: MainContainerProps) {
  const location = useLocation();

  if (location.pathname.startsWith("/admin-panel")) return children;
  return (
    <div
      className="w-full flex flex-col justify-start items-center py-5 px-5"
      style={{ minHeight: `calc(100dvh - ${footerHeight}px)` }}
    >
      {children}
    </div>
  );
}
