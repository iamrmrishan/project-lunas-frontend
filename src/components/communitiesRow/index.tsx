import { ChevronUpIcon } from "@heroicons/react/24/outline";
import {Img} from 'react-image'
import React from "react";
import Avatar from "../avatar";
import { Link } from "react-router-dom";

type Props = {
  topic: string;
  index: number;
};

function CommunitiesRow({ index, topic }: Props) {
  return (
    <div className="flex items-center space-x-2 border-t bg-white dark:bg-gray-700 px-4 py-2 last:rounded-b">
      <p>{index + 1}</p>
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400" />
      <Img
        src={`https://avatars.dicebear.com/api/open-peeps/${
          topic || "placeholder"
        }.svg`}
        alt="Avatar Image"
        width={50}
        height={50}
        className={`rounded-full border-gray-300 bg-white h-10 w-10`}
      />
      <p className="flex-1 truncate">r/{topic}</p>
      <Link to={`/subreddit/${topic}`}>
        <div className="cursor-pointer rounded-full bg-blue-500 px-3 text-white">
          View
        </div>
      </Link>
    </div>
  );
}

export default CommunitiesRow;