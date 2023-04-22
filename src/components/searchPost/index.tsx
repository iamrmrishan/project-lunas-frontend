import SearchIconSvg from 'assets/icons/search-icon';
import { IoMdMore } from 'react-icons/io';
import React, { useState } from 'react';
import { useTheme } from 'themeProvider';

export const SearchPostLink: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-2 mb-4">
      <input
        type="text"
        placeholder="Search"
        className="text-sm placeholder-gray-500 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded h-9 mr-4 cursor-pointer focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500 w-full"
      />
      <button
        type="button"
        className="top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-300 dark:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-700"
      >
        <span className="sr-only">Search</span>
        <SearchIconSvg></SearchIconSvg>
      </button>
      <button
        className="p-4 focus:outline-none md:hidden ipad:block"
        onClick={toggleMobileMenu}
        aria-label="Meatball menu"
      >
        <IoMdMore size={24} color={darkMode ? 'white' : 'black'} />
      </button>
      {showMobileMenu && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-gray-900 bg-opacity-50 transition duration-200 z-10">
          <div className="bg-white dark:bg-gray-900 dark:text-white rounded p-4 max-w-xs mx-auto mt-16">
            <a href="" className="block p-4 text-cyan-500">
              Create a Category
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
