import React from 'react';
import { ReactComponent as GoogleIcon } from '../svgIcons/google-icon.svg'; // Import Google icon

interface GoogleConnectButtonProps {
  onClick?: () => void;
}

const GoogleConnectButton: React.FC<GoogleConnectButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-white text-gray-700 font-bold py-2 px-4 md:px-4 rounded-full border border-gray-300 shadow hover:shadow-md dark:bg-black dark:text-white"
    >
      <GoogleIcon className="w-6 h-6 mr-2" />
      Connect with Google
    </button>
  );
};

export default GoogleConnectButton;