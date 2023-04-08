import React, { useState } from "react";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  community: string;
};

type Props = {
  community?: string;
};

function Form({ community }: Props) {

  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

 

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();


  const onSubmit = handleSubmit(async (formData) => {
    const notification = toast.loading("Creating a new post...");
  });
  return (
    <form onSubmit={onSubmit} className="flex flex-col flex-1">
      <div className="flex flex-1 space-x-3  items-center ">
        <input
          {...register("postTitle", { required: true })}
          disabled={false}
          type="text"
          placeholder={
            'session'
              ? community
                ? `Create a post in r/${community}`
                : "Create a post by entering a title"
              : "Sign in to post"
          }
          className="flex-1 rounded-md bg-blue-50 dark:text-gray-800 p-2 pl-5 outline-none"
        />
        <PhotoIcon
          className={`h-6 w-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
        />
        <LinkIcon className={`h-6 w-6 text-gray-300 cursor-pointer`} />
      </div>
      {/* if postTitle active set to true */}
      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              className="flex-1 m-2 bg-blue-50 dark:text-gray-800 p-2 outline-none"
              {...register("postBody")}
              type="text"
              placeholder="Text (optional)"
            />
          </div>

          {!community && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Subreddit:</p>
              <input
                className=" m-2 flex-1 bg-blue-50 dark:text-gray-800 p-2 outline-none"
                {...register("community", { required: true })}
                type="text"
                placeholder="i.e nextjs"
              />
            </div>
          )}

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                className=" m-2 flex-1 bg-blue-50 dark:text-gray-800 p-2 outline-none"
                {...register("postImage")}
                type="text"
                placeholder="Optional..."
              />
            </div>
          )}
          {/* Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>A post title is required.</p>
              )}
              {errors.community?.type === "required" && (
                <p>A subreddit is required.</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default Form;