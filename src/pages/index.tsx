import React, { useEffect } from 'react';
import { Container, Footer, Header, Main } from 'components';
import { MainLayout } from 'components/templates/mainLayout';

const Home: React.FC = () => {
  return (
    <>
      <MainLayout
        className="main-content col-span-4"
        children={<Main></Main>}
      ></MainLayout>
    </>
  );
};

export default Home;
