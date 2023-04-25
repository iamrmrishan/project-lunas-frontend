import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/molecules/searchPost';
import { ProfileTabs } from 'components/organisms/ProfileTabs';
import { UserProfileCard } from 'components/molecules/userProfileCard';
import React from 'react';
import Post from 'components/molecules/post';

const PostPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4">
              <Post></Post>
              <div className="space-y-4"></div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PostPage;
