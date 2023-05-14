import NavLink from "components/atoms/nav-link";
import LoginModal from "components/organisms/login-modal";
import React from "react";

interface LoginModalProps {
  open: () => void;
}

const Dropdown: React.FC<LoginModalProps> = ({open}) => {
  const menuItems = [
    { label: "About", to: "/post" },
    { label: "Browse", to: "/browse" },
    { label: "Make Review", to: "/" },
    { label: "Ask about a product", to: "/" },
  ];
  return (
    <div className="mx-8 my-5">
      <ul className="flex flex-col items-left gap-4 text-sm text-primaryBtnText ">
        {menuItems.map((item) => (
          <NavLink to={item.to} label={item.label} dropdown={true} onClick={open} />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
