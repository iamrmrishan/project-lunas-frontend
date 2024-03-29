import { IPost } from 'interfaces/post-interface';
import React from 'react';
import placeholder from "../../../assets/images/picture.png"

type QuestionsCardProps = {
  questions: IPost[];
  title: string;
};

const QuestionsCard: React.FC<QuestionsCardProps> = ({ questions, title }) => {
  return (
    <div className="bg-white dark:bg-secondaryBtn2 dark:bg-opacity-20 border dark:border-opacity-5 shadow rounded px-10 py-5">
      <h1 className="text-lg font-semibold mb-5 text-primaryText dark:text-secondaryText">
        {title}
      </h1>
      {questions.map((item) => (
        <div className="flex items-center my-3">
          <div className="mr-5 bg-primaryBtn2 rounded-full">
            <img
              src={item.mediaId[0] ? item.mediaId[0] : placeholder}
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

export default QuestionsCard;
