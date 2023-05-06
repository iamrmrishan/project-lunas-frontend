import { LogoDribble } from "assets/icons/DribbleLogo";
import {LogoFacebook} from "assets/icons/FacebookLogo";
import { LogoGitHub } from "assets/icons/GitHubLogo";
import { LogoInstagram } from "assets/icons/InstagramLogo";
import { LogoTwitter } from "assets/icons/TwitterLogo";
import { LogoHome } from "assets/icons/logo";
import Button from "components/atoms/button";
import Input from "components/atoms/input";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-primaryColor dark:bg-secondaryColor"
    >
      <div className="mx-auto max-w-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600 dark:text-teal-300">
            <LogoHome />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-primaryText dark:text-secondaryText">
                  Get the latest product reviews
                </h2>

                <p className="mt-4 text-primaryText dark:text-secondaryText text-opacity-70 dark:text-opacity-70">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-primaryBtn p-2 focus-within:ring dark:border-secondaryBtn border-opacity-20 dark:border-opacity-20 sm:flex sm:items-center sm:gap-4">
                  <Input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-primaryText border-opacity-5 dark:border-secondaryText dark:border-opacity-5 bg-transparent focus:border-transparent focus:ring-transparent dark:bg-transparent dark:text-white sm:text-sm"
                  />

                  <Button
                    className="mt-1 w-full bg-primaryBtn hover:opacity-80 dark:hover:opacity-80 dark:bg-secondaryBtn px-6 py-3 text-sm font-bold uppercase tracking-wide text-primaryBtnText dark:text-secondaryBtnText transition-none  sm:mt-0 sm:w-auto sm:flex-shrink-0"
                    text="Sign Up"
                  ></Button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-primaryText dark:text-secondaryText">
                Products
              </p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Terms
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Advertising
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-primaryText dark:text-secondaryText">
                Company
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Meet the Team
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-primaryText dark:text-secondaryText">
                Helpful Links
              </p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-primaryText dark:text-secondaryText">
                Legal
              </p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-75 dark:text-opacity-75 "
                    >
                      Statistics
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText transition hover:opacity-75 dark:text-secondaryText"
                >
                  <span className="sr-only">Facebook</span>
                  <LogoFacebook />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText transition hover:opacity-75 dark:text-secondaryText"
                >
                  <span className="sr-only">Instagram</span>
                  <LogoInstagram />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText transition hover:opacity-75 dark:text-secondaryText"
                >
                  <span className="sr-only">Twitter</span>
                  <LogoTwitter />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText transition hover:opacity-75 dark:text-secondaryText"
                >
                  <span className="sr-only">GitHub</span>
                  <LogoGitHub />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText transition hover:opacity-75 dark:text-secondaryText "
                >
                  <span className="sr-only">Dribbble</span>
                  <LogoDribble />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-secondaryColor pt-8 dark:border-primaryColor border-opacity-20 dark:border-opacity-10">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-primaryText dark:text-secondaryText text-opacity-60 dark:text-opacity-60">
              &copy; 2023. Project LUNAS. All rights reserved.
            </p>

            <nav
              aria-label="Footer Navigation - Support"
              className="mt-8 sm:mt-0"
            >
              <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-60 dark:text-opacity-60"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-60 dark:text-opacity-60"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-primaryText transition hover:opacity-75 dark:text-secondaryText text-opacity-60 dark:text-opacity-60"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
