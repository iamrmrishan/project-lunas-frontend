import React, { useState } from 'react';
import DarkModeToggle from 'components/darkModeToggle';
import LoginModal from 'components/loginModal';
import SignupModal from 'components/signupModal';
import LogoSvg from 'assets/icons/logo';
import { Link } from 'react-router-dom';

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
    <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
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
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <LogoSvg></LogoSvg>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
              <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white font-medium text-lg dark:hover:text-white/75"
                  to="/"
                >
                  About
                </Link>

                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white font-medium text-lg dark:hover:text-white/75"
                  to="/browse"
                >
                  Browse Product Reviews
                </Link>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <button onClick={handleLoginClick}>
                <a className="btn rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500">
                  Login
                </a>
              </button>
              <div className="hidden sm:flex">
                <button onClick={handleSignUpClick}>
                  <a className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    Register
                  </a>
                </button>
              </div>
            </div>
            <DarkModeToggle></DarkModeToggle>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
