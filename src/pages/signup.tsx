import { Container, Header } from "components";
import { ISignupUserPayload } from "interfaces/auth-interface";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectLoader } from "redux/selectors/auth-selector";
import { authSlice } from "redux/slices/auth-slice";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    userName?: string;
    password?: string;
    passwordConfirmation?: string;
  }>({});
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials: ISignupUserPayload = {
      email: email,
      password: password,
      userName: userName,
    };

    // Validate the form inputs
    const errors: {
      email?: string;
      password?: string;
      userName?: string;
      passwordConfirmation?: string;
    } = {};
    if (!email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is not valid";
    else if (error) errors.email = error;
    if (!password) errors.password = "Password is required";
    if (!userName) errors.userName = "username is required";
    if (password != passwordConfirmation)
      errors.passwordConfirmation = "Passwords dont match";
    dispatch(authSlice.actions.signupRequest(credentials));

    // If there are errors, update the formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  };

  return (
    <>
    <Container>
      <Header />
      <div className="sm:bg-white sm:dark:bg-secondaryBtn2 px-20 py-30 shadow-md rounded-sm m-auto md:mx-auto">
        <form action="#" className="mt-8 grid grid-cols-6 gap-6 mb-10">

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-primaryText dark:text-secondaryText text-opacity-75"
              >
              Username
            </label>

            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-md border-primaryText bg-transparent text-sm text-primaryText shadow-sm dark:border-secondaryText dark:bg-transparent dark:text-secondaryText border-opacity-10 dark:border-opacity-10"
              />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border-primaryText bg-transparent text-sm text-primaryText shadow-sm dark:border-secondaryText dark:bg-transparent dark:text-secondaryText border-opacity-10 dark:border-opacity-10"
              />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border-primaryText bg-transparent text-sm text-primaryText shadow-sm dark:border-secondaryText dark:bg-transparent dark:text-secondaryText border-opacity-10 dark:border-opacity-10"
              />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="mt-1 w-full rounded-md border-primaryText bg-transparent text-sm text-primaryText shadow-sm dark:border-secondaryText dark:bg-transparent dark:text-secondaryText border-opacity-10 dark:border-opacity-10"
              />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-primaryText bg-transparent dark:bg-transparent shadow-sm dark:border-secondaryText border-opacity-10 dark:border-opacity-10  "
                />

              <span className="text-sm text-primaryText dark:text-secondaryText ">
                I want to receive emails about events and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-primaryText dark:text-gray-400 text-opacity-75">
              By creating an account, you agree to our{" "}
              <a
                href="#"
                className="text-primaryText underline dark:text-secondaryText"
                >
                terms and conditions
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primaryText underline dark:text-secondaryText"
                >
                privacy policy{" "}
              </a>
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              onClick={handleSubmit}
              className="inline-block shrink-0 rounded-md border border-primaryBtn bg-primaryBtn dark:border-secondaryBtn dark:bg-secondaryBtn px-12 py-3 text-sm font-medium text-primaryBtnText dark:text-secondaryBtnText transition hover:bg-transparent dark:hover:bg-transparent hover:text-primaryText focus:outline-none focus:ring active:text-primaryText dark:hover:bg-transaparent dark:hover:text-secondaryText"
              >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              Already have an account?{" "}
              <a
                href="login"
                className="text-gray-700 underline dark:text-gray-200"
              >
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </Container>
                </>
  );
};

export default Signup;
