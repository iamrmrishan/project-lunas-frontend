import { Container, Header } from "components";
import React from "react";
import { useLocation } from "react-router-dom";
import { GoKebabHorizontal } from "react-icons/go";

const NotificationsPage: React.FC = () => {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);

  return (
    <Container>
      <Header />
      <div className="flex m-auto w-3/4 z-0 py-6 font-bold text-2xl">Notifications Page</div>
      <div className="bg-white shadow m-auto w-3/4 z-0">
        <div className="py-4">
          {data.map((item) => (
            <div className="flex p-4 border-b ">
              <div className="mx-4">
                <img src={item.image} style={{width: 40}} />
              </div>
              <div className='w-full'>
                <div className="flex justify-between">
                  <div className="flex items-center">{item.title}</div>
                  <div className="flex items-center px-3">
                    <button>
                      <GoKebabHorizontal />
                    </button>
                  </div>
                </div>
                <div className="opacity-50">{item.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NotificationsPage;
