import React from 'react';
import { useTheme } from '../../../themeProvider';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import Button from 'components/atoms/button';

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Button onClick={toggleDarkMode}>
      {darkMode ? (
        <BsSun className="h-6 w-6" aria-hidden="true" />
      ) : (
        <BsMoonStars className="h-6 w-6" aria-hidden="true" />
      )}
    </Button>
  );
};

export default DarkModeToggle;
