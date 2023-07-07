import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/index";
import BrowsePage from "./pages/browse";
import ProfilePage from "pages/profie";
import PostPage from "pages/post";
import CreatePostPage from "pages/create-post";
import Login from 'pages/login';
import Signup from 'pages/signup';
import NotificationsPage from 'pages/notifications';

const PageRoutes: React.FC<React.PropsWithChildren<{}>> = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/browse" Component={BrowsePage} />
    <Route path="/profile" Component={ProfilePage} />
    <Route path="/post/:id/:title" Component={PostPage} />
    <Route path="/create-post" Component={CreatePostPage} />
    <Route path="/login" Component={Login} />
    <Route path="/signup" Component={Signup} />
    <Route path="/notifications" Component={NotificationsPage} />
  </Routes>
);

export default PageRoutes;
