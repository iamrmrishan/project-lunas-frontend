import React from 'react';
import { Main } from 'components';
import { MainLayout } from 'components/templates/main-layout';

const Home: React.FC = () => {
  return (
    <>
      <MainLayout
        className="main-content"
        children={<Main></Main>}
      ></MainLayout>
    </>
  );
};

export default Home;
