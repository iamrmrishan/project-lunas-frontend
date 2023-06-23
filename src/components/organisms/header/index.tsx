import React, { useEffect, useState } from "react";
import DarkModeToggle from "components/molecules/dark-mode-toggle";
import LoginModal from "pages/login";
import SignupModal from "pages/signup";
import Logo from "components/atoms/logo";
import NavLink from "components/atoms/nav-link";
import Button from "components/atoms/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Dropdown from "components/molecules/dropdown";
import { useAuth } from "../../../providers/auth-provider";
import { Link } from 'react-router-dom';

export const Header: React.FC = ({}) => {
  const { isAuthenticated } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

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
          <Logo />
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <NavLink to="/profile" label="About" dropdown={false} />
              <NavLink to="/browse" label="Browse" dropdown={false} />
              {isAuthenticated && (
                <>
                  <NavLink
                    to="/"
                    label="Make a Review"
                    dropdown={false}
                  />
                  <NavLink
                    to="/create-post"
                    label="Ask about a Product"
                    dropdown={false}
                  />
                </>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {!isAuthenticated && (
              <div className="hidden sm:flex sm:gap-4"> 
              <Link to={'/login'}>
              
                <button
                  className="btn rounded-md bg-primaryBtn dark:bg-secondaryBtn px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-primaryBtnText dark:text-secondaryBtnText shadow hover:bg-primaryBtnHover dark:hover:bg-secondaryBtnHover"
                  
                >Login</button>
              </Link>             
              <Link to={'/signup'}>              
                <button
                  className="btn rounded-md bg-primaryBtn dark:bg-secondaryBtn px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-primaryBtnText dark:text-secondaryBtnText shadow hover:bg-primaryBtnHover dark:hover:bg-secondaryBtnHover"
                  
                >Sign Up</button>
              </Link>             


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