import { Container, Footer, Header } from 'components';
import Recommendation from 'components/categories';
import PersonalHome from 'components/createCategory';
import { CreatePostLink } from 'components/createPost';
import PostItem, { Post } from 'components/post';
import Premium from 'components/premiumCard';
import React from 'react';

const BrowsePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3">
              <CreatePostLink />
              <div className="space-y-4">
                <PostItem
                  post={{
                    id: '1',
                    communityId: '1',
                    creatorId: '1',
                    creatorDisplayName: 'sdsd',
                    title: 'dsds',
                    body: 'dsdsdsd',
                    numberOfComments: 2,
                    voteStatus: 21,
                    imageURL: 'https://picsum.photos/200/300',
                    communityImageURL: 'https://picsum.photos/200/300',
                    createdAt: '20.12.2022',
                  }}
                  onVote={function (
                    event: React.MouseEvent<SVGElement, MouseEvent>,
                    post: Post,
                    vote: number,
                    communityId: string,
                    postIdx?: number
                  ): void {
                    throw new Error('Function not implemented.');
                  }}
                  onDeletePost={function (post: Post): Promise<boolean> {
                    throw new Error('Function not implemented.');
                  }}
                  userIsCreator={false}
                ></PostItem>
                  <PostItem
                  post={{
                    id: '1',
                    communityId: '1',
                    creatorId: '1',
                    creatorDisplayName: 'sdsd',
                    title: 'dsds',
                    body: 'dsdsdsd',
                    numberOfComments: 2,
                    voteStatus: 21,
                    imageURL: 'https://picsum.photos/200/300',
                    communityImageURL: 'https://picsum.photos/200/300',
                    createdAt: '20.12.2022',
                  }}
                  onVote={function (
                    event: React.MouseEvent<SVGElement, MouseEvent>,
                    post: Post,
                    vote: number,
                    communityId: string,
                    postIdx?: number
                  ): void {
                    throw new Error('Function not implemented.');
                  }}
                  onDeletePost={function (post: Post): Promise<boolean> {
                    throw new Error('Function not implemented.');
                  }}
                  userIsCreator={false}
                ></PostItem>
              </div>
            </div>
            <div className="hidden md:block">
    
              <div className="col-span-1 space-y-5">
              <PersonalHome />
              </div>
              <div className="col-span-1 space-y-5 mt=5">
              <PersonalHome />
              </div>
              <Recommendation />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default BrowsePage;
