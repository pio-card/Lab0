import React from "react";
import { Link } from "react-router-dom";

function BottomNavBar() {
  return (
    <div className="topnav">
      <Link className="active" to="/Dashboard">
        Dashboard{" "}
      </Link>
      <Link to="/WCM">WCM </Link>
      <a href="#whm">WHM</a>
      <div className="topnav-right">
        <a href="#setting">Setting</a>
        <a href="#report">Report</a>
      </div>
    </div>
  );
}

export default BottomNavBar;
