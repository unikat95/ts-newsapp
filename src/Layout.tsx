import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/MainContainer/MainContainer";
import Container from "./components/Container/Container";

export default function Layout() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <MainContainer>
      <Navbar navbarHeight={navbarHeight} setNavbarHeight={setNavbarHeight} />
      <Container navbarHeight={navbarHeight}>
        <Outlet />
      </Container>
    </MainContainer>
  );
}
