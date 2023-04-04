import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-white text-lg font-bold">
      {children}
    </a>
  );
};

export default Link;