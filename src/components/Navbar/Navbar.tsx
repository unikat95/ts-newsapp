import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <div>NewsApp_</div>
        <ul className="w-auto flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
