import React from 'react';
import data from 'meta.json';
import { Cards, Container, Footer, Header, Main } from 'components';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-3 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
      <Footer />
    </Container>
  );
};

export default Home;