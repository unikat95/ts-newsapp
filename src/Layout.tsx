import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/MainContainer/MainContainer";
import Container from "./components/Container/Container";
import DisabledNavbar from "./components/DisabledNavbar/DisabledNavbar";
import { DisabledNavbarPath } from "./components/DisabledNavbar/DisabledNavbarPath";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function Layout() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
      <ScrollToTop />
      <MainContainer>
        <DisabledNavbar paths={DisabledNavbarPath}>
          <Navbar
            navbarHeight={navbarHeight}
            setNavbarHeight={setNavbarHeight}
          />
        </DisabledNavbar>
        <Container navbarHeight={navbarHeight}>
          <Outlet />
        </Container>
      </MainContainer>
    </>
  );
}
