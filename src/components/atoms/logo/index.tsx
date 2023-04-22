import React from 'react';
import LogoSvg from 'assets/icons/logo';

const Logo: React.FC = () => {
  return (
    <a className="block text-teal-600 dark:text-teal-600" href="/">
      <span className="sr-only">Home</span>
      <LogoSvg />
    </a>
  );
};

export default Logo;
