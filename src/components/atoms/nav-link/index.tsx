import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  label: string;
  dropdown: boolean;
  onClick?: () => void;
  selected?:boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, dropdown, onClick, selected }) => {
  return (
    <Link
      className={`${
        
        dropdown ? "font-normal text-base text-left" : "font-medium text-lg"
      } text-primaryText  dark:text-secondaryText py-2 border-b-2 border-black ${!selected && `text-opacity-70 border-none  dark:text-opacity-70 no-underline`} transition hover:text-primaryText dark:hover:text-secondaryText dark:hover:text-white/75 `}
      to={to}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
export default NavLink;
