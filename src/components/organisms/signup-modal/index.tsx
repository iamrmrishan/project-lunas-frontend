import { LogoModal } from 'assets/icons/modal-logo';
import { ISignupUserPayload } from 'interfaces/auth-interface';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoader } from 'redux/selectors/auth-selector';
import { authSlice } from 'redux/slices/auth-slice';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
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
    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is not valid';
    else if (error) errors.email = error;
    if (!password) errors.password = 'Password is required';
    if (!userName) errors.userName = 'username is required';
    if (password != passwordConfirmation)
      errors.passwordConfirmation = 'Passwords dont match';
    dispatch(authSlice.actions.signupRequest(credentials));

    // If there are errors, update the formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    const waitForLoadingToFinish = () => {
      if (loading) {
        setTimeout(waitForLoadingToFinish, 100);
      } else {
        onClose();
      }
    };

    waitForLoadingToFinish();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-primaryColor rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-lg md:max-w-7xl sm:w-full dark:bg-secondaryColor"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <section className="bg-primaryColor dark:bg-secondaryColor">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
              <section className="relative flex h-32 items-end bg-secondaryColor lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                  alt="Night"
                  src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="hidden lg:relative lg:block lg:p-12">
                  <a className="block text-secondaryText" href="/">
                    <span className="sr-only">Home</span>
                    <LogoModal />
                  </a>
                  <h2 className="mt-6 text-2xl font-bold text-secondaryText sm:text-3xl md:text-4xl">
                    Welcome to Project LUNAS
                  </h2>

                  <p className="mt-4 leading-relaxed text-secondaryText dark:text-opacity-60 text-opacity-60 dark:text-secondaryText">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                  </p>
                </div>
              </section>

              <main
                aria-label="Main"
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
              >
                <div className="max-w-xl lg:max-w-3xl">
                  <div className="relative -mt-16 block lg:hidden">
                    <a
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-secondaryText dark:bg-secondaryColor sm:h-20 sm:w-20"
                      href="/"
                    >
                      <span className="sr-only">Home</span>
                      <LogoModal />
                    </a>
                    <h1 className="mt-2 text-2xl font-bold text-primaryText dark:text-secondaryText sm:text-3xl md:text-4xl">
                      Welcome to Project Lunas
                    </h1>

                    <p className="mt-4 leading-relaxed text-primaryText dark:text-secondaryText text-opacity-60">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi nam dolorum aliquam, quibusdam aperiam
                      voluptatum.
                    </p>
                  </div>

                  <form action="#" className="mt-8 grid grid-cols-6 gap-6">
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
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                        className="mt-1 w-full rounded-md border-primaryText bg-transparent text-sm text-primaryText shadow-sm dark:border-secondaryText dark:bg-transparent dark:text-secondaryText border-opacity-10 dark:border-opacity-10"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="MarketingAccept" className="flex gap-4">
                        <input
                          type="checkbox"
                          id="MarketingAccept"
                          name="marketing_accept"
                          className="h-5 w-5 rounded-md border-primaryText bg-transparent darK:bg-transparent shadow-sm dark:border-secondaryText border-opacity-10 dark:border-opacity-10  "
                        />

                        <span className="text-sm text-primaryText dark:text-secondaryText ">
                          I want to receive emails about events and company
                          announcements.
                        </span>
                      </label>
                    </div>

                    <div className="col-span-6">
                      <p className="text-sm text-primaryText dark:text-gray-400 text-opacity-75">
                        By creating an account, you agree to our{' '}
                        <a
                          href="#"
                          className="text-primaryText underline dark:text-secondaryText"
                        >
                          terms and conditions
                        </a>{' '}
                        and{' '}
                        <a
                          href="#"
                          className="text-primaryText underline dark:text-secondaryText"
                        >
                          privacy policy{' '}
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
                        Already have an account?{' '}
                        <a
                          href="#"
                          className="text-gray-700 underline dark:text-gray-200"
                        >
                          Log in
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
