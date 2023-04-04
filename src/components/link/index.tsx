import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-white text-sm md:text-lg font-bold leading-none tracking-wide">
      {children}
    </a>
  );
};

export default Link;