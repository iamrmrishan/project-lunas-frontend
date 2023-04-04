import { Button } from 'components/button';
import { Cards } from 'components/cards';
import React, { useState } from 'react';
import data from 'meta.json';
import GoogleConnectButton from 'components/googleConnectButton';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email, 'Password:', password);
    // Validate the form inputs
    const errors: { email?: string; password?: string } = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';

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
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:align-middle sm:max-w-lg md:max-w-5xl sm:w-full dark:bg-black"
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
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-16">
                  <h3
                    className="text-4xl leading-6 font-extrabold text-gray-900 mb-4 dark:text-white"
                    id="modal-title"
                  >
                    Login
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
                      Email address or Username
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
                      htmlFor="password"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                      Password
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
                  <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4">
                    <label
                      htmlFor="register"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Don't have an account ?
                    </label>
                    <label
                      htmlFor="register"
                      className="block text-sm font-bold text-gray-700 dark:text-white"
                    >
                      Register
                    </label>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <Button>Login</Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block">
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
    </div>
  );
};

export default LoginModal;
