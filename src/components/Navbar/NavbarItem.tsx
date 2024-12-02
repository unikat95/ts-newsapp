import React from "react";

import { NavLink } from "react-router-dom";

type NavbarItemProps = {
  link: {
    id: number;
    name: string;
    path: string;
    icon: string;
  };
};

export default function NavbarItem({ link }: NavbarItemProps) {
  return (
    <>
      <li key={link.id}>
        <NavLink to={link.path}>{link.name}</NavLink>
      </li>
    </>
  );
}
