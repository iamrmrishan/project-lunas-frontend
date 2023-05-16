import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import { IoImageOutline } from 'react-icons/io5';

export const UserProfileCard: React.FC = () => {
  return (
    <div className="max-w-md sha mx-auto md:max-w-2xl mt-10 min-w-0 break-words bg-primaryColor shadow-md w-full mb-6 rounded-xl  dark:text-secondaryText dark:bg-secondaryColor">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center mt-5">
            <img
              alt="profile"
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=150&h=150&q=80"
              className="shadow-xl rounded-full align-middle border-white border-4 dark:border-secondaryColor absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
            />
          </div>
          <div className="w-full text-center mt-20">
            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-primaryText dark:text-secondaryText">
                  3,360
                </span>
                <span className="text-sm text-slate-400">Reviews</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-primaryText dark:text-secondaryText">
                  2,454
                </span>
                <span className="text-sm text-slate-400">Comments</span>
              </div>

              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-primaryText dark:text-secondaryText">
                  564
                </span>
                <span className="text-sm text-slate-400">Points</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
            Mike Thompson
          </h3>
        </div>
        <div className="mt-6 py-6 border-t border-primaryText dark:border-secondaryText dark:border-opacity-10 border-opacity-10 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <p className="font-light leading-relaxed text-slate-600 mb-4">
                An artist of considerable range, Mike is the name taken by
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
