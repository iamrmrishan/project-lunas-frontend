import React from 'react';
import Avatar from '../avatar';
import Form from '../form';

type Props = {
  commumity?: string;
};

function PostBox({ commumity }: Props) {
  return (
    <div className="sticky top-16 z-40">
      <div className="flex space-x-3 bg-white dark:bg-slate-700 border border-gray-300 rounded-md p-2">
        {/* @ts-expect-error Server Component */}
        <Avatar />
        <Form />
      </div>
    </div>
  );
}

export default PostBox;
