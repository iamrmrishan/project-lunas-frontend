import Button from "components/atoms/button";
import Input from "components/atoms/input";
import { useState } from "react";
import ReactQuill from "react-quill";

const CreatePostForm = () => {
  const [value, setValue] = useState({
    introduction: "",
    details: "",
    tags: "",
    title: "",
  });
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState<number | null>();

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-4 md:gap-12 gap-2">
          <div className="md:col-span-3 col-span-4  text-primaryText dark:text-secondaryText">
            <div className="flex flex-col p-4 my-4 bg-white border rounded  border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10">
              <div className="text-lg font-bold">
                What are the details of your problem?
              </div>
              <div>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </div>
              <div className="my-5 h-48">
                <ReactQuill
                  className="h-36 mb-auto"
                  theme="snow"
                  value={value.introduction}
                  onChange={(v) =>
                    setValue({
                      ...value,
                      introduction: v,
                    })
                  }
                  onFocus={() => {
                    setShow(true);
                    setFocused(0);
                  }}
                  onBlur={() => {
                    setShow(false);
                    setFocused(null);
                  }}
                />
              </div>
              <div>
                <button
                  disabled={value.introduction.length < 20}
                  className={`${
                    value.introduction.length < 20
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  } bg-primaryBtn dark:bg-secondaryBtn px-3 py-1 rounded text-primaryBtnText dark:text-secondaryBtnText`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-1'>
            <div
              hidden={!show || focused != 0}
              className="my-4 border rounded bg-white shadow border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10"
            >
              <div className="font-bold text-sm p-4 text-primaryText dark:text-secondaryText border ">
                Proof-read before posting
              </div>
              <div>
                <div></div>
                <div className="p-4 text-xs text-primaryText dark:text-secondaryText font-sm">
                  Now that you're ready to post your question, read through it
                  from start to finish. Does it make sense? Add any details you
                  missed and read through it again. Now is a good time to make
                  sure that your title still describes the problem!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 md:gap-12 gap-2">
          <div className="md:col-span-3 col-span-4 text-primaryText dark:text-secondaryText">
            <div className="p-4 my-4 bg-white border rounded  border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10">
              <div className="text-lg font-bold">
                What did you try and what were you expecting?
              </div>
              <div>
                Describe what you tried, what you expected to happen, and what
                actually resulted. Minimum 20 characters.
              </div>
              <div className="my-5 h-48">
                <ReactQuill
                  className="h-36"
                  theme="snow"
                  value={value.details}
                  onChange={(v) =>
                    setValue({
                      ...value,
                      details: v,
                    })
                  }
                  onFocus={() => {
                    setShow(true);
                    setFocused(1);
                  }}
                  onBlur={() => {
                    setShow(false);
                    setFocused(null);
                  }}
                />
              </div>
              <div>
                <button
                  disabled={value.details.length < 20}
                  className={`${
                    value.details.length < 20
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  } bg-primaryBtn dark:bg-secondaryBtn px-3 py-1 rounded text-primaryBtnText dark:text-secondaryBtnText`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className='col-span-4 md:col-span-1'>
            <div
              hidden={!show || focused != 1}
              className="my-4 border rounded bg-white shadow border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10"
            >
              <div className="font-bold text-sm p-4 text-primaryText dark:text-secondaryText border ">
                Expand on the problem
              </div>
              <div>
                <div></div>
                <div className="p-4 text-xs text-primaryText dark:text-secondaryText font-sm">
                  Show what you've tried, tell us what happened, and why it
                  didn't meet your needs. Not all questions benefit from
                  including code, but if your problem is better understood with
                  code you've written, you should include a minimal,
                  reproducible example. Please make sure to post code and errors
                  as text directly to the question (and not as images), and
                  format them appropriately.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 md:gap-12 gap-2">
          <div className="md:col-span-3 col-span-4 text-primaryText dark:text-secondaryText">
            <div className="p-4 my-4 bg-white border rounded  border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10">
              <div className="text-lg font-bold">Tags</div>
              <div>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </div>
              <div className="my-5">
                <input
                  value={value.tags}
                  onChange={(v) =>
                    setValue({
                      ...value,
                      tags: v.target.value,
                    })
                  }
                  onFocus={() => {
                    setShow(true);
                    setFocused(2);
                  }}
                  onBlur={() => {
                    setShow(false);
                    setFocused(null);
                  }}
                  className="border w-full py-2 px-1.5"
                />
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-1'>
            <div
              hidden={!show || focused != 2}
              className="my-4 border rounded bg-white shadow border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10 h-auto"
            >
              <div className="font-bold text-sm p-4 text-primaryText dark:text-secondaryText border ">
                Adding tags
              </div>
              <div>
                <div></div>
                <div className="p-4 text-xs text-primaryText dark:text-secondaryText font-sm">
                  Tags help ensure that your question will get attention from
                  the right people. Tag things in more than one way so people
                  can find them more easily. Add tags for product lines,
                  projects, teams, and the specific technologies or languages
                  used. Learn more about tagging
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 md:gap-12 gap-2">
          <div className="md:col-span-3 col-span-4 text-primaryText dark:text-secondaryText">
            <div className="p-4 my-4 bg-white border rounded  border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10">
              <div className="text-lg font-bold">Title</div>
              <div>
                Be specific and imagine you’re asking a question to another
                person.
              </div>
              <div className="my-5">
                <input
                  value={value.title}
                  onChange={(v) =>
                    setValue({
                      ...value,
                      title: v.target.value,
                    })
                  }
                  onFocus={() => {
                    setShow(true);
                    setFocused(3);
                  }}
                  onBlur={() => {
                    setShow(false);
                    setFocused(null);
                  }}
                  className="border w-full py-2 px-1.5"
                />
              </div>
              <div>
                <button
                  disabled={value.title.length < 20}
                  className={`${
                    value.title.length < 20
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  } bg-primaryBtn dark:bg-secondaryBtn px-3 py-1 rounded text-primaryBtnText dark:text-secondaryBtnText`}
                >
                  Review Your Question
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-1'>
            <div
              hidden={!show || focused != 3}
              className="my-4 border rounded bg-white shadow border-primaryText  dark:border-secondaryText border-opacity-10 dark:border-opacity-10"
            >
              <div className="font-bold text-sm p-4 text-primaryText dark:text-secondaryText border ">
                Writing a good title
              </div>
              <div>
                <div></div>
                <div className="p-4 text-xs text-primaryText dark:text-secondaryText">
                  Your title should summarize the problem. You might find that
                  you have a better idea of your title after writing out the
                  rest of the question.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-4 gap-6 items-center">
          <button className="bg-primaryBtn dark:bg-secondaryBtn px-3 py-1 rounded text-primaryBtnText dark:text-secondaryBtnText">
            Post Question
          </button>

          <div className="text-red-400">Discard Question</div>
        </div>
      </div>
    </section>
  );
};

export default CreatePostForm;
