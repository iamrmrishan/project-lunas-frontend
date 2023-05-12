import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
  dropdown: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, dropdown, onClick }) => {
  return (
    <Link
      className={`${
        dropdown ? "font-normal text-base text-left" : "font-medium text-lg"
      } text-primaryText text-opacity-70 dark:text-secondaryText dark:text-opacity-70 transition hover:text-primaryText dark:hover:text-secondaryText dark:hover:text-white/75`}
      to={to}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
export default NavLink;
