import Tag from 'components/atoms/tag';
import LimitedText from 'components/atoms/textLimiter';
import { IPost } from 'interfaces/post';
import React, { useState } from 'react';
import { BsChat } from 'react-icons/bs';
import {
  IoArrowDownCircleOutline,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoBookmarkOutline,
} from 'react-icons/io5';
import ReactSwipe from 'react-swipe';

type PostItemProps = {
  post: IPost;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [error, setError] = useState(false);

  let reactSwipeEl;

  return (
    <div
      className={`flex border ${'rounded'} 
       ${'border-gray-300 dark:border-gray-800'} bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-800 cursor-pointer`}
      onClick={console.log}
    >
      <div className="flex flex-col items-center p-2 w-10 border-r border-gray-200 dark:border-gray-700 text-medium">
        <IoArrowUpCircleOutline
          className={`${'text-gray-400'} text-2xl cursor-pointer`}
          onClick={console.log}
        />
        <p className="text-gray-400">{}</p>
        <IoArrowDownCircleOutline
          className={`${'text-gray-400'} text-2xl cursor-pointer`}
          onClick={console.log}
        />
      </div>
      <div className="flex flex-col w-full">
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error} </span>
          </div>
        )}
        <div className="p-4 space-y-1">
          <div className="flex items-center space-x-1 text-sm">
            <section>
              <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                  <div className="grid grid-cols-2 gap-1 md:grid-cols-1 ">
                    <ReactSwipe
                      className="carousel"
                      swipeOptions={{
                        continuous: true,
                        childCount: 3,
                        disableScroll: false,
                      }}
                      ref={(el) => (reactSwipeEl = el)}
                    >
                      <img
                        alt="Les Paul"
                        src={post.mediaId[0]}
                        className="aspect-square w-full rounded-xl object-cover"
                      />

                      <img
                        alt="Les Paul"
                        src={post.mediaId[0]}
                        className="aspect-square w-full rounded-xl object-cover"
                      />

                      <img
                        alt="Les Paul"
                        src={post.mediaId[0]}
                        className="aspect-square w-full rounded-xl object-cover"
                      />
                    </ReactSwipe>
                    <div className="flex inline-flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 ml-1">
                      <Tag name={post.tags[0]}></Tag>
                      <Tag name={post.tags[1]}></Tag>
                    </div>
                  </div>
                  <div className="static top-0">
                    <div className="flex justify-between">
                      <div className="max-w-[35ch] space-y-2">
                        <h1 className="text-xl font-bold sm:text-2xl dark:text-white text-justify">
                          {post.title}
                        </h1>

                        <p className="text-sm dark:text-gray-400">
                          Posted By {post.user.userName}
                        </p>

                        <div className="-ml-0.5 flex">
                          <svg
                            className="h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            className="h-5 w-5 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="prose max-w-none dark:text-gray-400 text-justify">
                        <LimitedText
                          text={post.body}
                          maxLength={200}
                        ></LimitedText>
                      </div>

                      <button className="mt-2 text-sm font-medium underline dark:text-gray-400">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex items-center ml-1 mb-1 text-medium font-semibold text-gray-500">
          <button className="flex items-center px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <BsChat className="text-gray-400 dark:text-white mr-1" />
            <span className="text-gray-400 dark:text-white">{14}</span>
          </button>

          <button className="flex items-center px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <IoArrowRedoOutline className="text-gray-400 dark:text-white" />
            <span className="text-gray-400 dark:text-white">Share</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <IoBookmarkOutline className="text-gray-400 dark:text-white mr-1" />
            <span className="text-gray-400 dark:text-white">Save</span>
          </button>
          {/* {userIsCreator && (
            <button
              className="flex items-center px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={console.log}
            >
              {loadingDelete ? (
                <svg className="animate-spin h-5 w-5 mr-1" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 1.962.421 3.84 1.167 5.445l1.62-1.154z"
                  ></path>
                </svg>
              ) : (
                <>
                  <AiOutlineDelete className="text-gray-400 dark:text-gray-500 mr-1" />
                  <span className="text-gray-400 dark:text-gray-500">
                    Delete
                  </span>
                </>
              )}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default PostItem;
