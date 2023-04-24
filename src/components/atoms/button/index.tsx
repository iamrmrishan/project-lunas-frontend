import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, icon }) => {
  return (
    <button onClick={onClick} className={className}>
      {text != '' && icon ? icon : icon && <span className="mr-2">{text}</span>}
      {text}
    </button>
  );
};

export default Button;
