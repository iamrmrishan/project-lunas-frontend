import NavLink from "components/atoms/nav-link";
import React from "react";

function Dropdown(isLoggedIn) {
  // console.log();
  const menuItems = [
    { label: "About", path: "/" },
    { label: "About", path: "/" },
    { label: "About", path: "/" },
    { label: "About", path: "/" },
  ];
  return (
    <div className="m-10">
      {/* <ul>
        {menuItems.map((item) => {
            <NavLink to={item.path} label={item.label} />
        })}
      </ul> */}
      
      <ul className="flex flex-col items-center gap-6 text-sm text-primaryBtnText ">
        <NavLink to="/post" label="About" />
        <NavLink to="/browse" label="Browse" />
        {isLoggedIn && (
          <>
            <NavLink to="/" label="Make a Review" />
            <NavLink to="/" label="Ask about a Product" />
          </>
        )}
      </ul>
    </div>
  );
}

export default Dropdown;
