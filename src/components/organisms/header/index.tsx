import React, { useEffect, useState } from "react";
import DarkModeToggle from "components/molecules/dark-mode-toggle";
import LoginModal from "components/organisms/login-modal";
import SignupModal from "components/organisms/signup-modal";
import Logo from "components/atoms/logo";
import NavLink from "components/atoms/nav-link";
import Button from "components/atoms/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Dropdown from "components/molecules/dropdown";
import { useAuth } from "../../../providers/auth-provider";

interface HeaderProps {
  showPosts?: () => void;
  selected?: string;
}

export const Header: React.FC<HeaderProps> = ({ showPosts, selected }) => {
  const { isAuthenticated } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

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

  const handleDropdown = () => {
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      handleDropdown();
    }
    window.addEventListener("resize", handleResize);
  });

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
              <NavLink
                to="/profile"
                label="About"
                dropdown={false}
                selected={selected == "About"}
              />
              <NavLink
                to="/browse"
                label="Browse"
                dropdown={false}
                onClick={showPosts}
                selected={selected == "Browse"}
              />
              {isAuthenticated && (
                <>
                  <NavLink
                    to="/"
                    label="Make a Review"
                    dropdown={false}
                    selected={selected == "Make a Review"}
                  />
                  <NavLink
                    to="/create-post"
                    label="Ask about a Product"
                    dropdown={false}
                    selected={selected?.toLowerCase() == "Ask about a Product".toLowerCase()}
                  />
                </>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {!isAuthenticated && (
              <div className="hidden sm:flex sm:gap-4">
                <Button
                  className="btn rounded-md bg-primaryBtn dark:bg-secondaryBtn px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-primaryBtnText dark:text-secondaryBtnText shadow hover:bg-primaryBtnHover dark:hover:bg-secondaryBtnHover"
                  onClick={handleLoginClick}
                  text="Login"
                />
                <Button
                  className="rounded-md bg-primaryBtn2 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-primaryText dark:bg-secondaryBtn2 dark:text-primaryBtnText dark:hover:text-white/75"
                  onClick={handleSignUpClick}
                  text="Sign Up"
                />
              </div>
            )}
            <DarkModeToggle />
            <Button
              className="rounded-full lg:block hidden font-bold bg-primaryBtn dark:bg-secondaryBtn p-2 md:p-3 text-primaryBtnText dark:text-secondaryBtnText"
              icon={<CiUser size={18} />}
            />
            {/* <div className="bg-primaryColor flex flex-col"> */}
            {!isDropdownOpen ? (
              <Button
                className={
                  "z-10 block md:hidden rounded bg-primaryBtn2 p-2 text-primaryText transition dark:bg-secondaryBtn2 dark:text-secondaryText"
                }
                icon={<GiHamburgerMenu></GiHamburgerMenu>}
                onClick={() => {
                  setIsDropDownOpen((e) => !e);
                }}
              ></Button>
            ) : (
              <>
                <Button
                  className={
                    "z-10 block md:hidden rounded text-primaryText transition dark:text-secondaryText right-6"
                  }
                  icon={<GrClose color="white" />}
                  onClick={() => {
                    setIsDropDownOpen((e) => !e);
                  }}
                ></Button>
                <div
                  hidden={!isDropdownOpen}
                  className="z-10 shadow md:hidden dark:bg-secondaryBtn2 bg-primaryColor absolute top-14 right-6 dark:brightness-70 brightness-70 rounded-b-lg"
                >
                  <Dropdown open={handleDropdown} />
                </div>
              </>
            )}

            {/* </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};