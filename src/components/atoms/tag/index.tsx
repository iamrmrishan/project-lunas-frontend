import React from 'react';

interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <strong className="rounded-full inline-flex items-center bg-emerald-100 px-3 py-0.5 text-xs font-medium tracking-wide text-emerald-700">
      {name}
    </strong>
  );
};
export default Tag;
