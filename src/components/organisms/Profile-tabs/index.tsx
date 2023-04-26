import React from 'react';

export const ProfileTabs: React.FC = () => {
  return (
    <nav className="flex justify-between border-b text-sm font-medium dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded overflow-y-hidden">
      <div className="flex flex-grow overflow-x-auto no-scrollbar overflow-y-hidden">
        <a href="" className="flex-grow -mb-px border-b border-current p-4 text-cyan-500 dark:text-white">
          OVERVIEW
        </a>

        <a
          href=""
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          POSTS
        </a>

        <a
          href=""
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          COMMENTS
        </a>

        <a
          href=""
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          HISTORY
        </a>
        <a
          href=""
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          SAVED
        </a>
        <a
          href=""
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          UPVOTED
        </a>
        <a
          href=""
          className="flex-grow -mb-px border-b border-transparent p-4 hover:text-cyan-500 dark:text-white"
        >
          DOWNVOTED
        </a>
      </div>
    </nav>
  );
};
