import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/MainContainer/MainContainer";
import Container from "./components/Container/Container";
import DisabledNavbar from "./components/DisabledNavbar/DisabledNavbar";
import { DisabledNavbarPath } from "./components/DisabledNavbar/DisabledNavbarPath";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <>
      <ScrollToTop />
      <MainContainer footerHeight={footerHeight}>
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
      <DisabledNavbar paths={DisabledNavbarPath}>
        <Footer footerHeight={footerHeight} setFooterHeight={setFooterHeight} />
      </DisabledNavbar>
    </>
  );
}
