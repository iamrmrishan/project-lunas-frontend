import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import { IoImageOutline } from 'react-icons/io5';

export const CreatePostLink:React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded p-2 mb-4">
      <FaReddit className="text-gray-300 text-3xl mr-4" />
      <input
        type="text"
        placeholder="Create Post"
        className="text-sm placeholder-gray-500 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded h-9 mr-4 cursor-pointer focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-blue-500 w-full"
      />
      <IoImageOutline className="text-gray-400 text-2xl mr-4 cursor-pointer" />
      <BsLink45Deg className="text-gray-400 text-2xl cursor-pointer" />
    </div>
  );
};
