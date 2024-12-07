import React from "react";
import { NavLink } from "react-router-dom";
import useMainContext from "../../hooks/useMainContext";

export default function Navbar() {
  const { user } = useMainContext();

  return (
    <nav className="w-full flex flex-col">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <div>NewsApp_</div>
        <ul className="w-auto flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/auth">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
