import LimitedText from "components/atoms/text-limiter";
import { IPost } from "interfaces/post-interface";
import { useScreenSize } from "providers/screensize-provider";
import React from "react";
import { removeHtmlTags } from "utils/html-utils";

interface TrendingProps {
  post: IPost;
}

export const Trending: React.FC<TrendingProps> = ({ post }) => {
  const screenSize = useScreenSize();

  return (
    <div
      className={`bg-cover bg-center shadow rounded h-40 sm:w-80 max-w-max p-4 mb-10 md:mb-0 mr-4 flex flex-col justify-end`}
      style={{
        backgroundImage: `url(${post.mediaId})`,
        filter: 'brightness(0.8)',
      }}
    >
      <div className="font-bold">
        <LimitedText
          text={removeHtmlTags(post.title)}
          maxLength={screenSize === "sm" ? 100 : 250}
        ></LimitedText>
      </div>
      <div className="truncate ">
        <LimitedText
          text={removeHtmlTags(post.body)}
          maxLength={screenSize === "sm" ? 100 : 250}
        ></LimitedText>
      </div>
      <div className="flex">
        <div>r/sample and more</div>
      </div>
    </div>
  );
};

export default Trending;
