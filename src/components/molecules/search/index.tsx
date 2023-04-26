import Button from 'components/atoms/button';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchPostLink: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-2 mb-4">
      <input
        type="text"
        placeholder="Search"
        className="text-sm placeholder-gray-500 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded h-9 mr-4 cursor-pointer focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500 w-full"
      />
      <Button
        className={
          'top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-300 dark:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-700'
        }
        icon={<BiSearchAlt></BiSearchAlt>}
      ></Button>
    </div>
  );
};
