import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterQuiclLinks() {
  return (
    <nav className="border-r border-zinc-800 w-full flex flex-col pr-10 md:pr-20 gap-4">
      <h2 className="text-base text-slate-200">Quick links</h2>
      <ul className="w-full flex flex-col gap-2 pl-5 list-disc">
        <li className="text-slate-200 hover:underline">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-slate-200 hover:underline">
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li className="text-slate-200 hover:underline">
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="text-slate-200 hover:underline">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
