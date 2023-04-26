import React, { useState } from 'react';
import DarkModeToggle from 'components/molecules/dark-mode-toggle';
import LoginModal from 'components/organisms/login-modal';
import SignupModal from 'components/organisms/signup-modal';
import Logo from 'components/atoms/logo';
import NavLink from 'components/atoms/nav-link';
import Button from 'components/atoms/button';
import { GiHamburgerMenu } from 'react-icons/gi';

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
              <NavLink to="/browse" label="Browse" />
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              <Button
                className="btn rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                onClick={handleLoginClick}
                text="Login"
              />
              <Button
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                onClick={handleSignUpClick}
                text="Signup"
              />
            </div>
            <DarkModeToggle />
            <Button
              className={
                'block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
              }
              icon={<GiHamburgerMenu></GiHamburgerMenu>}
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};
