import React, { ReactNode } from 'react';
import { Header } from '../../organisms/header';
import { Footer } from '../../organisms/footer';

interface PostLayoutProps {
  children: ReactNode;
  className: string;
}

export const PostLayout: React.FC<PostLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="main-layout">
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
};