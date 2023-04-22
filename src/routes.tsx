
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/index';
import BrowsePage from './pages/browse';
import ProfilePage from 'pages/profie';
import PostPage from 'pages/post';

const PageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route  path="/" Component={HomePage} />
      <Route path="/browse" Component={BrowsePage} />
      <Route path="/profile" Component={ProfilePage} />
      <Route path="/post" Component={PostPage} />
    </Routes>
  );
};

export default PageRoutes;