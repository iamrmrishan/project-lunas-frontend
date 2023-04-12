import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsChat, BsDot } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from 'react-icons/io5';
import ReactSwipe from 'react-swipe';

export type Post = {
  id?: string;
  communityId: string;
  creatorId: string;
  creatorDisplayName: string;
  title: string;
  body: string;
  numberOfComments: number;
  voteStatus: number;
  imageURL?: string;
  communityImageURL?: string;
  createdAt: string;
};

type PostItemProps = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue?: number;
  onVote: (
    event: React.MouseEvent<Element, MouseEvent>,
    post: Post,
    vote: number,
    communityId: string
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  onSelectPost?: (post: Post) => void;
  homePage?: boolean;
};

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3',
  },
];

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [error, setError] = useState(false);
  const [decryptedData, setDecryptedData] = useState({
    title: 'sample title',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    creatorDisplayName: '',
    imageURL: 'https://picsum.photos/200/300',
  });
  const singlePostPage = !onSelectPost;
  let reactSwipeEl;

  return (
    <div
      className={`flex border ${singlePostPage ? 'rounded-t' : 'rounded'} ${
        singlePostPage ? 'border-b-0' : ''
      } ${
        singlePostPage
          ? 'border-gray-300 dark:border-gray-700'
          : 'border-gray-300 dark:border-gray-800'
      } bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-800 cursor-pointer`}
      onClick={() => onSelectPost && onSelectPost(post)}
    >
      <div className="flex flex-col items-center p-2 w-10 border-r border-gray-200 dark:border-gray-700 text-medium">
        <IoArrowUpCircleOutline
          className={`${
            userVoteValue === 1 ? 'text-brand-100' : 'text-gray-400'
          } text-2xl cursor-pointer`}
          onClick={(event) => onVote(event, post, 1, post.communityId)}
        />
        <p className="text-gray-400">{post.voteStatus}</p>
        <IoArrowDownCircleOutline
          className={`${
            userVoteValue === -1 ? 'text-blue-400' : 'text-gray-400'
          } text-2xl cursor-pointer`}
          onClick={(event) => onVote(event, post, -1, post.communityId)}
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
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
                    <ReactSwipe 
                      className="carousel"
                      swipeOptions={{ continuous: true, childCount:3, disableScroll: false, }}
                      ref={(el) => (reactSwipeEl = el)}
                    >
                      <img
                        alt="Les Paul"
                        src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="aspect-square w-full rounded-xl object-cover"
                      />

                      <img
                        alt="Les Paul"
                        src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        className="aspect-square w-full rounded-xl object-cover"
                      />

                      <img
                        alt="Les Paul"
                        src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="aspect-square w-full rounded-xl object-cover"
                      />
                    </ReactSwipe>
                  </div>
                  <div className="static top-0">
                    <div className="flex inline-flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <strong className="rounded-full inline-flex items-center bg-emerald-100 px-3 py-0.5 text-xs font-medium tracking-wide text-emerald-700">
                        Product Review
                      </strong>
                      <strong className="rounded-full inline-flex items-center bg-amber-100 px-3 py-0.5 text-xs font-medium tracking-wide text-amber-700">
                        Music
                      </strong>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <div className="max-w-[35ch] space-y-2">
                        <h1 className="text-xl font-bold sm:text-2xl dark:text-white">
                          Fun Product That Does Something Cool
                        </h1>

                        <p className="text-sm dark:text-white">
                          Posted By snow_white
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
                      <div className="prose max-w-none dark:text-white">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsa veniam dicta beatae eos ex error culpa
                          delectus rem tenetur, architecto quam nesciunt, dolor
                          veritatis nisi minus inventore, rerum at recusandae?
                        </p>
                      </div>

                      <button className="mt-2 text-sm font-medium underline dark:text-white">
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
            <span className="text-gray-400 dark:text-white">
              {post.numberOfComments}
            </span>
          </button>

          <button className="flex items-center px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <IoArrowRedoOutline className="text-gray-400 dark:text-white" />
            <span className="text-gray-400 dark:text-white">Share</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <IoBookmarkOutline className="text-gray-400 dark:text-white mr-1" />
            <span className="text-gray-400 dark:text-white">Save</span>
          </button>
          {userIsCreator && (
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
          )}
        </div>
      </div>
    </div>
  );
};
export default PostItem;
