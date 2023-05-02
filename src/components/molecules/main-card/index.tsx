import Button from "components/atoms/button";
import Input from "components/atoms/input";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Main: React.FC = () => {
  return (
    <>
      <section className="bg-primaryColor dark:bg-secondaryColor">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Get to Know About Products in Next Level
            </h2>

            <p className="hidden text-gray-500 dark:text-gray-400 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <Input
                  type="search"
                  placeholder="Search Products"
                  className="w-full rounded-md bg-transparent border-primaryText p-3 shadow-sm transition focus:outline-none focus:ring dark:border-gray-700 dark:text-white"
                ></Input>
              </div>
              <Button
                className={
                  "group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-primaryBtn dark:bg-secondaryBtn dark:hover:bg-secondaryBtnHover px-5 py-3 text-primaryBtnText dark:text-secondaryBtnText transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                }
                icon={<AiOutlineArrowRight></AiOutlineArrowRight>}
                text="Search"
              ></Button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-primaryHeader dark:bg-secondaryHeader">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Trusted by all around the world
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                  Total reviews
                </dt>

                <dd className="text-4xl font-extrabold text-primaryText dark:text-secondaryText md:text-5xl">
                  48
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                  Total Questions
                </dt>

                <dd className="text-4xl font-extrabold text-primaryText dark:text-secondaryText md:text-5xl">
                  24
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
                  Total Users
                </dt>

                <dd className="text-4xl font-extrabold text-primaryText dark:text-secondaryText md:text-5xl">
                  86
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};
