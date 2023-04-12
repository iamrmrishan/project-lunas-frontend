import React from 'react';
import { FcGoogle } from 'react-icons/fc';

interface GoogleConnectButtonProps {
  onClick?: () => void;
}

const GoogleConnectButton: React.FC<GoogleConnectButtonProps> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      
      <a
        className="inline-flex items-center gap-2 rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
        href="/github"
        target="_blank"
        rel="noreferrer"
      >
            <FcGoogle></FcGoogle>
        Connet With Google
      </a>
    </button>
  );
};

export default GoogleConnectButton;
