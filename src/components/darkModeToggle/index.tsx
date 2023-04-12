import React from 'react';
import { useTheme } from './../../themeProvider';
import { BsMoonStars, BsSun } from 'react-icons/bs';


const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
    >
       {darkMode ? (
        <BsSun className="h-6 w-6" aria-hidden="true" />
      ) : (
        <BsMoonStars className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkModeToggle;