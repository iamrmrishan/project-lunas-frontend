import React, { useState } from 'react';
import DarkModeToggle from 'components/molecules/darkModeToggle';
import LoginModal from 'components/organisms/loginModal';
import SignupModal from 'components/organisms/signupModal';
import Logo from 'components/atoms/logo';
import NavLink from 'components/atoms/navLink';
import HamburgerButton from 'components/atoms/hamburgerButton';
import Button from 'components/atoms/button';

export const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignUpClick = () => {
    setIsSignupModalOpen(true);
  };

  const handleSignupModalClose = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <header aria-label="Site Header" className="bg-white dark:bg-gray-900 ">
      <div className="mx-auto max-w-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={handleLoginModalClose}
          />
          <SignupModal
            isOpen={isSignupModalOpen}
            onClose={handleSignupModalClose}
          />
          <Logo />
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <NavLink to="/post" label="About" />
              <NavLink to="/browse" label="Browse Product Reviews" />
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button onClick={handleLoginClick} text="Login" />
            <Button onClick={handleSignUpClick} text="Signup" />
            <DarkModeToggle />
            <HamburgerButton />
          </div>
        </div>
      </div>
    </header>
  );
};
