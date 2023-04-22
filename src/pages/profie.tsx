import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/searchPost';
import PostItem from 'components/postCard';
import { ProfileTabs } from 'components/ProfileTabs';
import { UserProfileCard } from 'components/userProfileCard';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4">
              <SearchPostLink />
              <ProfileTabs></ProfileTabs>
              <div className="space-y-4">
                <PostItem post={undefined}></PostItem>
              </div>
            </div>
            <div className="hidden md:block ipad:hidden">
              <UserProfileCard></UserProfileCard>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
