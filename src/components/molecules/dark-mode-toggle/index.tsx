import React from "react";
import { useTheme } from "../../../providers/theme-provider";
import { BsMoonStars, BsSun } from "react-icons/bs";
import Button from "components/atoms/button";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Button
      className="rounded-md bg-primaryBtn2 px-5 py-2.5 text-sm font-medium text-primaryText dark:bg-secondaryBtn2 dark:text-secondaryText"
      onClick={toggleDarkMode}
      icon={
        darkMode ? (
          <BsSun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <BsMoonStars className="h-5 w-5" aria-hidden="true" />
        )
      }
    ></Button>
  );
};

export default DarkModeToggle;