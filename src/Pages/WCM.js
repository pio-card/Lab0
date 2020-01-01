import React from "react";

//import component statements
import LeftContainerWCMP from "../Components/LeftContainerWCMP";
import RightContainerWCMP from "../Components/RightContainerWCMP";

function WCM() {
  return (
    <div className="App">
      <div className="row">
        <LeftContainerWCMP />
        <RightContainerWCMP />
      </div>
    </div>
  );
}
export default WCM;
