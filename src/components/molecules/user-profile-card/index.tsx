import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import { IoImageOutline } from 'react-icons/io5';

interface UserProfileCardProps {
slidingPane: boolean;

}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({slidingPane}) => {
  return (
    <div className={`max-w-md flex justify-center mx-auto md:max-w-2xl mt-10 min-w-0 break-words bg-transparent ${slidingPane ? `` : `shadow-md`} mb-6 rounded-xl  dark:text-secondaryText dark:bg-transparent`}>
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center mt-5 min-h-full ">
            <img
              alt="profile"
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=150&h=150&q=80"
              className={`${slidingPane && 'flex justify-self-center justify-around'} lg:shadow-xl rounded-full align-middle border-white lg:border-4 dark:border-secondaryColor ${slidingPane ? 'relative': 'absolute'} -m-16 -ml-20 lg:-ml-16 max-w-[150px]`}
            />
          </div>
          <div className="w-full text-center mt-20">
            <div className="xl:flex justify-center lg:py-6 pt-8 pb-0 grid col-span-2 md:grid-cols-3 lg:grid-cols-2  lg:px-0 sm:px-10 px-6">
              <div className="p-3 text-center lg:col-span-1">
                <span className="lg:text-lg xl:text-xl sm:text-2xl font-bold block uppercase tracking-wide text-primaryText dark:text-secondaryText">
                  3,360
                </span>
                <span className="text-sm text-slate-400">Reviews</span>
              </div>
              <div className="p-3 text-center col-span-1">
                <span className="lg:text-lg xl:text-xl sm:text-2xl  font-bold block uppercase tracking-wide text-primaryText dark:text-secondaryText">
                  2,454
                </span>
                <span className="text-sm text-slate-400">Comments</span>
              </div>

              <div className="p-3 text-center col-span-2 md:col-span-1 lg:col-span-2">
                <span className="lg:text-lg xl:text-xl sm:text-2xl  font-bold block uppercase tracking-wide text-primaryText dark:text-secondaryText">
                  564
                </span>
                <span className="text-sm text-slate-400">Points</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-xl xl:text-2xl text-slate-700 font-bold leading-normal mb-1">
            Mike Thompson
          </h3>
        </div>
        <div className="mt-6 py-6 border-t border-primaryText dark:border-secondaryText dark:border-opacity-10 border-opacity-10 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <p className="font-light text-sm xl:text-base leading-relaxed text-slate-600 mb-4">
                An artist of considerable range, Mike is the name taken by
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
