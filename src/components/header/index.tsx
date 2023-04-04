import React, { useState } from 'react';
import { Button, Logo } from 'components';
import Link from 'components/link';
import DarkModeToggle from 'components/darkModeToggle';
import LoginModal from 'components/loginModal';
import SignupModal from 'components/signupModal';

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
    <div className="text-center flex flex-wrap justify-between items-center bg-black px-4 py-2 md:px-8">
     <div className="mx-auto md:mx-0">
        <Logo />
      </div>
      <nav className="hidden md:flex items-center space-x-10 mt-4 md:mt-0">
        <Link href="/about">About</Link>
        <Link href="/browse">Browse Product Reviews</Link>
      </nav>
      <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
        <Button onClick={handleLoginClick} className="text-xs md:text-base">
          Login
        </Button>
        <Button onClick={handleSignUpClick} className="text-xs md:text-base">
          Sign Up
        </Button>
        <DarkModeToggle></DarkModeToggle>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={handleSignupModalClose}
      />
      <div className="md:hidden flex items-center space-x-10 mt-4">
        <Link href="/about">About</Link>
        <Link href="/browse">Browse Product Reviews</Link>
      </div>
    </div>
  );
};

