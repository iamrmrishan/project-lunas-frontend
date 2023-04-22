import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  return (
    <Link
      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white font-medium text-lg dark:hover:text-white/75"
      to={to}
    >
      {label}
    </Link>
  );
};
export default NavLink;
