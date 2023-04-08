// src/pages/NewPage.tsx

import { Container, Footer, Header } from 'components';
import Feed from 'components/feed';
import Post from 'components/post';
import PostBox from 'components/postBox';
import TopCommunities from 'components/topCommunities';
import React from 'react';

const NewPage: React.FC = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
    {/* <PostBox /> */}
    <div className="flex">
      <Feed />
      {/* List subreddits */}
      <TopCommunities />
    </div>
  </div>
  );
};

export default NewPage;
