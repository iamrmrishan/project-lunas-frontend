import React from 'react';
import { Container, Footer, Header, Main } from 'components';
import GoogleConnectButton from 'components/googleConnectButton';
import { CreatePostLink } from 'components/createPost';
import PostItem, { Post } from 'components/post';
import Recommendation from 'components/categories';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Main></Main>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
