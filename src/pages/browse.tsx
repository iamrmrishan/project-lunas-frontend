import { Container, Footer, Header } from 'components';
import { SearchPostLink } from 'components/molecules/search';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from 'redux/selectors/post-selector';
import { postSlice } from 'redux/slices/post-slice';
import RedditPost from 'components/molecules/post-card';

const BrowsePage: React.FC = () => {
  // const dispatch = useDispatch();
  // const posts = useSelector(selectPosts);
  // useEffect(() => {
  //   dispatch(postSlice.actions.searchPosts());
  // }, [dispatch]);
  const posts = [
    {
      id: '638db3a2754ae65cef6c192f',
      userId: '638ca63ab7d6bbee132fe80b',
      title: 'Nvidia GeForce RTX 3080 review',
      body: "When the Nvidia GeForce RTX 3080 was first released, it had to significantly improve upon Nvidia's top-tier graphics card from the Turing era, so expectations couldn't have been higher. But just like the rest of the Nvidia Ampere, the RTX 3080 hasn't just been more than up to the challenge, it absolutely redefines the performance of the elite graphics cards by bringing fast, 4K gaming at an accessible, if not totally affordable, MSRP. In fact, the improvements of the RTX 3080 over the cards it’s replaced seems to be the biggest generation leap in power we’ve seen in a long time. It performs 20-30% better than the card in our Nvidia GeForce RTX 2080 Ti review and, more impressively, 50-80% better than the one in our Nvidia GeForce RTX 2080 review. What makes this GPU all the more attractive is that performance bump comes with a much more reasonable retail price. It’s almost half the cost of the previous generation GPU. The Nvidia GeForce RTX 3080 makes high-end gaming much more attainable for the average gamer, running the best PC games with faster refresh rates and higher resolutions for less money.",
      tags: ['tag1', 'product review'],
      mediaId: [
        'https://cdn.mos.cms.futurecdn.net/ypj7i7koDnRTBNvjZzwT7R-1200-80.jpg.webp',
      ],
      categoryId: '638db54f5d0365a5dac24734',
      createdAt: '1999-12-31T18:00:00.000Z',
      updatedAt: '1999-12-31T18:00:00.000Z',
      user: {
        id: '638ca63ab7d6bbee132fe80b',
        email: 'rishancooool@gmail.com',
        userName: 'ice-man',
        password:
          '$2b$10$AnlhjOGJSPx4PtMaxGfL9ukxXaxH1hOXWGCq3QiwpkhqzQEmEU8.S',
        points: '0',
        createdAt: '1999-12-31T18:00:00.000Z',
        updatedAt: null,
      },
    },
    {
      id: '638db9f45d0365a5dac24736',
      userId: '638ca63ab7d6bbee132fe80b',
      title: 'BioShock Infinite PC Review',
      body: "BioShock Infinite aims so damn high – fittingly, since its alternate-reality 1912 city of Columbia literally floats atop clouds – that it’s a wonder it successfully hits any of its lofty goals at all. But it does hit them, again and again. A stunning original world of retro-sci-fi technology and gorgeous scenery. A cast of fully fleshed-out, memorable characters who deliver real emotional impact. A great villain and a greater monster. New and thrilling ways of traveling and changing the world around you. A story twist most people won't see coming. Even when it does occasionally miss, another hit follows so quickly that the stumble almost feels like a setup to increase the effect. Infinite comes through as a true, worthy follow-up to BioShock, one of the most-renowned shooters of this generation. In my book, it becomes one itself.\nIrrational Games – a studio that’s made a name for itself in eschewing predictability and is known for pathological cybervillains and brutish Big Daddies who earned our sympathy in their staunch protection of Little Sisters – somehow makes a city built on the clouds seem plausible. It's a place that feels alive. Townsfolk bustle in the plaza streets, birds flit about almost everywhere, and propaganda extols the local prophet's racist, ultra-nationalist beliefs. Columbia has its own history and hierarchy, to a degree that most shooters – or games of any genre, for that matter – can’t even aspire. It's created using a vibrant color palette and a unified vision of a twisted, jingoistic take on America. Simultaneously, no two of its many diverse areas ever feel alike. All these elements give this fantastical city a sterling sense of genuine place.",
      tags: ['tag1'],
      mediaId: [
        'https://assets2.ignimgs.com/2013/03/21/bioshockinfinite0320131600jpg-480b88.jpg?width=1920',
      ],
      categoryId: '638db54f5d0365a5dac24734',
      createdAt: '1999-12-31T18:00:00.000Z',
      updatedAt: '1999-12-31T18:00:00.000Z',
      user: {
        id: '638ca63ab7d6bbee132fe80b',
        email: 'rishancooool@gmail.com',
        userName: 'ice-man',
        password:
          '$2b$10$AnlhjOGJSPx4PtMaxGfL9ukxXaxH1hOXWGCq3QiwpkhqzQEmEU8.S',
        points: '0',
        createdAt: '1999-12-31T18:00:00.000Z',
        updatedAt: null,
      },
    },
    {
      id: '638f6a766bcc965bc1880f4c',
      userId: '638ca63ab7d6bbee132fe80b',
      title: 'Apple iPhone 14 review: Everything you need to know',
      body: "There's more to the new iPhone 14 than meets the eye. The iPhone 14 features an improved camera system that delivers better low-light performance and a faster and brighter TrueDepth camera with autofocus. On the video front, there’s a new Action mode for super steady footage.",
      tags: ['Product review', 'Mobile'],
      mediaId: [
        'https://cdn.mos.cms.futurecdn.net/JpX5tK8P6WQsufCVoM9c8E-1200-80.jpg.webp',
      ],
      categoryId: '638db54f5d0365a5dac24734',
      createdAt: '1999-12-31T18:00:00.000Z',
      updatedAt: '1999-12-31T18:00:00.000Z',
      user: {
        id: '638ca63ab7d6bbee132fe80b',
        email: 'rishancooool@gmail.com',
        userName: 'ice-man',
        password:
          '$2b$10$AnlhjOGJSPx4PtMaxGfL9ukxXaxH1hOXWGCq3QiwpkhqzQEmEU8.S',
        points: '0',
        createdAt: '1999-12-31T18:00:00.000Z',
        updatedAt: null,
      },
    },
  ];

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
