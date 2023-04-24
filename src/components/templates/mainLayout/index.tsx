import React, { ReactNode } from 'react';
import { Header } from '../../organisms/header';
import { Footer } from '../../organisms/footer';
import ResponsiveGrid from 'components/atoms/grid';

interface MainLayoutProps {
  children: ReactNode;
  className: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className="main-layout">
      <Header />
      <ResponsiveGrid >
        <main className={className}>{children}</main>
      </ResponsiveGrid>
      <Footer />
    </div>
  );
};
