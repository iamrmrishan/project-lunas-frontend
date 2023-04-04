import { Button } from 'components/button';
import { Cards } from 'components/cards';
import React, { useState } from 'react';
import data from 'meta.json';
import GoogleConnectButton from 'components/googleConnectButton';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    username?: string;
    password?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email, 'Password:', password, 'Username:', username);
    // Validate the form inputs
    const errors: { email?: string; password?: string; username?: string } = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!username) errors.username = 'username is required';

    // If there are errors, update the formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    onClose();
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
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-5xl sm:w-full dark:bg-black"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="flex items-center space-x-4">
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-4xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="bg-white px-4 py-8 sm:p-6 sm:pb-4 dark:bg-black">
                <div className="flex items-center space-x-60">
                  <h3
                    className="text-4xl leading-6 font-extrabold text-gray-900 mb-4 dark:text-white"
                    id="modal-title"
                  >
                    Signup
                  </h3>
                  <GoogleConnectButton
                    onClick={() => alert('Google Connect button clicked!')}
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`mt-1 block w-full border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                    Pick an username
                    </label>
                    <input
                      type="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={`mt-1 block w-full border ${
                        formErrors.username ? 'border-red-500' : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                      Create a password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`mt-1 block w-full border ${
                        formErrors.password
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      required
                    />
                    {formErrors.password && (
                      <p className="mt-2 text-sm text-red-500">
                        {formErrors.password}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                      Re-enter password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`mt-1 block w-full border ${
                        formErrors.password
                          ? 'border-red-500'
                          : 'border-gray-300'
                      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      required
                    />
                    {formErrors.password && (
                      <p className="mt-2 text-sm text-red-500">
                        {formErrors.password}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="register"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Already have an account ?
                    </label>
                    <label
                      htmlFor="register"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                      Login
                    </label>
                  </div>
                  <div className="flex items-center justify-end">
                    <Button>Signup</Button>
                  </div>
                </form>
              </div>
            </div>
            <Cards
              title={data.plugins[1].name}
              description={data.plugins[1].description}
              url={data.plugins[1].url}
              dmUrl={data.plugins[1].dmUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
