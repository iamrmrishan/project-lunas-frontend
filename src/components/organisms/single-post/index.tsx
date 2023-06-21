import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import {
  FiArrowUp,
  FiArrowDown,
  FiMessageCircle,
  FiShare,
  FiBookmark,
} from "react-icons/fi";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IPost } from "interfaces/post-interface";
import DOMPurify from "dompurify";

interface SinglePostProps {
  post: IPost;
}

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  const date = new Date().toLocaleString();
  const [value, setValue] = useState("");

  const htmlString = post.body;
  const sanitizedHTML = DOMPurify.sanitize(htmlString);

  const styles = {
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    p: {
      fontSize: "14px",
    },
  };

  return (
    <>
      <div className="bg-primaryColor rounded text-primaryText border dark:border-opacity-10 dark:rounded-lg p-4 mb-4 w-full mx-auto dark:bg-secondaryColor dark:text-secondaryText">
        <div className="flex items-start space-x-2">
          <div className="arrows mr-3 text-primaryText dark:text-secondaryText">
            <TbArrowBigUp />
            {34}
            <TbArrowBigDown />
          </div>
          <div className="post">
            <div className="bell float-right top-0 text-primaryText text-opacity-50">
              <BiBell size={20} />
            </div>
            <div className="text-xs mb-1">
              Posted by in r/sample on {date}
              Posted by u/{post.user.userName} in r/sample on {date}
            </div>
            <div className="title text-lg font-bold mb-3">{post.title}</div>

            <div className="mb-2 flex flex-wrap">
              {post.tags.map((tag) => (
                <span className="dark:bg-secondaryBtn2 bg-primaryBtn2 dark:text-secondaryText text-primaryText px-2 py-1 rounded-full text-xs mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>

            <div className={`${post.mediaId.length > 0 ? "py-3 pb-10" : ""}`}>
              <img src={post.mediaId[0]} alt="" />
            </div>

            <div
              className="post-text text-primaryText dark:text-secondaryText text-opacity-80 dark:text-opacity-80"
              // dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            >
              {/* <style>
                {`
          h1 {
            font-size: ${styles.h1.fontSize};
            font-weight: ${styles.h1.fontWeight};
          }

          h2 {
            font-size: ${styles.h2.fontSize};
            font-weight: ${styles.h2.fontWeight};
          }

          p {
            font-size: ${styles.p.fontSize};
          }
        `}
              </style> */}
              {post.body}
            </div>
            <div className="action-buttons">
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-primaryText hover:text-primaryText text-opacity-50 dark:text-secondaryText dark:hover:text-secondaryText dark:text-opacity-50 focus:outline-none">
                      <FiArrowUp size={20} />
                    </button>
                    <p className="text-primaryText dark:text-secondaryText text-opacity-50 dark:text-opacity-50">
                      <span className="font-bold">{100}</span>
                    </p>
                    <button className="text-primaryText hover:text-primaryText text-opacity-50 dark:text-secondaryText dark:hover:text-secondaryText dark:text-opacity-50 focus:outline-none">
                      <FiArrowDown size={20} />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-primaryText hover:text-primaryText text-opacity-50 dark:text-secondaryText dark:hover:text-secondaryText dark:text-opacity-50 focus:outline-none">
                      <FiMessageCircle size={20} />
                    </button>
                    <p className="text-primaryText dark:text-secondaryText text-opacity-50 dark:text-opacity-50">
                      <span className="font-bold">{0}</span> comments
                    </p>
                  </div>
                  <button className="text-primaryText hover:text-primaryText text-opacity-50 dark:text-secondaryText dark:hover:text-secondaryText dark:text-opacity-50 focus:outline-none">
                    <FiShare size={20} />
                  </button>
                  <button className="text-primaryText hover:text-primaryText text-opacity-50 dark:text-secondaryText dark:hover:text-secondaryText dark:text-opacity-50 focus:outline-none">
                    <FiBookmark size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="post-comment my-5">
              Comment as <span className="font-bold">@username</span>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <div className="comments"></div>
        </div>
      </div>
      <div className="space-y-4"></div>
    </>
  );
};

export default SinglePost;
