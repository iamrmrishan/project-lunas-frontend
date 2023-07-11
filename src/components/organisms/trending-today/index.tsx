import Trending from "components/molecules/trending-today";
import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "redux/selectors/post-selector";

export const TrendingToday: React.FC = () => {

  const posts = useSelector(selectPosts);
  return (
    <div className='mx-10 sm:m-0'>
      <div className="font-bold text-lg my-4 text-primaryText dark:text-secondaryText">Trending Today</div>
      <div className="sm:flex justify-between mb-8 overflow-scroll ">
        {posts.map((item) => (
          <Trending post={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingToday;
