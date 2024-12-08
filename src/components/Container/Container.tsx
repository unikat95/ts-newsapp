import React from "react";
import { useLocation } from "react-router-dom";

type ContainerProps = {
  children: React.ReactNode;
  navbarHeight: number;
};

export default function Container({ children, navbarHeight }: ContainerProps) {
  const location = useLocation();

  if (location.pathname.startsWith("/admin-panel")) return children;
  return (
    <div
      className="w-full max-w-[1400px] flex flex-col justify-start items-start mt-[3.75rem]"
      style={{ marginTop: navbarHeight }}
    >
      {children}
    </div>
  );
}
