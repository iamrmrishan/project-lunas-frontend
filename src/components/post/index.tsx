import React from 'react';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Time } from "../time"
import {Img} from 'react-image'
import { Link } from 'react-router-dom';

interface Post {
  title: string;
  description: string;
}

interface PostProps {
  topic: string;
  posts: Post[];
}

const Post: React.FC<PostProps> = ({ topic, posts }) => {
  return (
    <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white dark:bg-gray-700 shadow-sm hover:border hover:border-gray-600">
    {/* Votes */}
    <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 dark:bg-gray-800 p-4 text-gray-400">
      <ArrowUpIcon
        onClick={console.log}
      />
      <p className="text-xs font-bold text-black dark:text-gray-50">
        {24}
      </p>
      <ArrowDownIcon
        onClick={console.log}
        className={`voteButtons hover:text-red-400  ${
          //vote === false && "text-red-400"
        'sd'}`}
      />
    </div>

    <div className="p-3 pb-1">
      {/* Header */}
      <div className="flex items-center space-x-2">
        {/* @ts-expect-error Server Component
        <Avatar seed={post.subreddit.topic} /> */}
        <Img
          src={`https://avatars.dicebear.com/api/open-peeps/${
            'sample topic' || 'snow_white' || "placeholder"
          }.svg`}
          alt="Avatar Image"
          width={50}
          height={50}
          className={`rounded-full border-gray-300 bg-white h-10 w-10`}
        />
        <p className="text-xs text-gray-400">
          <Link to={`/subreddit/${'sample topic'}`}>
            <span className="font-bold text-black dark:text-gray-300 hover:text-blue-400 hover:underline">
              r/{'sample topic'}
            </span>{" "}
          </Link>
          · Posted by u/{'snow white'} <Time date={"20.12.2022"} />
        </p>
      </div>

      {/* Body */}
      <div className="py-4">
        <Link to={`/post/`}>
          {" "}
          <h2 className="text-xl font-semibold dark:text-gray-300">
            {'sample title'}
          </h2>
        </Link>
        <h2 className="mt-2 text-sm font-light dark:text-gray-300">
          {'sample body'}
        </h2>
      </div>

      {/* Image */}
      <img src={'https://picsum.photos/200/300'} alt="" className="w-full" />

      {/* Footer */}
      <div className="flex space-x-4 text-gray-400">
        <div className="postButtons">
          <ChatBubbleBottomCenterIcon className="h-6 w-6" />
          <p className="">{24} Comments</p>
        </div>
        <div className="postButtons">
          <GiftIcon className="h-6 w-6" />
          <p className="hidden sm:inline">Award</p>
        </div>
        <div className="postButtons">
          <ShareIcon className="h-6 w-6" />
          <p className="hidden sm:inline">Share</p>
        </div>
        <div className="postButtons">
          <BookmarkIcon className="h-6 w-6" />
          <p className="hidden sm:inline">Save</p>
        </div>
        <div className="postButtons">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Post;
