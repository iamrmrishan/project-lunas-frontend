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
    <div className="text-center flex justify-between items-center bg-black">
      <Logo />
      <nav className="flex items-center space-x-10">
        <Link href="/about">About</Link>
        <Link href="/browse">Browse Product Reviews</Link>
      </nav>
      <div className="flex items-center space-x-6 mx-5">
      <Button>Add a product review</Button>
        <Button>Ask about a product</Button>
        <Button onClick={handleLoginClick}>Login</Button>
        <Button onClick={handleSignUpClick}>Sign Up</Button>
        <DarkModeToggle></DarkModeToggle>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={handleSignupModalClose}
      />
    </div>
  );
};
