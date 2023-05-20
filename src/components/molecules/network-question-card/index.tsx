import { IPost } from 'interfaces/post-interface';
import React from 'react';

type NetworkQuestionProps = {
  questions: IPost[];
};

const NetworkQuestions: React.FC<NetworkQuestionProps> = ({ questions }) => {
  return (
    <div className="border dark:border-opacity-10 rounded px-10 py-5">
      <h1 className="text-lg font-semibold mb-5 text-primaryText dark:text-secondaryText">
        Hot Network Questions
      </h1>
      {questions.map((item) => (
        <div className="flex items-center my-3">
          <div className="mr-5">
            <img
              src={item.mediaId[0]}
              alt="pic"
              className="w-6 h-6 object-cover rounded-full"
            />
          </div>
          <div className="w-4/5 text-sm text-primaryText dark:text-secondaryText hover:text-primaryText dark:hover:text-secondaryText cursor-pointer text-opacity-80 dark:text-opacity-80">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkQuestions;
