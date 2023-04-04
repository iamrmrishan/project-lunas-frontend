import React from 'react';
import { useTheme } from './../../themeProvider';

interface CardProps {
  title: string;
  description: string;
  url: string;
  dmUrl: string;
}

export const Cards: React.FC<CardProps> = ({
  title,
  description,
  url,
  dmUrl,
}) => {
  const { darkMode } = useTheme();
  return (
    <div
      key={title}
      className="col-span-1 rounded-md border border-transparent p-3 md:p-5 hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer"
    >
      <img
        className="object-fill w-full h-48 md:h-auto"
        src={darkMode ? dmUrl : url}
        alt="Image"
      />
      <h2 className="text-lg md:text-xl font-semibold mb-2 mt-5 md:mt-10 dark:text-white">
        {title}
      </h2>
      <p className="m-0 text-sm md:text-base font-medium dark:text-white">
        {description}
      </p>
    </div>
  );
};

