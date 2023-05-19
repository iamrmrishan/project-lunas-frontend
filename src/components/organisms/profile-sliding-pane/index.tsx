import React, { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { UserProfileCard } from 'components/molecules/user-profile-card';

const SlidingPane: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // pane is hidden by default
  const paneRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (paneRef.current && !paneRef.current.contains(event.target)) {
        closePane();
      }
    }

    // Attach the listeners on component mount.
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Detach the listeners on component unmount.
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

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

  return (
    <div className='z-20 md:hidden' ref={paneRef}>   
      <div // md:hidden - only visible on mobile view
        {...handlers} 
        className={`fixed inset-y-0 right-0 w-3/5 bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isOpen ? 'visible' : 'invisible'}`}
        onClick={e => e.stopPropagation()} // Prevent clicks inside the pane from bubbling up to the document
      >
        <UserProfileCard shadow={false} bgColorLight="white" bgColorDark='' />
      </div>
      {!isOpen && (
        <div {...handlers} className="fixed inset-y-0 right-0 w-10"/> // swipe handle area when pane is closed
      )}
    </div>
  );
};

export default SlidingPane;





