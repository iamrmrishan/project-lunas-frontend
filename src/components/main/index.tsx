import React from "react";
import SearchBar from "components/search";

export const Main: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-8 md:flex-row md:py-32">
      <div>
        <h1 className="text-4xl md:text-6xl mb-2 font-extrabold dark:text-white leading-tight">
          <span className="block">Get to Know About</span>
          <span className="block">Products in Next Level</span>
        </h1>
        <div className="container mx-auto px-4 md:p-10">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
