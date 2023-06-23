import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/index";
import BrowsePage from "./pages/browse";
import ProfilePage from "pages/profie";
import PostPage from "pages/post";
import CreatePostPage from "pages/create-post";
import Login from 'pages/login';
import Signup from 'pages/signup';

const PageRoutes: React.FC<React.PropsWithChildren<{}>> = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/browse" Component={BrowsePage} />
    <Route path="/profile" Component={ProfilePage} />
    <Route path="/post/:id/:title" Component={PostPage} />
    <Route path="/create-post" Component={CreatePostPage} />
    <Route path="/login" Component={Login} />
    <Route path="/signup" Component={Signup} />
  </Routes>
);

export default PageRoutes;
