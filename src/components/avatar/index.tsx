import {Img} from 'react-image'
import React from "react";

type Props = {
  seed?: string;
  large?: boolean;
};

async function Avatar({ seed, large }: Props) {
  
  return (
    <Img
      src={`https://avatars.dicebear.com/api/open-peeps/${
        seed || 'snow_white' || "placeholder"
      }.svg`}
      alt="Avatar Image"
      width={50}
      height={50}
      className={`rounded-full border-gray-300 bg-white h-10 w-10 ${
        large && "h-20 w-20"
      }`}
    />
  );
}

export default Avatar;