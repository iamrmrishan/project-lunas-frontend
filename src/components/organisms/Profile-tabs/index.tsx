import React, { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";

export const ProfileTabs: React.FC = () => {
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
  }, []);

  const tabs = [
    { id: 1, title: "OVERVIEW", link: "/" },
    { id: 2, title: "POSTS", link: "/" },
    { id: 3, title: "COMMENTS", link: "/" },
    { id: 4, title: "HISTORY", link: "/" },
    { id: 5, title: "SAVED", link: "/" },
    { id: 6, title: "UPVOTED", link: "/" },
    { id: 7, title: "DOWNVOTED", link: "/" },
  ];

  const visibleTabs = windowWidth >= 768 ? tabs : tabs.slice(0, 3);
  const hiddenTabs = windowWidth >= 768 ? [] : tabs.slice(3);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-between border-b text-sm font-medium dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded overflow-y-hidden">
      <div className="flex flex-grow overflow-x-auto no-scrollbar overflow-y-hidden">
        <div className="overflow-hidden w-full">
          <ul className="flex list-none p-0 ">
            {visibleTabs.map((tab) => (
              <li key={tab.id} className="md:flex-grow float-left">
                <a href={tab.link} className="block px-4 py-2 text-gray-800">
                  {tab.title}
                </a>
              </li>
            ))}
            {hiddenTabs.length > 0 && (
              <li className="relative ml-auto">
                <button
                  className="block px-4 py-2 text-gray-800 "
                  onClick={toggleDropdown}
                >
                  <FiMoreHorizontal size={20} />
                </button>
              </li>
            )}
          </ul>
          {showDropdown && (
            // <div>
              <ul className="absolute right-5 md:hidden p-3 m-auto w-40 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                {hiddenTabs.map((tab) => (
                  <li key={tab.id} className="my-2">
                    <a
                      href={tab.link}
                      className="flex-grow  border-current p-4 text-cyan-500 dark:text-white"
                    >
                      {tab.title}
                    </a>
                  </li>
                ))}
              </ul>
            // </div>
          )}
        </div>
        {/* <a
          href="/"
          className="flex-grow -mb-px border-b border-current p-4 text-cyan-500 dark:text-white"
        >
          OVERVIEW
        </a>

        <a
          href="/"
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          POSTS
        </a>

        <a
          href="/"
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          COMMENTS
        </a>

        <a
          href="/"
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          HISTORY
        </a>
        <a
          href="/"
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          SAVED
        </a>
        <a
          href="/"
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          UPVOTED
        </a>
        <a
          href="/"
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          DOWNVOTED
        </a> */}
      </div>
    </nav>
  );
};
