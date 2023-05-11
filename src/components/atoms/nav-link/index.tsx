import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return (
    <Link
      className="text-primaryText text-opacity-70 dark:text-secondaryText dark:text-opacity-70 transition hover:text-primaryText dark:hover:text-secondaryText font-medium text-lg dark:hover:text-white/75"
      to={to}
    >
      {label}
    </Link>
  );
};
export default NavLink;
