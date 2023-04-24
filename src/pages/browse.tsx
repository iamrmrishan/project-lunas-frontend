import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/molecules/searchPost';
import PostItem from 'components/molecules/postCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from 'redux/selectors/postSelector';
import { postSlice } from 'redux/slices/postSlice';

const BrowsePage: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  useEffect(() => {
    dispatch(postSlice.actions.searchPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4">
              <SearchPostLink />

              {posts?.map((post) => (
                <div key={post.title} className="space-y-4">
                  <PostItem post={post}></PostItem>
                </div>
              ))}
            </div>
            <div className="hidden md:block ipad:hidden">
              <div className="col-span-1 space-y-5">
                <div className="w-full flex items-center"></div>
              </div>
              <div className="col-span-1 space-y-5 mt=5"></div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default BrowsePage;
