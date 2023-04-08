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
<article
  className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src={darkMode ? dmUrl : url}
    className="h-56 w-full object-fill"
  />

  <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
        {title}
      </h3>
    </a>

    <p
      className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      {description}
    </p>
  </div>
</article>
  );
};

