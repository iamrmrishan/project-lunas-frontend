import React, { useState } from "react";
import { ILoginUserPayload } from "interfaces/auth-interface";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoader } from "redux/selectors/auth-selector";
import { authSlice } from "redux/slices/auth-slice";
import { Container, Header } from "components";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const error = useSelector(selectError);
  const loading = useSelector(selectLoader);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials: ILoginUserPayload = {
      email: email,
      password: password,
    };

    // Validate the form inputs
    const errors: { email?: string; password?: string } = {};
    if (!email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is not valid";
    else if (error) errors.email = error;
    if (!password) errors.password = "Password is required";

    dispatch(authSlice.actions.loginRequest(credentials));
    // If there are errors, update the formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // const waitForLoadingToFinish = () => {
    //   if (loading) {
    //     setTimeout(waitForLoadingToFinish, 100);
    //   } else {
    //     onClose();
    //   }
    // };

    // waitForLoadingToFinish();
  };

  // if (!isOpen) return null;

  return (
    <>
    <Container>
      <Header />
      <div className="sm:bg-white sm:dark:bg-secondaryBtn2 px-20 py-30 shadow-md rounded-sm m-auto md:mx-auto">
        <form action="#" className="mt-10 mb-10 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-left text-sm font-medium text-primaryText dark:text-secondaryText text-opacity-75"
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
            {formErrors.email && (
              <p className="mt-1 text-xs text-red-600">{formErrors.email}</p>
            )}
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Password"
              className="block text-left text-sm font-medium text-primaryText dark:text-secondaryText text-opacity-75"
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
            {formErrors.password && (
              <p className="mt-1 text-xs text-red-600">{formErrors.password}</p>
              )}
          </div>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              onClick={handleSubmit}
              className="inline-block shrink-0 rounded-md border-2 border-primaryBtn dark:border-secondaryBtn bg-primaryBtn dark:bg-secondaryBtn px-12 py-3 text-sm font-medium text-primaryBtnText dark:text-secondaryBtnText transition hover:bg-transparent hover:text-primaryText focus:outline-none focus:ring active:text-primaryText dark:hover:bg-transparent dark:hover:text-secondaryText"
              >
              Login
            </button>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              Don't have an account?{" "}
              <a
                href="signup"
                className="text-gray-700 underline dark:text-gray-200"
                >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </Container>
                </>
  );
};

export default Login;
