import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Articles from "./pages/Articles";
import Users from "./pages/Users";
import Auth from "./pages/Auth";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/users" element={<Users />} />
      <Route path="/auth" element={<Auth />} />
    </Route>
  )
);
