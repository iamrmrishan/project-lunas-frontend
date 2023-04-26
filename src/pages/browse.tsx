import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/molecules/search';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from 'redux/selectors/post-selector';
import { postSlice } from 'redux/slices/post-slice';
import RedditPost from 'components/molecules/post-card';

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
                  <RedditPost post={post}></RedditPost>
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
