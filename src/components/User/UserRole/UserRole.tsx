import React from "react";

import useMainContext from "../../../hooks/useMainContext";
import { getRoleStyles } from "../../../Utilities/ThemeUtils";

export default function UserRole() {
  const { currentUser } = useMainContext();
  return (
    <div className={`capitalize z-10 ${getRoleStyles(currentUser?.role)}`}>
      {currentUser?.role}
    </div>
  );
}
