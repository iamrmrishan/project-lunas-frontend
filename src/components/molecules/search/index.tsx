import Button from 'components/atoms/button';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchPostLink: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-secondaryBtn2 dark:bg-opacity-20 border border-primaryText dark:border-secondaryText border-opacity-5 dark:border-opacity-5 rounded p-2 mb-4">
      <input
        type="text"
        placeholder="Search"
        className="text-sm placeholder-primaryText dark:placeholder-secondaryText placeholder-opacity-40 dark:placeholder-opacity-40 bg-primaryColor dark:bg-secondaryColor border border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10 rounded h-9 mr-4 cursor-pointer focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500 w-full"
      />
      <Button
        className={
          'top-1/2 right-1 -translate-y-1/2 rounded-full hover:text-opacity-60 dark:hover:text-opacity-60 bg-primaryBtn text-primaryBtnText dark:text-secondaryBtnText dark:bg-secondaryBtn hover:bg-primaryBtn dark:hover:bg-secondaryBtn p-2 hover:text-primaryBtnText dark:hover:text-secondaryBtnText transition'
        }
        icon={<BiSearchAlt></BiSearchAlt>}
      ></Button>
    </div>
  );
};
