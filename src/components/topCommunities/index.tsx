import React from 'react';
import CommunitiesRow from '../communitiesRow';

type Props = {};

function TopCommunities({}: Props) {
  return (
    <div className="flex-col sticky top-36 ml-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white dark:bg-gray-700 lg:inline-flex">
      <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
      <div>
        <CommunitiesRow
          key={1}
          topic={'sample'}
          index={1}
        />
      </div>
    </div>
  );
}

export default TopCommunities;
