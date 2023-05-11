import React, { useState } from 'react';
import { HiArrowUp, HiArrowDown } from 'react-icons/hi';

export type CommentProps = {
  id: string;
  content: string;
  author: string;
  score: number;
  replies?: CommentProps[];
};

export const Comment: React.FC<CommentProps> = ({ id, content, author, score, replies = [] }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 ml-4">
      <div className="flex items-start">
        <div className="flex flex-col items-center mr-4">
          <HiArrowUp className="text-2xl cursor-pointer" />
          <span>{score}</span>
          <HiArrowDown className="text-2xl cursor-pointer" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{content}</p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <span>Posted by u/{author}</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {replies.map((reply, index) => (
          <Comment key={index} {...reply} />
        ))}
      </div>
    </div>
  );
};