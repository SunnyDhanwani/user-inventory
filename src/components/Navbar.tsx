import React from "react";
import "./../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="text-white text-24">User&apos;s Inventory</div>
      <img src="/profile.svg" className="profile-icon" />
    </div>
  );
};

export default Navbar;
