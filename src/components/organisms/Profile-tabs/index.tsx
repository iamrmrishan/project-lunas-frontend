import React, { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

interface ProfileTabsProps {
  tabs: { id: number, title: string, link: string }[]
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({tabs}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if(windowWidth>768) {
        setShowDropdown(false);
      }

    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);



  const visibleTabs = windowWidth >= 768 ? tabs : tabs.slice(0, 3);
  const hiddenTabs = windowWidth >= 768 ? [] : tabs.slice(3);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-between border-b text-sm font-medium dark:bg-secondaryColor border border-primaryText dark:border-secondaryText border-opacity-10 dark:border-opacity-10 rounded overflow-y-hidden">
      <div className="flex flex-grow overflow-x-auto no-scrollbar overflow-y-hidden">
        <div className="overflow-hidden w-full">
          <ul className="flex list-none p-0 ">
            {visibleTabs.map((tab) => (
              <li key={tab.id} className="md:flex-grow float-left"> 
                <a href={tab.link} className="block px-4 py-2 text-primaryText dark:text-secondaryText text-opacity-60 dark:text-opacity-60 hover:text-primaryText dark:hover:text-secondaryText">
                  {tab.title}
                </a>
              </li>
            ))}
            {hiddenTabs.length > 0 && (
              <li className="relative ml-auto">
                <button
                  className="block px-4 py-2 text-primaryText dark:bg-secondaryText "
                  onClick={toggleDropdown}
                >
                  <FiMoreHorizontal size={20} />
                </button>
              </li>
            )}
          </ul>
          {showDropdown && (
              <ul className="absolute right-5 md:hidden p-3 m-auto w-40 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                {hiddenTabs.map((tab) => (
                  <li key={tab.id} className="my-2">
                    <a
                      href={tab.link}
                      className="flex-grow  border-current p-4 text-primaryText dark:text-secondaryText text-opacity-60 dark:text-opacity-60 hover:text-primaryText dark:hover:text-secondaryText"
                    >
                      {tab.title}
                    </a>
                  </li>
                ))}
              </ul>

          )}
        </div>

      </div>
    </nav>
  );
};
