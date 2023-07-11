import Button from "components/atoms/button";
import React from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Notifications: React.FC = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification Hi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notificationHi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },
    {
      title: "This is the Title",
      image: "https://picsum.photos/40",
      message: "Hi, You have a notification",
    },

  ];
  return (
    <div className="absolute t-4 sm:left-0 left-20 shadow-lg rounded w-80 z-10 bg-white dark:bg-secondaryBtn2 text-primaryText dark:text-secondaryText ">
      <div className="p-4 flex justify-between  bg-primaryBtn2 dark:bg-secondaryColor bg-opacity-70 rounded" >
        <div>Notifications</div>
        <div className="flex gap-3">
          <div>Messages</div>
          <div className="flex items-center">
            <MdOutlineBookmarkAdded />
          </div>
          <div className="flex items-center">
            <CiSettings />
          </div>
        </div>
      </div>
      <div
        className=" h-60 overflow-y-scroll mt-2"
        >
        {data.slice(0,5).map((item) => (
          <div className="flex p-4 hover:bg-primaryBtn2 dark:hover:bg-secondaryColor dark:hover:bg-opacity-20 hover:bg-opacity-40 ">
            <div className="mr-2">
              <img src={item.image} />
            </div>
            <div className='opacity-80'>
              <div className='font-semibold'>{item.title}</div>
              <div className='-z-1 text-opacity-70 dark:text-opacity-30' >{item.message}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex'>
        <button className='opacity-80 p-2 m-2 bg-primaryBtn2 dark:bg-secondaryColor text-primaryText dark:text-secondaryText w-full font-bold rounded' onClick={() => navigate("/notifications", {state: {data: data }})}
        >SEE ALL</button>
      </div>
    </div>
  );
};

export default Notifications;
