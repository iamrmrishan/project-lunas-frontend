import React, { useState } from "react";
import DarkModeToggle from "components/molecules/dark-mode-toggle";
import LoginModal from "components/organisms/login-modal";
import SignupModal from "components/organisms/signup-modal";
import Logo from "components/atoms/logo";
import NavLink from "components/atoms/nav-link";
import Button from "components/atoms/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

export const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    <header
      aria-label="Site Header"
      className="bg-primaryColor dark:bg-secondaryColor"
    >
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
              {isLoggedIn && (
                <>
                  <NavLink to="/" label="Make a Review" />
                  <NavLink to="/" label="Ask about a Product" />
                </>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {!isLoggedIn && (
              <div className="hidden sm:flex sm:gap-4">
                <Button
                  className="btn rounded-md bg-primaryBtn dark:bg-secondaryBtn px-5 py-2.5 text-sm font-medium text-primaryBtnText dark:text-secondaryBtnText shadow hover:bg-primaryBtnHover dark:hover:bg-secondaryBtnHover"
                  onClick={handleLoginClick}
                  text="Login"
                />
                <Button
                  className="rounded-md bg-primaryBtn2 px-5 py-2.5 text-sm font-medium text-primaryText dark:bg-secondaryBtn2 dark:text-primaryBtnText dark:hover:text-white/75"
                  onClick={handleSignUpClick}
                  text="Sign Up"
                />
              </div>
            )}
            <DarkModeToggle />
            <Button
              className="rounded-full font-bold bg-primaryBtn dark:bg-secondaryBtn p-3 text-primaryBtnText dark:text-secondaryBtnText"
              icon={<CiUser />}
              onClick={() => setIsLoggedIn((e) => !e)}
            />
            <Button
              className={
                "block md:hidden rounded bg-primaryBtn2 p-2 text-primaryText transition hover:text-gray-600/75 dark:bg-secondaryBtn2 dark:text-secondaryText dark:hover:text-white/75"
              }
              icon={<GiHamburgerMenu></GiHamburgerMenu>}
              onClick={() => setIsMenuOpen((e) => !e)}
            ></Button>
          </div>
        </div>
      </div>
    </header>
    
  );
};
