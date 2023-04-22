import React, { useEffect } from 'react';
import { Container, Footer, Header, Main } from 'components';

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
