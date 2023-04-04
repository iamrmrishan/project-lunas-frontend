import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Category 1', 'Category 2', 'Category 3'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex items-center bg-white rounded-full border-2 border-black dark:bg-black">
      <div className="relative inline-flex">
        <label htmlFor="categories" className="sr-only">
          Categories
        </label>
        <select
          id="categories"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="rounded-full-md rounded-full items-center pl-3 pr-10 py-3 text-white focus:outline-none focus:ring-1 focus:ring-black focus:border-black bg-black font-bold"
        >
          <option value="">Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full px-3 py-2 rounded-full focus:none"
      />
    </div>
  );
};

export default SearchBar;