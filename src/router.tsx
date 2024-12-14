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
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import CreateArticle from "./pages/AdminPanel/Articles/CreateArticle";
import ArticleList from "./pages/AdminPanel/Articles/ArticleList";
import Archive from "./pages/AdminPanel/Articles/Archive";
import UserList from "./pages/AdminPanel/Users/UserList";
import Administrators from "./pages/AdminPanel/Users/Administrators";
import AdminPanelHome from "./pages/AdminPanel/AdminPanelHome";
import Article from "./pages/Article";
import User from "./pages/User";
import EditArticle from "./pages/AdminPanel/Articles/EditArticle";
import Xd from "./pages/Xd";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/article/:id" element={<Article />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/user/:id" element={<User />} />
      <Route path="/xd" element={<Xd />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/admin-panel" element={<AdminPanel />}>
        <Route index element={<AdminPanelHome />} />
        <Route path="create-article" element={<CreateArticle />} />
        <Route path="edit-article/:id" element={<EditArticle />} />
        <Route path="edit-user/:id" element={<>Edit user</>} />
        <Route path="article-list" element={<ArticleList />} />
        <Route path="archive" element={<Archive />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="user-ranks" element={<Administrators />} />
      </Route>
      <Route path="/profile/messages" element={<>Messages</>} />
    </Route>
  )
);
