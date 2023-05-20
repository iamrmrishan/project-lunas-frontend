import { Container, Footer, Header } from "components";
import { SearchPostLink } from "components/molecules/search";
import { ProfileTabs } from "components/organisms/Profile-tabs";
import { UserProfileCard } from "components/molecules/user-profile-card";
import React from "react";
import SlidingPane from "components/organisms/profile-sliding-pane";

const ProfilePage: React.FC = () => {
  const items = Array.from({ length: 12 }, (_, index) => index + 1);

  const tabs = [
    { id: 1, title: "OVERVIEW", link: "/" },
    { id: 2, title: "POSTS", link: "/" },
    { id: 3, title: "COMMENTS", link: "/" },
    { id: 4, title: "HISTORY", link: "/" },
    { id: 5, title: "SAVED", link: "/" },
    { id: 6, title: "UPVOTED", link: "/" },
    { id: 7, title: "DOWNVOTED", link: "/" },
  ];
  return (
    <>
      <Header />

      <Container>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4">
              <SearchPostLink />
              <ProfileTabs tabs={tabs} />
              {/* <div className="space-y-4">
                <PostItem post={undefined}></PostItem>
              </div> */}
            </div>
            <div className="hidden md:block ipad:hidden float-right">
              <UserProfileCard slidingPane={false}></UserProfileCard>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <SlidingPane />
        </div>
        {/* <ResponsiveGrid desktopColumns={4} gap={5}>
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
        </ResponsiveGrid> */}
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
