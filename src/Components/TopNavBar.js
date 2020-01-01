import React from "react";
import { Link } from "react-router-dom";

function TopNavBar() {
  return (
    <div className="topnav">
      <Link to="/Home">Home </Link>
      <div className="topnav-right">
        <a href="#account">Account</a>
        <a href="#logout">Logout</a>
      </div>
    </div>
  );
}

export default TopNavBar;
