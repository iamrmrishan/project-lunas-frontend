import React, { useState } from 'react';
import NavLink from 'components/atoms/nav-link';
import LoginModal from 'pages/login';
import { useAuth } from 'providers/auth-provider';
import SignupModal from 'pages/signup';

interface DropdownProps {
  open: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ open }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
  };

  const menuItems = !isAuthenticated
    ? [
        { label: 'About', to: '/profile' },
        { label: 'Browse', to: '/browse' },
        { label: 'Login', to: '/login' },
        { label: 'Signup', to: '/signup'},
      ]
    : [
        { label: 'About', to: '/post' },
        { label: 'Browse', to: '/browse' },
        { label: 'Profile', to: '/profile' },
        { label: 'Make Review', to: '/' },
        { label: 'Ask about a product', to: '/create-post' },
        { label: 'Logout', onClick: () => handleLogoutClick() },
      ];

  return (
    <>
      {/* <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
          <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      /> */}
      <div className="mx-8 my-5">
        <ul className="flex flex-col items-left gap-4 text-sm text-primaryBtnText ">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              label={item.label}
              dropdown={true}
              onClick={item.onClick || open}
                          />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
