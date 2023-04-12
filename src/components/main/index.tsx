import React from 'react';

export const Main: React.FC = () => {
  return (
    <><section className="bg-gray-50 dark:bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Get to Know About Products in Next Level
          </h2>

          <p className="hidden text-gray-500 dark:text-gray-400 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="search" className="sr-only">
                Seaarch
              </label>

              <input
                type="search"
                placeholder="Search Products"
                className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Search </span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section><section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Trusted by all around the world
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
              laborum labore provident impedit esse recusandae facere libero harum
              sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
              >
                <dt
                  className="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
                >
                  Total reviews
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  4.8m
                </dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
              >
                <dt
                  className="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
                >
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
              </div>

              <div
                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
              >
                <dt
                  className="order-last text-lg font-medium text-gray-500 dark:text-gray-400"
                >
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
              </div>
            </dl>
          </div>
        </div>
      </section></>
  );
};
