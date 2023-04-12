import React from "react";
import { GiCheckedShield } from "react-icons/gi";

const Premium = () => {
  const bg = "bg-white dark:bg-gray-800";
  const borderColor = "border-gray-300 dark:border-gray-700";

  return (
    <article className="group">
  <img
    alt="Lava"
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
  />

  <div className="p-4">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Finding the Journey to Mordor
      </h3>
    </a>

    <p
      className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
  );
};

export default Premium;