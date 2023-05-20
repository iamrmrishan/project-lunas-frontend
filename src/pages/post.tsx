import { Container, Footer, Header } from 'components';
import React, { useEffect } from 'react';
import SinglePost from 'components/organisms/single-post';
import { useDispatch, useSelector } from 'react-redux';
import { postSlice } from 'redux/slices/post-slice';
import {
  selectLoader,
  selectPosts,
  selectSinglePost,
} from 'redux/selectors/post-selector';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import QuestionsCard from 'components/molecules/question-card';
import { NavigationType, useNavigationType } from 'react-router-dom';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navType: NavigationType = useNavigationType(); //wip - when user click back - clear state
  const post = useSelector(selectSinglePost);
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoader);
  useEffect(() => {
    dispatch(postSlice.actions.getPostById(id));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <div className="container mx-auto lg:px-8 md:px-6 sm:px-4 py-6 dark:bg-secondaryColor bg-primaryColor">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 md:col-span-3 ipad:col-span-4 m-auto">
              {!loading ? (
                <SinglePost post={post}></SinglePost>
              ) : (
                <Skeleton></Skeleton>
              )}
            </div>
            <div className="col-span-4 lg:col-span-1 ">
              <QuestionsCard questions={posts} title="Top Trending Reviews" />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PostPage;
