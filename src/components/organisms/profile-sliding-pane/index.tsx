import { UserProfileCard } from 'components/molecules/user-profile-card';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const SlidingPane: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSwipe = (deltaX: number) => {
    if (deltaX > 0) {
      closePane();
    } else if (deltaX < 0) {
      openPane();
    }
  };

  const handlers = useSwipeable({ onSwiped: ({ deltaX }) => handleSwipe(deltaX) });

  const openPane = () => {
    setIsOpen(true);
  };

  const closePane = () => {
    setIsOpen(false);
  };

  const paneStyle = {
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  };

  return (
    <div {...handlers} className='z-20'>
      <div
        className={`fixed inset-y-0 right-0 w-3/5 bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
       <UserProfileCard shadow={false} bgColorLight="white" bgColorDark='' />
      </div>
    </div>
  );
};

export default SlidingPane;
