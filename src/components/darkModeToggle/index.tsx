import React from 'react';
import { useTheme } from './../../themeProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';


const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black p-2 rounded-full bg-black hover:bg-white-600 text-white"
    >
       {darkMode ? (
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkModeToggle;