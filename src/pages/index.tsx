import React from 'react';
import data from 'meta.json';
import { Cards, Container, Footer, Header, Main } from 'components';

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
