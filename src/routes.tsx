
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/index';
import BrowsePage from './pages/browse';

const PageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route  path="/" Component={HomePage} />
      <Route path="/browse" Component={BrowsePage} />
    </Routes>
  );
};

export default PageRoutes;