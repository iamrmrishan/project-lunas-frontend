import LimitedText from 'components/atoms/text-limiter';
import React from 'react';
import { useScreenSize } from '../../../providers/screensize-provider';
import {
  FiArrowUp,
  FiArrowDown,
  FiMessageCircle,
  FiShare,
  FiBookmark,
} from 'react-icons/fi';
import { IPost } from 'interfaces/post';

type PostItemProps = {
  post: IPost;
};

const PostCard: React.FC<PostItemProps> = ({ post }) => {
  const date = new Date().toLocaleString();
  const screenSize = useScreenSize();

  return (
    <div className="bg-white border rounded-lg p-4 mb-4 w-full mx-auto dark:bg-gray-900 dark:text-white">
      <div className="flex items-center space-x-2">
        {post.mediaId[0] && (
          <img
            src={post.mediaId[0]}
            alt={post.title}
            className="w-16 h-16 object-cover rounded-lg"
          />
        )}
        <div className="flex-grow">
          <a
            href={post.mediaId[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold hover:underline"
          >
            {post.title}
          </a>
          <p className="text-gray-600 text-sm mt-1">
            Posted by u/{post.user.userName} in r/sample on {date}
          </p>
        </div>
      </div>
      {post.body && (
        <div className="mt-4">
          <LimitedText
            text={post.body}
            maxLength={screenSize == 'sm' ? 100 : 250}
          ></LimitedText>
        </div>
      )}
      <div className="mt-4 flex flex-wrap">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <FiArrowUp size={20} />
            </button>
            <p className="text-gray-600">
              <span className="font-bold">{100}</span>
            </p>
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <FiArrowDown size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
              <FiMessageCircle size={20} />
            </button>
            <p className="text-gray-600">
              <span className="font-bold">{0}</span> comments
            </p>
          </div>
          <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <FiShare size={20} />
          </button>
          <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <FiBookmark size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;