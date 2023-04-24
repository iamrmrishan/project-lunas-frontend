import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/molecules/searchPost';
import PostItem from 'components/molecules/postCard';
import { ProfileTabs } from 'components/organisms/ProfileTabs';
import { UserProfileCard } from 'components/molecules/userProfileCard';
import React from 'react';
import ResponsiveGrid from 'components/atoms/grid';

const ProfilePage: React.FC = () => {
  const items = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      <Header />

      <Container>
        {/* <div className="container mx-auto px-4 py-6">
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
        </div> */}
        <ResponsiveGrid desktopColumns={4} gap={5}>
          {items.map((item) => (
            // <div
            //   key={item}
            //   className="bg-blue-500 text-white p-6 rounded shadow-md"
            // >
            //   Item {item}
            // </div>
            <div className="col-span-4 md:col-span-3 ipad:col-span-4 text-white p-6 rounded shadow-md">
              <SearchPostLink></SearchPostLink>
            </div>
          ))}
        </ResponsiveGrid>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
