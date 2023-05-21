import Button from 'components/atoms/button';
import { useState } from 'react';
import ReactQuill from 'react-quill';

const CreatePostForm = () => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 border bg-green-200">
        <h1 className="text-2xl font-bold lg:text-3xl">Ask About a Product</h1>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="p-4 my-4 border rounded  border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10">
              <div>What are the details of your problem?</div>
              <div>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </div>
              <div className="my-5">
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  onFocus={() => setShow((prev) => !prev)}
                />
              </div>
              <div>
                <button>Next</button>
              </div>
            </div>
          </div>
          <div
            hidden={show}
            className="p-4 my-4 border rounded  border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10"
          >
            hi
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePostForm;
