import React from "react";

//import component statements
import LeftContainerDP from "../Components/LeftContainerDP";
import RightContainerDP from "../Components/RightContainerDP";

function Dashboard() {
  return (
    <div className="App">
      <div className="row">
        <LeftContainerDP />
        <RightContainerDP />
      </div>
    </div>
  );
}
export default Dashboard;
