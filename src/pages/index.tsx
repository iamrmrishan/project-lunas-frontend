import React from 'react';
import data from 'meta.json';
import { Cards, Container, Footer, Header, Main } from 'components';
import Guidelines from 'components/guidelines';
import guidelineData from 'meta-guidelines.json'

const Home: React.FC = () => {

  return (
    <Container>
      <Header />
      <Main />
      <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {(data?.plugins ?? []).map((plugin) => (
        <Cards
          title={plugin.name}
          description={plugin.description}
          url={plugin.url}
          dmUrl={plugin.dmUrl}
        />
      ))}
      </div>
      </div>
      {/* <Guidelines topic="Guidelines" steps={guidelineData.guidelines} /> */}
      <Footer />
    </Container>
  );
};

export default Home;
