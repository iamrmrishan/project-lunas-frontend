import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/molecules/search';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoader, selectPosts } from 'redux/selectors/post-selector';
import { postSlice } from 'redux/slices/post-slice';
import RedditPost from 'components/molecules/post-card';
import NetworkQuestions from 'components/molecules/network-question-card';
import { IPost } from 'interfaces/post-interface';
import SinglePostPage from 'components/organisms/single-post';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import slugify from 'utils/slugify-utils';

const BrowsePage: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoader);
  useEffect(() => {
    dispatch(postSlice.actions.searchPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto lg:px-8 md:px-6 sm:px-4 py-6 dark:bg-secondaryColor bg-primaryColor">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4 m-auto">
              <SearchPostLink />

              {posts?.map((post) => (
                <Link
                  key={post.id}
                  to={`/post/${post.id}/${slugify(post.title)}`}
                >
                  <RedditPost post={post} loading={loading}></RedditPost>
                </Link>
              ))}
            </div>
            <div className="col-span-4 lg:col-span-1 ">
              <NetworkQuestions questions={posts} />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default BrowsePage;
