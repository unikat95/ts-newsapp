import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Articles from "./pages/Articles";
import Users from "./pages/Users";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/articles" element={<Articles></Articles>} />
      <Route path="/users" element={<Users></Users>} />
      <Route path="/auth" element={<Auth></Auth>} />
    </Route>
  )
);
