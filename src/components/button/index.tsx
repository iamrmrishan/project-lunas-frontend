import React from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`py-2 px-4 rounded-full bg-black focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-bg-white text-lg text-white font-bold dark:text-black dark:bg-white  ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
