import { Container, Footer, Header } from "components";
import { useLocation } from "react-router-dom";
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

const SinglePostPage: React.FC = () => {
  const location = useLocation();
  const { post } = location.state;

  const date = new Date().toLocaleString();
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto lg:px-8 md:px-6 sm:px-4 py-6 dark:bg-secondaryColor bg-primaryColor">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4">
              <div className="bg-primaryColor rounded text-primaryText border dark:border-opacity-10 dark:rounded-lg p-4 mb-4 w-full mx-auto dark:bg-secondaryColor dark:text-secondaryText">
                <div className="flex items-start space-x-2">
                  <div className="arrows mr-3">
                    <TbArrowBigUp />
                    {34}
                    <TbArrowBigDown />
                  </div>
                  <div className="post">
                    <div className="bell float-right top-0 text-primaryText text-opacity-50">
                      <BiBell size={20} />
                    </div>
                    <div className="title text-xs mb-1">
                      Posted by u/{post.user.userName} in r/sample on {date}
                    </div>
                    <div className="title text-lg font-bold mb-3">
                      {post.title}
                    </div>

                    <div className="mb-2 flex flex-wrap">
                      {post.tags.map((tag) => (
                        <span className="dark:bg-secondaryBtn2 bg-primaryBtn2 dark:text-secondaryText text-primaryText px-2 py-1 rounded-full text-xs mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="post-image py-3 pb-10">
                      <img src={post.mediaId[0]} alt="" />
                    </div>
                    <div className="post-text">{post.body}</div>
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
                      
                      <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                      />
                    </div>
                  </div>
                  <div className="comments"></div>
                </div>
              </div>
              <div className="space-y-4"></div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SinglePostPage;